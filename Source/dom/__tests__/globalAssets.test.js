/* globals expect, test */

import { globalColors, globalGradients } from '../globalAssets'

test('should return global colors', () => {
  const colors = globalColors()
  expect(colors.length > 0).toBe(true)
  expect(typeof colors[0].color).toBe('string')
})

test('should return global colors', () => {
  const gradients = globalGradients()
  expect(gradients.length > 0).toBe(true)
  expect(gradients[0].gradient.type).toBe('Gradient')
  expect(gradients[0].name).toBe(null)
})
