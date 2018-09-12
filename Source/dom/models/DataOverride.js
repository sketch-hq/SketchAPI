import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Override } from './Override'
import { SymbolInstance } from '../layers/SymbolInstance'

/**
 * An MSDataOverride. This is not exposed, only used by sketch.fromNative
 */
export class DataOverride extends WrappedObject {}

DataOverride.type = Types.DataOverride
DataOverride[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(DataOverride, MSDataOverride)

DataOverride.define('override', {
  get() {
    return Override.fromNative(this._object.availableOverride())
  },
})

DataOverride.define('symbolInstance', {
  get() {
    return SymbolInstance.fromNative(this._object.symbolInstance())
  },
})

DataOverride.define('id', {
  exportable: true,
  importable: false,
  get() {
    return String(this._object.overrideIdentifier())
  },
})
