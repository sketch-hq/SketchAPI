import { toArray, toJSObject } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { Artboard } from './Artboard'
import { Group } from './Group'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { Override } from '../models/Override'
import { Document } from '../models/Document'

/**
 * A Sketch symbol master.
 */
export class SymbolMaster extends Group {
  /**
   * Make a new symbol master.
   */
  constructor(master = {}) {
    if (!master.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      master.sketchObject = Factory.createNative(SymbolMaster)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }
    super(master)
  }

  /**
   * Replaces `frame` with a new symbol master made from it.
   *
   * @param {Group} frame The frame to convert. Sections can't become components — they are
   *                      top-level containers — so passing one throws. A variant set carries the
   *                      section trait too, and is rejected the same way.
   * @return {SymbolMaster}
   */
  static fromFrame(frame) {
    const wrappedFrame = wrapObject(frame)

    if (wrappedFrame.isSection) {
      throw new Error("Can't create a Component from a Section")
    }

    return SymbolMaster.fromNative(
      MSSymbolMaster.convertFrameToSymbol(wrappedFrame.sketchObject)
    )
  }

  static fromArtboard(artboard) {
    console.warn(
      'SymbolMaster.fromArtboard() is deprecated, use SymbolMaster.fromFrame() instead.'
    )
    return SymbolMaster.fromFrame(artboard)
  }

  // Replace the symbol with an artboard and detach all its instances converting them into groups.
  toArtboard() {
    const artboard = MSSymbolMaster.convertSymbolToFrame(this._object)

    return Artboard.fromNative(artboard)
  }

  getParentArtboard() {
    return undefined
  }

  // Returns a new SymbolInstance linked to this Frame, ready for inserting in the document
  createNewInstance() {
    return wrapObject(this._object.newSymbolInstance())
  }

  // Returns all instances of the Frame in the document, on all pages
  getAllInstances() {
    return toArray(this._object.allInstances()).map(wrapObject)
  }

  getLibrary() {
    const libraryController = AppController.sharedInstance().librariesController()
    const doc = Document.getSelectedDocument()
    const lib = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      this._object,
      doc.id
    )
    if (!lib) {
      const foreignObject = this._object.foreignObject()
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
    const doc = Document.getSelectedDocument()
    const lib = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      this._object,
      doc.id
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
    const doc = Document.getSelectedDocument()
    const lib = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      this._object,
      doc.id
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

  // eslint-disable-next-line class-methods-use-this
  getParentSymbolMaster() {
    return undefined
  }
}

SymbolMaster.type = Types.SymbolMaster
SymbolMaster[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerClass(SymbolMaster, MSSymbolMaster)
Factory.registerClass(SymbolMaster, MSImmutableSymbolMaster)

SymbolMaster.define('symbolId', {
  get() {
    return String(this._object.symbolID())
  },
  set() {
    throw new Error('Changing the symbol ID of a SymbolMaster is forbidden.')
  },
})

SymbolMaster.define('overrides', {
  get() {
    if (this.isImmutable()) {
      return
    }
    return toArray(this._object.sketchapiOverrides()).map((o) =>
      Override.fromNative(o)
    )
  },
  set(overrides) {
    if (this.isImmutable()) {
      return
    }

    const batch = Object.fromEntries(overrides.map((o) => [o.id, o.editable]))
    this._object.batchSetIsEditableForOverrides(batch)
  },
})

SymbolMaster.define('variantConfiguration', {
  get() {
    if (!this.getParentVariantSet()) {
      return undefined
    }
    const nativeConfiguration = this._object.variantConfiguration()
    const jsConfiguration = toJSObject(nativeConfiguration)
    return Object.fromEntries(
      Object.entries(jsConfiguration).map(([propName, valueName]) => [
        String(propName),
        String(valueName),
      ])
    )
  },
  set(variantConfiguration) {
    if (this.isImmutable()) {
      return
    }
    const component = this.getParentVariantSet()
    if (!component) {
      return
    }

    if (typeof variantConfiguration !== 'object') {
      throw Error(
        'Expected `SymbolMaster.variantConfiguration` to be an object'
      )
    }
    for (const [propertyName, valueName] of Object.entries(
      variantConfiguration
    )) {
      const property = component.variantProperties.find(
        (p) => p.name === propertyName
      )
      if (!property) {
        throw Error(
          `Unknown variant property <${propertyName}>. Available properties: ${component.variantProperties.map(
            (p) => p.name
          )}`
        )
      }

      if (!property.values.includes(valueName)) {
        throw Error(
          `Unknown value <${valueName}> for the variant property <${propertyName}>. Available values: ${property.values}`
        )
      }
    }

    this._object.setVariantConfiguration(variantConfiguration)
  },
})

SymbolMaster.extendObject('background', {
  includedInInstance: {
    get() {
      return Boolean(Number(this._object.includeBackgroundColorInInstance()))
    },
    set(included) {
      if (this._parent.isImmutable()) {
        return
      }
      this._object.setIncludeBackgroundColorInInstance(included)
    },
  },
})
