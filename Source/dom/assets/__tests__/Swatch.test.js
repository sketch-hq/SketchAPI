/* globals expect, test */
import { Swatch } from '../Swatch'

test('should create swatch from hex', () => {
  const swatch = Swatch.from('#FFFFFF')
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe(null)
})

test('should create swatch from MSColor', () => {
  const color = MSImmutableColor.colorWithSVGString('#FFFFFF')
  const swatch = Swatch.from(color)
  expect(swatch.color).toBe('#ffffffff')
})

//
// test('should create color asset from MSSwatch', () => {
//   const color = MSImmutableColor.colorWithSVGString(
//     '#FFFFFF'
//   ).newMutableCounterpart()
//   const nativeAsset = MSSwatch.alloc().initWithAsset_name(color, null)
//   const asset = Swatch.from(nativeAsset)
//   expect(asset.color).toBe('#ffffffff')
// })
//
// test('should create color asset with name', () => {
//   const asset = Swatch.from({
//     name: 'White',
//     color: '#ffffff',
//   })
//   expect(asset.color).toBe('#ffffffff')
//   expect(asset.name).toBe('White')
// })
