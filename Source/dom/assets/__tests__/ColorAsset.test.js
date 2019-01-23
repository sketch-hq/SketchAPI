/* globals expect, test */
import { ColorAsset } from '../ColorAsset'

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
