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

if (typeof MSDataOverride !== 'undefined') {
  Factory.registerClass(DataOverride, MSDataOverride)
}

DataOverride.define('override', {
  get() {
    const wrapped = Override.fromNative(this._object.availableOverride())
    Object.defineProperty(wrapped, '__symbolInstance', {
      writable: false,
      enumerable: false,
      value: this.symbolInstance,
    })
    return wrapped
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
