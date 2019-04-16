import 'reflect-metadata'
import { hookedArray } from './utils'
import { Types } from './enums'

export const DefinedPropertiesKey = '_DefinedPropertiesKey'

type Descriptor<T extends WrappedObject<any>, U> = {
  exportable?: boolean
  enumerable?: boolean
  importable?: boolean
  depends?: string
  propertyName?: string
  get: (this: T) => U
  set?: (this: T, value: U) => void
} & ThisType<T>

type ArrayDescriptor<T extends WrappedObject<any>, U> = {
  exportable?: boolean
  enumerable?: boolean
  importable?: boolean
  depends?: string
  propertyName?: string
  get: (this: T) => U[]
  set: (this: T, value: U[]) => void
  insertItem: (this: T, item: U, index: number) => U | null
  removeItem: (this: T, index: number) => U | null
} & ThisType<T>

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
export function define<T extends WrappedObject<any>, U>(
  descriptor: Descriptor<T, U>
) {
  return function(target: any, propertyName: string) {
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
      descriptor.exportable &&
      typeof descriptor.get !== 'undefined' &&
      propertyName[0] !== '_'

    let existingProperties: { [propertyName: string]: Descriptor<T, any> } =
      Reflect.getOwnMetadata(DefinedPropertiesKey, target) || {}
    existingProperties[propertyName] = descriptor
    Reflect.defineMetadata(DefinedPropertiesKey, existingProperties, target)

    Object.defineProperty(target, propertyName, descriptor)
  }
}

export function defineArray<T extends WrappedObject<any>, U>(
  descriptor: ArrayDescriptor<T, U>
) {
  return function(target: any, propertyName: string) {
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
      descriptor.exportable &&
      typeof descriptor.get !== 'undefined' &&
      propertyName[0] !== '_'

    const oldGet = descriptor.get
    // eslint-disable-next-line no-param-reassign
    descriptor.get = function get() {
      const arr = oldGet.bind(this)()
      return hookedArray<U>(arr, this, descriptor)
    }

    let existingProperties: { [propertyName: string]: Descriptor<T, any> } =
      Reflect.getOwnMetadata(DefinedPropertiesKey, target) || {}
    existingProperties[propertyName] = descriptor
    Reflect.defineMetadata(DefinedPropertiesKey, existingProperties, target)

    Object.defineProperty(target, propertyName, descriptor)
  }
}

export function defineObject<
  T extends WrappedObject<any>,
  U extends { [key: string]: any }
>(
  fields: {
    [key: string]: Descriptor<T, any>
  },
  descriptor: {
    exportable?: boolean
    enumerable?: boolean
    importable?: boolean
    depends?: string
  } = {}
) {
  return function(target: any, propertyName: string) {
    const privateKey = `_${propertyName}`
    const privateClassKey = `_${propertyName}Class`
    class NestedProperty {
      _keys: string[] = []

      constructor(object: T) {
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
          // @ts-ignore
          prev[field] = this[field]
          return prev
        }, {})
      }
    }

    // @ts-ignore
    this[privateClassKey] = NestedProperty

    const fullDescriptor = {
      ...descriptor,
      get(): U {
        // @ts-ignore
        if (this[privateKey]) {
          // @ts-ignore
          return this[privateKey]
        }
        // cache the instance
        // @ts-ignore
        const _NestedProperty = this.constructor[privateClassKey]
        Object.defineProperty(this, privateKey, {
          enumerable: false,
          value: new _NestedProperty(this),
        })
        // @ts-ignore
        return this[privateKey]
      },
      set(object: U) {
        // @ts-ignore
        const proxy = this[propertyName]
        Object.keys(object).forEach(k => {
          proxy[k] = object[k]
        })
      },
      propertyName: propertyName,
      enumerable: descriptor.enumerable == null ? true : descriptor.enumerable,
      exportable: descriptor.exportable == null ? true : descriptor.exportable,
      importable: descriptor.importable == null ? true : descriptor.importable,
    }

    fullDescriptor.importable =
      fullDescriptor.importable && typeof fullDescriptor.set !== 'undefined'
    fullDescriptor.exportable =
      fullDescriptor.exportable &&
      typeof fullDescriptor.get !== 'undefined' &&
      propertyName[0] !== '_'

    let existingProperties: { [propertyName: string]: Descriptor<T, any> } =
      Reflect.getOwnMetadata(DefinedPropertiesKey, target) || {}
    existingProperties[propertyName] = fullDescriptor
    Reflect.defineMetadata(DefinedPropertiesKey, existingProperties, target)

    Object.defineProperty(target, propertyName, fullDescriptor)
  }
}

/**
 * Base class for all objects that
 * wrap Sketch classes.
 */

export class WrappedObject<T extends { className: () => NSString }> {
  static type: Types
  static [DefinedPropertiesKey]: {}

  private readonly _object: T

  @define({
    exportable: false,
    enumerable: false,
    importable: false,

    get() {
      return this._object
    },
  })
  readonly sketchObject!: T

  @define({
    exportable: true,
    importable: false,
    get() {
      return String(this._object.objectID())
    },
  })
  readonly id!: string

  constructor(options: { sketchObject?: T }) {
    if (!options.sketchObject) {
      throw new Error('missing sketch object')
    }
    this._object = options.sketchObject

    Object.defineProperty(this, '_isWrappedObject', {
      enumerable: false,
      value: true,
    })

    this.update(options)
  }

  get type(): keyof Types {
    // @ts-ignore
    return this.constructor.type
  }

  update(options: { [key: string]: any } = {}) {
    const propertyList = Reflect.getOwnMetadata(
      DefinedPropertiesKey,
      this.constructor
    )

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
        // @ts-ignore
        this[k] = options[k]
      })
  }

  /**
   * Return a new wrapped object for a given Sketch model object.
   *
   * @param {Object} object - The Sketch model object to wrap.
   */
  static fromNative<
    U extends { className: () => NSString },
    T extends WrappedObject<U>
  >(
    this: { new (options: { sketchObject: U }): T },
    sketchObject?: U
  ): T | null {
    if (!sketchObject) {
      return null
    }
    return new this({
      sketchObject,
    })
  }

  toJSON() {
    const propertyList = Reflect.getOwnMetadata(
      DefinedPropertiesKey,
      this.constructor
    )

    const json: { [key: string]: any } = {}

    Object.keys(propertyList).forEach(k => {
      if (!propertyList[k].exportable) {
        return
      }
      // @ts-ignore
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
  isEqual(wrappedObject: WrappedObject<any>): boolean {
    return this.sketchObject == wrappedObject.sketchObject
  }
}
