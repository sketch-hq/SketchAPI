import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
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
    const pathRepresentation = String(this._object.overridePathRepresentation())
    return this.symbolInstance.overrides.find(
      (o) => o.id === pathRepresentation
    )
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
    return String(this._object.overridePathRepresentation())
  },
})
