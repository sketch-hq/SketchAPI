/* globals expect, test */
import { Shape } from '../Shape'

test('should get a style', () => {
  const group = new Shape()
  expect(group.style.type).toBe('Style')
})
