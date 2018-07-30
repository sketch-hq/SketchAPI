import 'reflect-metadata'
import { Types } from './enums'

type Descriptor = {
  exportable?: boolean
  enumerable?: boolean
  importable?: boolean
  depends?: string
  propertyName?: string
  get: () => any
  set?: (value: any) => void
} & ThisType<WrappedObject<any>>

export const DefinedPropertiesKey = Symbol('DefinedPropertiesKey')

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
export function define(descriptor: Descriptor) {
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

    let existingProperties: { [propertyName: string]: Descriptor } =
      Reflect.getOwnMetadata(DefinedPropertiesKey, target) || {}
    existingProperties[propertyName] = descriptor
    Reflect.defineMetadata(DefinedPropertiesKey, existingProperties, target)

    Object.defineProperty(target, propertyName, descriptor)
  }
}

/**
 * Base class for all objects that
 * wrap Sketch classes.
 */

export class WrappedObject<T> {
  static type: keyof Types;
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

  @define({
    enumerable: false,
    exportable: false,
    get() {
      return true
    },
  })
  readonly _isWrappedObject!: boolean

  constructor(options: { sketchObject: T }) {
    this._object = options.sketchObject

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
          console.warn(`no idea what to do with "${k}" in ${this.type}`)
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
  static fromNative(sketchObject: any) {
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
  isEqual(wrappedObject: WrappedObject<any>): boolean {
    return this.sketchObject == wrappedObject.sketchObject
  }
}
