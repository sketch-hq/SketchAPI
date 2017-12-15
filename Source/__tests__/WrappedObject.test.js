/* globals expect */

import { WrappedObject } from '../WrappedObject'

export const tests = {
  'should keep the wrapped object in sketchObject': () => {
    const object = MSLayer.new()
    const wrapped = WrappedObject.fromNative(object)
    expect(wrapped.sketchObject).toBe(object)
  },

  'should expose the ID of the object': () => {
    const object = MSLayer.new()
    const wrapped = WrappedObject.fromNative(object)
    expect(wrapped.id).toBe(String(object.objectID()))
  },

  'should have _isWrappedObject set to true': () => {
    const object = MSLayer.new()
    const wrapped = WrappedObject.fromNative(object)
    expect(wrapped._isWrappedObject).toBe(true)
  },
}
