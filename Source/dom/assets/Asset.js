import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'

export class Asset extends WrappedObject {}
Asset[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
delete Asset[DefinedPropertiesKey].id

Asset.define('name', {
  get() {
    const name = this._object.name()
    if (name) {
      return String(name)
    }
    return null
  },
  set(name) {
    this._object.name = name
  },
})
