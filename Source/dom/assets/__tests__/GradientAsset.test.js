/* globals expect, test */
import { GradientAsset } from '../GradientAsset'
import { Gradient } from '../../style/Gradient'

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
