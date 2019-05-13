import { hookedArray } from './utils'

export const DefinedPropertiesKey = '_DefinedPropertiesKey'

/**
 * Base class for all objects that
 * wrap Sketch classes.
 */

export class WrappedObject {
  constructor(options) {
    Object.defineProperty(this, '_object', {
      enumerable: false,
      value: options.sketchObject,
    })

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
        }
        if (
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
          // ignore the properties that starts with _, they are workarounds
          if (k && k[0] !== '_') {
            console.warn(`no idea what to do with "${k}" in ${this.type}`)
          }
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
    if (!sketchObject) {
      return sketchObject
    }
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
      } else if (typeof value !== 'undefined') {
        json[k] = value
      }
    })

    return json
  }

  isImmutable() {
    return /Immutable/.test(String(this.sketchObject.className()))
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
   *
   * When returning an array, we also need to add some additional descriptions to handle mutating the owner when mutating the array.
   * So when returning an array, you need to add the following properties to the descriptor:
   *  {
   *    array: true,
   *    insertItem: (item, index) => void,
   *    removeItem: (index) => removedItem
   *  }
   */
  static define(propertyName, descriptor) {
    this._addDescriptor(propertyName, descriptor)
    // if we return an array, we need to hook into the method that mutates it
    // so that we can modify the owner
    if (descriptor.array && typeof descriptor.set !== 'undefined') {
      if (!descriptor.insertItem || !descriptor.removeItem) {
        throw new Error('missing method to mutate the array')
      }
      const oldGet = descriptor.get
      // eslint-disable-next-line no-param-reassign
      descriptor.get = function get() {
        const arr = oldGet.bind(this)()
        return hookedArray(arr, this, descriptor)
      }
    }
    Object.defineProperty(this.prototype, propertyName, descriptor)
  }

  static defineObject(propertyName, fields, descriptor = {}) {
    const privateKey = `_${propertyName}`
    const privateClassKey = `_${propertyName}Class`
    class NestedProperty {
      constructor(object) {
        const self = this
        Object.defineProperty(self, '_parent', {
          enumerable: false,
          value: object,
        })
        Object.defineProperty(self, '_object', {
          enumerable: false,
          value: object.sketchObject,
        })
        Object.defineProperty(self, '_keys', {
          enumerable: false,
          writable: true,
          value: Object.keys(fields),
        })

        self._keys.forEach(field => {
          Object.defineProperty(self, field, fields[field])
        })
      }

      toJSON() {
        return this._keys.reduce((prev, field) => {
          // eslint-disable-next-line no-param-reassign
          prev[field] = this[field]
          return prev
        }, {})
      }
    }

    this[privateClassKey] = NestedProperty

    const fullDescriptor = {
      ...descriptor,
      get() {
        if (this[privateKey]) {
          return this[privateKey]
        }
        // cache the instance
        const _NestedProperty = this.constructor[privateClassKey]
        Object.defineProperty(this, privateKey, {
          enumerable: false,
          value: new _NestedProperty(this),
        })
        return this[privateKey]
      },
      set(object) {
        const proxy = this[propertyName]
        Object.keys(object).forEach(k => {
          proxy[k] = object[k]
        })
      },
    }

    this._addDescriptor(propertyName, fullDescriptor)
    Object.defineProperty(this.prototype, propertyName, fullDescriptor)
  }

  static extendObject(propertyName, fields) {
    const privateClassKey = `_${propertyName}Class`

    if (!this[privateClassKey]) {
      throw new Error('missing super class')
    }

    class NestedProperty extends this[privateClassKey] {
      constructor(object) {
        super(object)
        const self = this
        const newKeys = Object.keys(fields)
        this._keys = this._keys.concat(newKeys)

        newKeys.forEach(field => {
          Object.defineProperty(self, field, fields[field])
        })
      }
    }

    this[privateClassKey] = NestedProperty
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

  /**
   * returns a property value from the object using a property path
   * example of a property path: style.fills[0].color
   *
   * @param {string} propertyPath
   */
  getProperty(propertyPath) {
    let object = this
    const regex = /(\w+)\[(\d+)\]$/
    propertyPath.split('.').some(property => {
      const result = regex.exec(property)
      if (result) {
        // array property with index
        object = object[result[1]][result[2]]
      } else {
        object = object[property]
      }
      if (object == null) {
        return true
      }
      return undefined
    })
    return object
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
