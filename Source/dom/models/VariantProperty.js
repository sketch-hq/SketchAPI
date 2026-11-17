import { toArray } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'

/**
 * A named variant property (e.g. `Size`), owning an ordered list of values (e.g. `XS`, `S`, `M`).
 */
export class VariantProperty extends WrappedObject {
  constructor(property = {}) {
    if (!property.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      property.sketchObject = MSVariantProperty.alloc().init()
    }
    super(property)
  }

  renameValue(oldName, newName) {
    const nativeValue = this._object.valueNamed(String(oldName))
    if (!nativeValue) {
      return
    }
    if (typeof newName !== 'string') {
      throw new Error(
        'VariantProperty.renameValue(): the new name must be a String'
      )
    }
    nativeValue.setName(String(newName))
  }
}

VariantProperty.type = Types.VariantProperty
VariantProperty[DefinedPropertiesKey] = {
  ...WrappedObject[DefinedPropertiesKey],
}
Factory.registerClass(VariantProperty, MSVariantProperty)
Factory.registerClass(VariantProperty, MSImmutableVariantProperty)

VariantProperty.define('name', {
  get() {
    return String(this._object.name())
  },
  set(name) {
    if (this.isImmutable()) {
      return
    }
    if (typeof name !== 'string') {
      throw new Error('VariantProperty.name must be a String')
    }
    this._object.setName(name)
  },
})

VariantProperty.define('values', {
  array: true,
  get() {
    return toArray(this._object.values()).map((nativeValue) => {
      return String(nativeValue.name())
    })
  },
  set(values) {
    if (this.isImmutable()) {
      return
    }

    const currentValues = this.values
    const proposedValues = values

    // 1) Remove all values that are no longer present
    const toRemove = currentValues.filter((value) => {
      return !proposedValues.includes(String(value))
    })
    toRemove.forEach((value) => this._object.removeValueNamed(String(value)))
    // 2) Add new values via MSVariantProperty.addValue(named:) which is going to
    // de-dup and skip existing values automatically
    proposedValues.forEach((value) => this._object.addValueNamed(String(value)))
  },
  insertItem(name, index) {
    if (this.isImmutable()) {
      return undefined
    }
    if (typeof name !== 'string') {
      throw new Error(
        'Unable to insert a non-String item into VariantProperty.values'
      )
    }
    this._object.insertValueNamed_atIndex(name, index)
    return String(name)
  },
  removeItem(index) {
    if (this.isImmutable()) {
      return undefined
    }
    this._object.removeVariantPropertyValueAtIndex(index)
  },
})
