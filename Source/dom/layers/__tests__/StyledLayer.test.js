/* globals expect, test */
import { Shape } from '../..'

test('should get a style', () => {
  const group = new Shape()
  expect(group.style.type).toBe('Style')
})

test('should create a Layer with a style property', () => {
  const group = new Shape({
    style: {
      fills: [],
    },
  })
  expect(group.style.type).toBe('Style')
})
