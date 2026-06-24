import { isNativeObject, toArray } from 'util'
import { Color, colorToString } from '../style/Color'
import { Factory } from '../Factory'
import { DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'
import { Asset } from './Asset'
import { wrapNativeObject } from '../wrapNativeObject'
import { isWrappedObject } from '../utils'

export class Swatch extends Asset {
  /**
   * Create a Swatch from a varienty of objects
   * - A native MSSwatch
   * - An MSColor
   * - An MSImmutableColor
   * - An NSColor
   * - A hex color string
   *
   * To include a name with one of the color objects,
   * use a dictionary with `color` and `name`.
   */
  static from(object) {
    if (!object) {
      return undefined
    }
    if (isWrappedObject(object) && object.type === Types.Swatch) {
      return object
    }

    let nativeAsset

    if (isNativeObject(object)) {
      try {
        if (object.isKindOfClass(MSSwatch)) {
          nativeAsset = object
        } else if (
          object.isKindOfClass(MSImmutableColor) ||
          object.isKindOfClass(MSColor)
        ) {
          const c = Color.from(object).toMSColor()
          const name = colorToString(c).slice(0, 7)
          nativeAsset = MSSwatch.alloc().initWithName_color(name, c)
        } else if (object.isKindOfClass(NSColor)) {
          const c = MSColor.colorWithNSColor(object)
          const name = colorToString(c).slice(0, 7)
          nativeAsset = MSSwatch.alloc().initWithName_color(name, c)
        }
      } catch (error) {
        throw new Error(
          `Cannot create a color asset from a ${String(object.class())}`
        )
      }
    } else if (typeof object == 'object') {
      const { color, name } = object
      const c = Color.from(color).toMSColor()
      nativeAsset = MSSwatch.alloc().initWithName_color(name || color, c)
    } else {
      const c = Color.from(object).toMSColor()
      nativeAsset = MSSwatch.alloc().initWithName_color(object, c)
    }

    return Swatch.fromNative(nativeAsset)
  }

  getLibrary() {
    let documentID = this._object.documentData?.()?.objectID()
    let foreignObject = this._object.foreignObject?.()
    let shareableObject = this._object

    if (!documentID) {
      // Immutable swatches don't have a foreignObject nor a documentData, so
      // they require special handling: we iterate all open documents to find
      // one that contains the corresponding foreign swatch, and then use it to
      // identify the source library
      toArray(NSApp.orderedDocuments())
        .filter((doc) => doc.isKindOfClass(MSDocument))
        .some((doc) => {
          const foreignSwatches = doc
            .documentData?.()
            ?.immutableModelObject?.()
            ?.foreignSwatches()
          if (!foreignSwatches) {
            return false
          }
          foreignObject = toArray(foreignSwatches).find((foreignSwatch) => {
            return foreignSwatch.localObject() === this._object
          })
          documentID = doc.documentData?.()?.objectID()
          return !!foreignObject
        })

      if (!foreignObject || !documentID) {
        return undefined
      }

      // The library controller needs a mutable shareable model to fetch its
      // source library info from, so we give it a dummy one
      const dummyShareableSwatch = this._object.newMutableCounterpart()
      dummyShareableSwatch.setParentObject(
        foreignObject.newMutableCounterpart()
      )
      shareableObject = dummyShareableSwatch
    }

    if (!foreignObject || !documentID || !shareableObject) {
      return undefined
    }

    const libraryController = AppController.sharedInstance().librariesController()
    const library = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      shareableObject,
      documentID
    )
    if (library) {
      return wrapNativeObject(library)
    }

    // The source library is disabled or otherwise not available, return a stub
    return {
      type: Types.Library,
      id: String(foreignObject.libraryID()),
      name: String(foreignObject.sourceLibraryName()),
      enabled: false,
      valid: false,
    }
  }

  syncWithLibrary() {
    if (this.isImmutable()) {
      return false
    }
    const documentID = this._object.documentData?.()?.objectID()
    if (!documentID) {
      return false
    }
    const foreignObject = this._object.foreignObject?.()
    if (!foreignObject) {
      return false
    }

    const libraryController = AppController.sharedInstance().librariesController()
    const library = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      this._object,
      documentID
    )
    if (!library) {
      return false
    }

    libraryController.syncForeignObject_withMaster_fromLibrary(
      foreignObject,
      null,
      library
    )
    return true
  }

  static instantiate(swatchID, parentObject) {
    if (!parentObject) {
      return undefined
    }
    const documentData = parentObject._object.documentData?.()
    if (documentData) {
      const swatch = documentData.swatchWithID?.(swatchID)
      if (!swatch) {
        return undefined
      }
      return wrapNativeObject(swatch)
    }

    // If we don't have document data, we might be dealing with a parentObject
    // that's part of an immutable detached symbol hierarchy.
    // This means we have to loop through all documents to find the one
    // containing both the swatch and the parentObject
    let swatch = undefined
    toArray(NSApp.orderedDocuments())
      .filter((doc) => doc.isKindOfClass(MSDocument))
      .some((doc) => {
        swatch = doc
          .documentData?.()
          ?.immutableModelObject?.()
          ?.swatchWithID?.(swatchID)
        return !!swatch
      })

    return swatch ? wrapNativeObject(swatch) : undefined
  }
}

Swatch.type = Types.Swatch
Swatch[DefinedPropertiesKey] = { ...Asset[DefinedPropertiesKey] }
Factory.registerClass(Swatch, MSSwatch)
Factory.registerClass(Swatch, MSImmutableSwatch)

Swatch.define('color', {
  get() {
    return colorToString(this._object.color())
  },
  set(newColor) {
    if (this.isImmutable() || !newColor) {
      return
    }
    this._object.updateWithColor(Color.from(newColor).toMSColor())
  },
})
Swatch.define('referencingColor', {
  enumerable: false,
  exportable: false,
  importable: false,
  get() {
    return this._object.makeReferencingColor()
  },
})
