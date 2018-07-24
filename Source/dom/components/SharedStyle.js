import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { toArray } from '../utils'

/**
 * A Sketch shared style, either Text style or Layer Style.
 */
export class SharedStyle extends WrappedObject {
  /**
   * Make a new symbol master.
   */
  constructor(master = {}) {
    if (!master.sketchObject) {
      throw new Error(`Cannot create a SharedStyle directly`)
    }
    super(master)
  }

  static fromStyle({ name, style, document } = {}) {
    const documentData = wrapObject(document)._getMSDocumentData()
    const wrappedInstance = wrapObject(style)

    const sharedStyle = SharedStyle.fromNative(
      MSSharedStyle.alloc().initWithName_firstInstance(
        name,
        wrappedInstance.sketchObject
      )
    )

    const container = documentData.sharedObjectContainerOfType(
      wrappedInstance.sketchObject.type()
    )

    container.addSharedObject(sharedStyle._object)
    wrappedInstance.sharedStyleId = sharedStyle.id

    return sharedStyle
  }

  // Returns a new Style instance linked to this SharedStyle, ready for adding to a layer
  createNewInstance() {
    return wrapObject(this._object.newInstance())
  }

  getAllInstances() {
    return toArray(this._object.allInstances()).map(wrapObject)
  }

  getLibrary() {
    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject(this._object)
    if (!lib) {
      return null
    }
    return wrapObject(lib)
  }

  syncWithLibrary() {
    const libraryController = AppController.sharedInstance().librariesController()
    const lib = libraryController.libraryForShareableObject(this._object)
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
    const lib = libraryController.libraryForShareableObject(this._object)
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
        'Can not set the style of a shared style coming from a library'
      )
    }
    this._object.updateToMatch(wrapObject(newStyle).sketchObject)
  },
})
