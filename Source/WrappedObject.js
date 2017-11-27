export const DefinedPropertiesKey = '_DefinedPropertiesKey'

/**
 * Base class for all objects that
 * wrap Sketch classes.
 */
export class WrappedObject {
  constructor(options) {
    this._object = options.sketchObject
    this.type = this.constructor.type
    const propertyList = this.constructor[DefinedPropertiesKey]

    Object.keys(options).forEach(k => {
      if (!propertyList[k]) {
        log(`no idea what to do with "${k}" in ${this.type}`)
        return
      }

      if (!propertyList[k].importable) {
        return
      }
      this[k] = options[k]
    })
  }

  /**
   * Return a new wrapped object for a given Sketch model object.
   *
   * @param {Object} object - The Sketch model object to wrap.
   */
  static fromNative(sketchObject) {
    return new this({
      sketchObject,
    })
  }

  update(json) {
    const propertyList = this.constructor[DefinedPropertiesKey]

    Object.keys(json).forEach(k => {
      if (!propertyList[k]) {
        log(`no idea what to do with "${k}" in ${this.type}`)
        return
      }

      if (!propertyList[k].importable) {
        return
      }
      this[k] = json[k]
    })
  }

  toJSON() {
    const propertyList = this.constructor[DefinedPropertiesKey]

    const json = {}

    Object.keys(propertyList).forEach(k => {
      if (!propertyList[k].exportable) {
        return
      }
      json[k] = this[k]
    })

    return json
  }

  /**
   * Define getter and setter for a property
   * The descriptor needs to at least define `get`
   * There are 2 additional fields in the descriptor that you can set: `importable` and `exportable`
   *
   * a property that is `importable` is a property that can be set when creating the object or updating it
   * a property that is `exportable` is a property that will show when calling `toJSON`
   *
   * @param {string} propertyName - the name of the property
   * @param {Object} descriptor - the descriptor for the property (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
   */
  static define(propertyName, descriptor) {
    this._addDescriptor(propertyName, descriptor)
    Object.defineProperty(this.prototype, propertyName, descriptor)
  }

  /**
   * we want to keep track of the defined properties and their order
   *
   * @param {string} propertyName
   * @param {Object} descriptor
   */
  static _addDescriptor(propertyName, descriptor) {
    /* eslint-disable no-param-reassign */
    descriptor.propertyName = propertyName

    if (descriptor.enumerable == null) {
      descriptor.enumerable = true
    }

    if (descriptor.exportable == null) {
      descriptor.exportable = true
    }

    if (descriptor.importable == null) {
      descriptor.importable = true
    }

    descriptor.importable =
      descriptor.importable && typeof descriptor.set !== 'undefined'
    descriptor.exportable =
      descriptor.exportable && typeof descriptor.get !== 'undefined'

    // properties starting with `_` are considered private
    if (propertyName[0] === '_') {
      return
    }

    this[DefinedPropertiesKey][propertyName] = descriptor
    /* eslint-enable */
  }
}

WrappedObject[DefinedPropertiesKey] = {}

WrappedObject.define('id', {
  exportable: true,
  importable: false,
  /**
   * Returns the object ID of the wrapped Sketch model object.
   *
   * @return {string} The id.
   */
  get() {
    return this._object.objectID()
  },
})

WrappedObject.define('sketchObject', {
  exportable: false,
  enumerable: false,
  importable: false,
  /**
   * Returns the wrapped Sketch object.
   */
  get() {
    return this._object
  },
})

WrappedObject.define('_isWrappedObject', {
  enumerable: false,
  exportable: false,
  get() {
    return true
  },
})
