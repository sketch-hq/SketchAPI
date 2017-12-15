/* globals expect */

import { WrappedObject } from '../WrappedObject'

export const tests = {
  testSketchObject() {
    const object = MSLayer.new()
    const wrapped = WrappedObject.fromNative(object)
    expect(wrapped.sketchObject).toBe(object)
  },

  testID() {
    const object = MSLayer.new()
    const wrapped = WrappedObject.fromNative(object)
    expect(wrapped.id).toBe(String(object.objectID()))
  },
}
