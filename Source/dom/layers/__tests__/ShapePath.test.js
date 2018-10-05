/* globals expect, test */
import { ShapePath } from '../..'

test('should create a new shape path', () => {
  const shapePath = new ShapePath()
  // check that a shapePath can be logged
  log(shapePath)
  expect(shapePath.type).toBe('ShapePath')
})
