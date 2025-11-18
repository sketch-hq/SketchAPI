import { toArray } from 'util'
import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { StyleType } from '../style/Style'

/**
 * A Sketch shared style, either Text style or Layer Style.
 */
export class SharedStyle extends WrappedObject {
  /**
   * Make a new symbol master.
   */
  constructor(master = {}) {
    if (!master.sketchObject) {
      throw new Error(
        `Cannot create a SharedStyle directly, use \`document.sharedLayerStyles.push({ name, style })\` (or \`document.sharedTextStyles\`) instead.`
      )
    }
    super(master)
  }

  static fromStyle({ name, style, document } = {}) {
    const documentData = wrapObject(document)._getMSDocumentData()
    const wrappedStyle = wrapObject(style, Types.Style)

    const sharedStyle = SharedStyle.fromNative(
      MSSharedStyle.alloc().initWithName_style(name, wrappedStyle.sketchObject)
    )

    const container = documentData.sharedObjectContainerOfType(
      wrappedStyle.sketchObject.type()
    )

    container.addSharedObject(sharedStyle._object)

    return sharedStyle
  }

  getAllInstances() {
    if (this.isImmutable()) {
      return []
    }
    return toArray(this._object.allInstances()).map(wrapObject)
  }

  getAllInstancesLayers() {
    if (this.isImmutable()) {
      return []
    }
    return toArray(this._object.allLayersInstances()).map(wrapObject)
  }

  getLibrary() {
    let documentID = this._object.documentData?.()?.objectID()
    let foreignObject = this._object.foreignObject?.()
    let shareableObject = this._object

    if (!documentID) {
      // Immutable shared styles don't have a foreignObject nor a documentData,
      // so they require special handling: we iterate all open documents to find
      // one that contains the corresponding foreign shared style, and then use
      // it to identify the source library
      toArray(NSApp.orderedDocuments())
        .filter((doc) => doc.isKindOfClass(MSDocument))
        .some((doc) => {
          const documentData = doc.documentData?.()?.immutableModelObject?.()
          const foreignSharedStyles = documentData?.foreignLayerStyles()
          const foreignTextStyles = documentData?.foreignTextStyles()

          switch (this.style.styleType) {
            case StyleType.Layer:
              if (!foreignSharedStyles) {
                return false
              }
              foreignObject = toArray(foreignSharedStyles).find(
                (foreignStyle) =>
                  foreignStyle.localSharedStyle() === this._object
              )
              break
            case StyleType.Text:
              if (!foreignTextStyles) {
                return false
              }
              foreignObject = toArray(foreignTextStyles).find(
                (foreignStyle) =>
                  foreignStyle.localSharedStyle() === this._object
              )
              break
            default:
              break
          }
          if (foreignObject) {
            documentID = doc.documentData()?.objectID()
          }
          return !!foreignObject
        })

      if (!foreignObject || !documentID) {
        return null
      }

      // The library controller needs a mutable shareable model to fetch its
      // source library info from, so we give it a dummy one
      const dummyShareableStyle = this._object.newMutableCounterpart()
      dummyShareableStyle.setParentObject(foreignObject.newMutableCounterpart())
      shareableObject = dummyShareableStyle
    }

    if (!foreignObject || !documentID || !shareableObject) {
      return undefined
    }

    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      shareableObject,
      documentID
    )
    if (!lib) {
      if (foreignObject) {
        return {
          type: Types.Library,
          id: String(foreignObject.libraryID()),
          name: String(foreignObject.sourceLibraryName()),
          enabled: false,
          valid: false,
        }
      }
      return null
    }
    return wrapObject(lib)
  }

  syncWithLibrary() {
    if (this.isImmutable()) {
      return false
    }

    const libraryController = AppController.sharedInstance().librariesController()
    const doc = NSDocumentController.sharedDocumentController()
      .currentDocument()
      .documentData()

    const lib = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      this._object,
      doc.objectID()
    )
    if (!lib) {
      return false
    }
    const foreignObject = this._object.foreignObject()
    if (!foreignObject) {
      return false
    }
    libraryController.syncForeignObject_withMaster_fromLibrary(
      foreignObject,
      null,
      lib
    )
    return true
  }

  unlinkFromLibrary() {
    if (this.isImmutable()) {
      return false
    }

    const libraryController = AppController.sharedInstance().librariesController()
    const doc = NSDocumentController.sharedDocumentController()
      .currentDocument()
      .documentData()

    const lib = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      this._object,
      doc.objectID()
    )
    if (!lib) {
      return false
    }
    const foreignObject = this._object.foreignObject()
    if (!foreignObject) {
      return false
    }
    foreignObject.unlinkFromRemote()
    return true
  }
}

SharedStyle.type = Types.SharedStyle
SharedStyle[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(SharedStyle, MSSharedStyle)
Factory.registerClass(SharedStyle, MSImmutableSharedStyle)

SharedStyle.StyleType = StyleType
SharedStyle.define('styleType', {
  get() {
    return this.style.styleType
  },
})

SharedStyle.define('name', {
  get() {
    return String(this._object.name())
  },
  set(name) {
    if (this.isImmutable()) {
      return
    }
    this._object.name = name
  },
})

SharedStyle.define('style', {
  get() {
    return wrapObject(this._object.style())
  },
  set(newStyle) {
    if (this.isImmutable()) {
      return
    }
    if (this._object.isForeign()) {
      throw new Error(
        'Can not set the style of a shared style coming from a library',
        this._object
      )
    }
    this._object.updateToMatch(wrapObject(newStyle).sketchObject)
  },
})
