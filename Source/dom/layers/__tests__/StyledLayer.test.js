/* globals expect, test */
import { Shape } from '../..'

test('should get a style', () => {
  const group = new Shape()
  expect(group.style.type).toBe('Style')
})
