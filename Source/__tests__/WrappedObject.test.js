import * as assert from 'proclaim'

import { WrappedObject } from '../WrappedObject'

export const WrappedObjectTests = {
  tests: {
    testSketchObject() {
      const object = MSLayer.new()
      const wrapped = WrappedObject.fromNative(object)
      assert.strictEqual(wrapped.sketchObject, object)
    },

    testID() {
      const object = MSLayer.new()
      const wrapped = WrappedObject.fromNative(object)
      assert.strictEqual(wrapped.id, String(object.objectID()))
    },
  },
}
