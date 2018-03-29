import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapNativeObject } from '../wrapNativeObject'
import { getDocumentData } from '../utils'

const ObjectType = {
  Symbol: 0,
  LayerStyle: 1,
  TextStyle: 2,
  Unknown: 3,
}

export class ImportableObject extends WrappedObject {
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

    const documentData = getDocumentData(document)

    const importedSymbol = libraryController
      .importShareableObjectReference_intoDocument(this._object, documentData)
      .localObject()

    return wrapNativeObject(importedSymbol)
  }
}

ImportableObject.type = Types.ImportableObject
ImportableObject[DefinedPropertiesKey] = {
  ...WrappedObject[DefinedPropertiesKey],
}
Factory.registerClass(ImportableObject, MSShareableObjectReference)
Factory.registerClass(ImportableObject, MSSymbolMasterReference)
Factory.registerClass(ImportableObject, MSSharedStyleReference)

ImportableObject.define('id', {
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

ImportableObject.define('objectType', {
  exportable: true,
  importable: false,
  get() {
    const raw = this._object.shareableObjectType()
    return Object.keys(ObjectType).find(key => ObjectType[key] === raw) || raw
  },
})

ImportableObject.define('library', {
  exportable: false,
  enumerable: false,
  get() {
    return wrapNativeObject(this._object.sourceLibrary())
  },
})
