import { WrappedObject } from './WrappedObject'

import { isNativeObject, isWrappedObject } from './utils'
import { Factory } from './Factory'

/**
 * Return a wrapped version of a Sketch object.
 * We don't know about *all* Sketch object types, but
 * for some we will return a special subclass.
 * The fallback position is just to return an instance of WrappedObject.
 *
 * @param {object} sketchObject The underlying sketch object that we're wrapping.
 * @return {WrappedObject} A javascript object (subclass of WrappedObject), which represents the Sketch object we were given.
 */
export function wrapNativeObject(nativeObject) {
  if (!nativeObject) {
    return undefined
  }

  let JsClass = Factory._nativeToBox[String(nativeObject.class())]
  if (!JsClass) {
    console.warn(`no mapped wrapper for ${String(nativeObject.class())}`)
    JsClass = WrappedObject
  }

  return JsClass.fromNative(nativeObject)
}

export function wrapObject(object) {
  if (!object) {
    return undefined
  }

  if (isNativeObject(object)) {
    return wrapNativeObject(object)
  }
  if (isWrappedObject(object)) {
    return object
  }

  const { type, ...rest } = object

  if (!type) {
    throw new Error(
      `You need to specify a "type" when creating a nested layer. Received: ${JSON.stringify(
        object,
        null,
        2
      )}`
    )
  }

  return Factory.create(type, rest)
}
