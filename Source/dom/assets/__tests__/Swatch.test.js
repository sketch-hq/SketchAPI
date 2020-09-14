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

test('should create swatch from MSSwatch', () => {
  const color = MSImmutableColor.colorWithSVGString(
    '#FFFFFF'
  ).newMutableCounterpart()
  const nativeSwatch = MSSwatch.alloc().initWithName_color(null, color)
  const swatch = Swatch.from(nativeSwatch)
  expect(swatch.color).toBe('#ffffffff')
})

test('should create swatch with name', () => {
  const swatch = Swatch.from({
    name: 'White',
    color: '#ffffff',
  })
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('White')
})
