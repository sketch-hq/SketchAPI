import { isNativeObject, isObject } from 'util'
import { WrappedObject } from './WrappedObject'
import { isWrappedObject } from './utils'
import { Factory } from './Factory'
import { Types } from './enums'

/**
 * Return a wrapped version of a Sketch object.
 * We don't know about *all* Sketch object types, but
 * for some we will return a special subclass.
 * The fallback position is just to return an instance of WrappedObject.
 *
 * @param {object} sketchObject The underlying sketch object that we're wrapping.
 * @return {WrappedObject} A javascript object (subclass of WrappedObject), which represents the Sketch object we were given.
 */
export function wrapNativeObject<T = WrappedObject<any>>(
  nativeObject: NSObject
): T | undefined {
  if (!nativeObject) {
    return undefined
  }

  const className = String(nativeObject.className())

  let JsClass = Factory._nativeToBox[className]
  if (!JsClass) {
    console.warn(`no mapped wrapper for ${className}`)
    JsClass = WrappedObject
  }

  return JsClass.fromNative(nativeObject)
}

export function wrapObject<T = WrappedObject<any>>(
  object: NSObject | WrappedObject<any> | undefined | { type: Types },
  defaultType?: Types
): T | undefined {
  if (!object) {
    return undefined
  }

  if (isNativeObject(object) && !isObject(object)) {
    return wrapNativeObject(object)
  }
  if (isWrappedObject(object)) {
    return (object as unknown) as T
  }

  const { type, ...rest } = object

  if (!type && !defaultType) {
    throw new Error(
      `You need to specify a "type" when creating a nested layer. Received: ${JSON.stringify(
        object,
        null,
        2
      )}`
    )
  }

  return Factory.create(type || defaultType, rest)
}
