import { assertEqual } from './assert'

import { WrappedObject } from '../WrappedObject'

export const WrappedObjectTests = {
  tests: {
    testSketchObject() {
      const object = MSLayer.new()
      const wrapped = WrappedObject.fromNative(object)
      assertEqual(wrapped.sketchObject, object)
    },

    testID() {
      const object = MSLayer.new()
      const wrapped = WrappedObject.fromNative(object)
      assertEqual(wrapped.id, object.objectID())
    },
  },
}
