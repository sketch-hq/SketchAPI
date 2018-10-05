/* globals expect, test */
import { Shape } from '../..'

test('should create a new shape', () => {
  const shape = new Shape()
  // check that a shape can be logged
  log(shape)
  expect(shape.type).toBe('Shape')
})
