/* globals expect, test */
import { ColorAsset, GradientAsset } from '../Asset'
import { Gradient } from '../../style/Gradient'

test('should create color asset from hex', () => {
  const asset = ColorAsset.from('#FFFFFF')
  expect(asset.color).toBe('#ffffffff')
  expect(asset.name).toBe(null)
})

test('should create color asset from MSColor', () => {
  const color = MSImmutableColor.colorWithSVGString('#FFFFFF')
  const asset = ColorAsset.from(color)
  expect(asset.color).toBe('#ffffffff')
})

test('should create color asset from MSColorAsset', () => {
  const color = MSImmutableColor.colorWithSVGString(
    '#FFFFFF'
  ).newMutableCounterpart()
  const nativeAsset = MSColorAsset.alloc().initWithAsset_name(color, null)
  const asset = ColorAsset.from(nativeAsset)
  expect(asset.color).toBe('#ffffffff')
})

test('should create color asset with name', () => {
  const asset = ColorAsset.from({
    name: 'White',
    color: '#ffffff',
  })
  expect(asset.color).toBe('#ffffffff')
  expect(asset.name).toBe('White')
})

// Gradients

test('should create gradient asset from dictionary', () => {
  const asset = GradientAsset.from({})
  expect(asset.gradient.type).toBe('Gradient')
  expect(asset.name).toBe(null)
})

test('should create gradient asset from MSGradientAsset', () => {
  const gradient = Gradient.from({})._object
  const nativeAsset = MSGradientAsset.alloc().initWithAsset_name(gradient, null)
  const asset = GradientAsset.from(nativeAsset)
  expect(asset.gradient.type).toBe('Gradient')
})

test('should create gradient asset with name', () => {
  const asset = GradientAsset.from({
    name: 'My Gradient',
    gradient: {},
  })
  expect(asset.gradient.type).toBe('Gradient')
  expect(asset.name).toBe('My Gradient')
})
