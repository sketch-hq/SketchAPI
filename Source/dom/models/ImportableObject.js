import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapNativeObject } from '../wrapNativeObject'

const ObjectTypeMap = {
  Symbol: 0,
  LayerStyle: 1,
  TextStyle: 2,
  Unknown: 3,
}

export const ImportableObjectType = {
  Symbol: 'Symbol',
  LayerStyle: 'LayerStyle',
  TextStyle: 'TextStyle',
  Unknown: 'Unknown',
}

export class ImportableObject extends WrappedObject {
  /**
   * Make a new symbol instance.
   */
  constructor(master = {}) {
    if (!master.sketchObject) {
      throw new Error(`Cannot create a ImportableObject directly`)
    }
    super(master)

    Object.defineProperty(this, '_documentData', {
      enumerable: false,
      writable: true,
    })
  }

  import() {
    if (!this._documentData) {
      throw new Error('missing document data')
    }

    let importedObject =
      this._object.shareableObject && this._object.shareableObject()

    if (importedObject && !this._object.sourceLibrary()) {
      switch (this.objectType) {
        case ImportableObjectType.Symbol: {
          const symbol = this._documentData.symbolWithID(
            this._object.sharedObjectID()
          )
          if (symbol) {
            return wrapNativeObject(symbol)
          }
          return undefined
        }
        case ImportableObjectType.LayerStyle: {
          const sharedStyle = this._documentData.layerStyleWithID(
            this._object.sharedObjectID()
          )
          if (sharedStyle) {
            return wrapNativeObject(sharedStyle)
          }
          return undefined
        }
        case ImportableObjectType.TextStyle: {
          const sharedStyle = this._documentData.textStyleWithID(
            this._object.sharedObjectID()
          )
          if (sharedStyle) {
            return wrapNativeObject(sharedStyle)
          }
          return undefined
        }
        default:
          throw new Error(
            'Cannot import an already imported object other than a Symbol or a Shared Style'
          )
      }
    }

    const libraryController = AppController.sharedInstance().librariesController()

    importedObject = libraryController.importShareableObjectReference_intoDocument(
      this._object,
      this._documentData
    )

    if (!importedObject) {
      throw new Error('Could not import the Object')
    }

    return wrapNativeObject(importedObject.localObject())
  }
}

ImportableObject.type = Types.ImportableObject
ImportableObject[DefinedPropertiesKey] = {
  ...WrappedObject[DefinedPropertiesKey],
}
// need to check if we have MSShareableObjectReference because it won't be available on jenkins
if (typeof MSShareableObjectReference !== 'undefined') {
  Factory.registerClass(ImportableObject, MSShareableObjectReference)
  Factory.registerClass(ImportableObject, MSSymbolMasterReference)
  Factory.registerClass(ImportableObject, MSSharedStyleReference)
  Factory.registerClass(ImportableObject, MSSharedLayerReference)
  Factory.registerClass(ImportableObject, MSSharedTextReference)
}

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

ImportableObject.define('name', {
  exportable: true,
  importable: false,
  get() {
    return String(this._object.name())
  },
})

ImportableObject.define('objectType', {
  exportable: true,
  importable: false,
  get() {
    const raw = this._object.shareableObjectType()
    return (
      Object.keys(ObjectTypeMap).find((key) => ObjectTypeMap[key] === raw) ||
      raw
    )
  },
})

ImportableObject.define('library', {
  exportable: false,
  enumerable: false,
  get() {
    return wrapNativeObject(this._object.sourceLibrary())
  },
})
