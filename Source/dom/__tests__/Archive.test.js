/* globals expect, test */

import { objectFromArchive } from '../wrapNativeObject'

test('should archive object', () => {
  const object = MSLayer.new()
  const archive = object.jsonArchive()
  expect(typeof archive).toBe('object')
  expect(archive.type).toBe('ShapePath')
})

test('should unarchive', () => {
  const object = MSLayer.new()
  const archive = object.jsonArchive()
  const restored = objectFromArchive(archive)
  expect(restored.id).toBe(String(object.objectID()))
})
