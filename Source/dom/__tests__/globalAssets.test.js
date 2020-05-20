/* globals expect, test */

import {
  getGlobalColors,
  getGlobalGradients,
  globalAssets,
} from '../globalAssets'

test('should return global colors', () => {
  const colors = getGlobalColors()
  expect(colors.length > 0).toBe(true)
  expect(colors[0].type).toBe('ColorAsset')
  expect(typeof colors[0].color).toBe('string')
})

test('should return global gradients', () => {
  const gradients = getGlobalGradients()
  expect(gradients.length > 0).toBe(true)
  expect(gradients[0].type).toBe('GradientAsset')
})

test('should reset global colors', () => {
  globalAssets.colors = ['#FFFFFF', '#AAAAAA']
  expect(globalAssets.colors[0].color).toEqual('#ffffffff')
  expect(globalAssets.colors[1].color).toEqual('#aaaaaaff')
})

test('should append global colors', () => {
  globalAssets.colors = ['000000']
  globalAssets.colors.push('#FFFFFF')
  expect(globalAssets.colors.length).toEqual(2)
  expect(globalAssets.colors[1].color).toEqual('#ffffffff')
})

test('should remove global color', () => {
  globalAssets.colors = ['#FFFFFF', '#000000']
  expect(globalAssets.colors.length).toEqual(2)
  globalAssets.colors.splice(1, 1)
  expect(globalAssets.colors.length).toEqual(1)
  expect(globalAssets.colors[0].color).toEqual('#ffffffff')
})

test('should reset global gradients', () => {
  globalAssets.gradients = [
    {
      gradient: {},
      name: 'Gradient 1',
    },
    {
      gradient: {},
      name: 'Gradient 2',
    },
  ]
  expect(globalAssets.gradients[0].name).toEqual('Gradient 1')
  expect(globalAssets.gradients[1].name).toEqual('Gradient 2')
})

test('should append global gradients', () => {
  globalAssets.gradients = [{ gradient: {}, name: 'Gradient 1' }]
  globalAssets.gradients.push({ gradient: {}, name: 'Gradient 2' })
  expect(globalAssets.gradients.length).toEqual(2)
  expect(globalAssets.gradients[0].name).toEqual('Gradient 1')
  expect(globalAssets.gradients[1].name).toEqual('Gradient 2')
})

test('should remove global gradients', () => {
  globalAssets.gradients = [
    {
      gradient: {},
      name: 'Gradient 1',
    },
    {
      gradient: {},
      name: 'Gradient 2',
    },
  ]
  expect(globalAssets.gradients.length).toEqual(2)
  globalAssets.gradients.splice(0, 1)
  expect(globalAssets.gradients.length).toEqual(1)
  expect(globalAssets.gradients[0].name).toEqual('Gradient 2')
})
