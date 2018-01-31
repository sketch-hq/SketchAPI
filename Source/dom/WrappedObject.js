export const DefinedPropertiesKey = '_DefinedPropertiesKey'

/**
 * Base class for all objects that
 * wrap Sketch classes.
 */
export class WrappedObject {
  constructor(options) {
    this._object = options.sketchObject

    Object.defineProperty(this, 'type', {
      enumerable: true,
      value: this.constructor.type,
    })

    this.update(options)
  }

  update(options = {}) {
    const propertyList = this.constructor[DefinedPropertiesKey]

    Object.keys(options)
      .sort((a, b) => {
        if (
          propertyList[a] &&
          propertyList[a].depends &&
          propertyList[a].depends === b
        ) {
          return 1
        } else if (
          propertyList[b] &&
          propertyList[b].depends &&
          propertyList[b].depends === a
        ) {
          return -1
        }
        return 0
      })
      .forEach(k => {
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

  toJSON() {
    const propertyList = this.constructor[DefinedPropertiesKey]

    const json = {}

    Object.keys(propertyList).forEach(k => {
      if (!propertyList[k].exportable) {
        return
      }
      const value = this[k]
      if (value && Array.isArray(value)) {
        json[k] = value.map(x => {
          if (x && typeof x.toJSON === 'function') {
            return x.toJSON()
          }
          return x
        })
      } else if (value && typeof value.toJSON === 'function') {
        json[k] = value.toJSON()
      } else {
        json[k] = value
      }
    })

    return json
  }

  /**
   * Because the API objects are thin wrappers, they are created on demand and are
   * thrown away regularly.
   *
   * No attempt is made to have a one-to-one correspondence between wrapper and model
   * object - many wrapper instances may exist which point to the same model object.
   *
   * This is not the most efficient solution in some respects, but it's pragmatic and
   * works well for simple cases.

   * Because multiple wrappers might exist for a given model object, if you're
   * testing two for equality, you should test the things that they wrap, rather than
   * the wrapper objects themselves
   * @param {WrappedObject} wrappedObject
   * @return {Boolean} whether the objects are equal or not
   */
  isEqual(wrappedObject) {
    return this.sketchObject == wrappedObject.sketchObject
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

WrappedObject.define('type', {
  exportable: true,
  importable: false,
  get() {
    return this.type
  },
})

WrappedObject.define('id', {
  exportable: true,
  importable: false,
  /**
   * Returns the object ID of the wrapped Sketch model object.
   *
   * @return {string} The id.
   */
  get() {
    return String(this._object.objectID())
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
