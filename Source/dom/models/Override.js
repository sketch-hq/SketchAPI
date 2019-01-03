import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { ImageData } from './ImageData'
import { wrapNativeObject } from '../wrapNativeObject'

/**
 * An MSAvailableOverride. This is not exposed, only used by SymbolInstance
 */
export class Override extends WrappedObject {}

Override.type = Types.Override
Override[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Override, MSAvailableOverride)

Override.define('path', {
  get() {
    return String(this._object.overridePoint().path())
  },
})

Override.define('property', {
  get() {
    return String(this._object.overridePoint().property())
  },
})

Override.define('affectedLayer', {
  get() {
    return wrapNativeObject(this._object.affectedLayer())
  },
})

Override.define('id', {
  exportable: true,
  importable: false,
  get() {
    return String(this._object.overridePoint().name())
  },
})

Override.define('symbolOverride', {
  get() {
    return Boolean(this._object.overridePoint().isSymbolOverride())
  },
})

Override.define('value', {
  get() {
    const value = this._object.currentValue()
    if (this.property === 'image') {
      return ImageData.fromNative(value)
    }
    return String(this._object.currentValue())
  },
  set(value) {
    // __symbolInstance is set when building the Override
    this.__symbolInstance.setOverrideValue(this, value)
  },
})

Override.define('isDefault', {
  get() {
    return !this._object.hasOverride()
  },
})

Override.define('editable', {
  get() {
    return Boolean(Number(this._object.isEditable()))
  },
})
