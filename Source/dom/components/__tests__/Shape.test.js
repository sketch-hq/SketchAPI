/* globals expect, test */
import { Shape } from '../Shape'

test('should create a new shape', () => {
  const shape = new Shape()
  // check that a shape can be logged
  log(shape)
  expect(shape.type).toBe('Shape')
})

// test('should create a new shape with the default style', () => {
//   const shape = new Shape()
//   expect(shape.style.borders).toEqual([])
//   expect(shape.style.fills).toEqual([])
// })
