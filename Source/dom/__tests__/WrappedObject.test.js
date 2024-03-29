/* globals expect, test */

import { fromNative } from '..'

test('should keep the wrapped object in sketchObject', () => {
  const object = MSLayer.new()
  const wrapped = fromNative(object)
  expect(wrapped.sketchObject).toBe(object)
})

test('should expose the ID of the object', () => {
  const object = MSLayer.new()
  const wrapped = fromNative(object)
  expect(wrapped.id).toBe(String(object.objectID()))
})

test('should have _isWrappedObject set to true', () => {
  const object = MSLayer.new()
  const wrapped = fromNative(object)
  expect(wrapped._isWrappedObject).toBe(true)
})
