/* globals expect, test */

import { exportObject, objectFromJSON } from '../export'
import { Shape } from '../layers/Shape'

test('should archive object', () => {
  const object = new Shape()
  const archive = exportObject(object, { formats: ['json'] })
  expect(typeof archive).toBe('object')
  expect(archive.type).toBe('ShapePath')
})

test('should maintain object id through archive', () => {
  const object = new Shape()
  const archive = exportObject(object, {
    formats: ['json'],
    output: false,
  })
  const restored = objectFromJSON(archive)
  expect(restored.id).toEqual(String(object.id))
  expect(restored == object).toBe(true)
})
