import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapNativeObject } from '../wrapNativeObject'

const ObjectType = {
  Symbol: 0,
  LayerStyle: 1,
  TextStyle: 2,
  Unknown: 3,
}

export class ShareableObject extends WrappedObject {
  /**
   * Make a new symbol instance.
   */
  constructor(master = {}) {
    if (!master.sketchObject) {
      throw new Error(`Cannot create a ShareableObject directly`)
    }
    super(master)
  }

  importInDocument(document) {
    const libraryController = AppController.sharedInstance().librariesController()

    let documentData = document

    if (
      document &&
      document.sketchObject &&
      document.sketchObject.documentData
    ) {
      documentData = document.sketchObject.documentData()
    } else if (document && document.documentData) {
      documentData = document.documentData()
    }

    const importedSymbol = libraryController
      .importShareableObjectReference_intoDocument(this._object, documentData)
      .localObject()

    return wrapNativeObject(importedSymbol)
  }
}

ShareableObject.type = Types.ShareableObject
ShareableObject[DefinedPropertiesKey] = {
  ...WrappedObject[DefinedPropertiesKey],
}
Factory.registerClass(ShareableObject, MSShareableObjectReference)
Factory.registerClass(ShareableObject, MSSymbolMasterReference)
Factory.registerClass(ShareableObject, MSSharedStyleReference)

ShareableObject.define('id', {
  exportable: true,
  importable: false,
  get() {
    const id = this._object.sharedObjectID()
    if (!id) {
      return undefined
    }
    return String(id)
  },
})

ShareableObject.define('objectType', {
  exportable: true,
  importable: false,
  get() {
    const raw = this._object.shareableObjectType()
    return Object.keys(ObjectType).find(key => ObjectType[key] === raw) || raw
  },
})

ShareableObject.define('library', {
  exportable: false,
  enumerable: false,
  get() {
    return wrapNativeObject(this._object.sourceLibrary())
  },
})
