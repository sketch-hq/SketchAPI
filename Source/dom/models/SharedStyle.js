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
    return toArray(this._object.allInstances()).map(wrapObject)
  }

  getAllInstancesLayers() {
    return toArray(this._object.allLayersInstances()).map(wrapObject)
  }

  getLibrary() {
    const libraryController = AppController.sharedInstance().librariesController()
    const doc = NSDocumentController.sharedDocumentController()
      .currentDocument()
      .documentData()
    const lib = libraryController.libraryForShareableObject_inDocumentWithIdentifier(
      this._object,
      doc.objectID()
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

SharedStyle.StyleType = StyleType
SharedStyle.define('styleType', {
  get() {
    return this.style.type
  },
})

SharedStyle.define('name', {
  get() {
    return String(this._object.name())
  },
  set(name) {
    this._object.name = name
  },
})

SharedStyle.define('style', {
  get() {
    return wrapObject(this._object.style())
  },
  set(newStyle) {
    if (this._object.isForeign()) {
      throw new Error(
        'Can not set the style of a shared style coming from a library',
        this._object
      )
    }
    this._object.updateToMatch(wrapObject(newStyle).sketchObject)
  },
})
