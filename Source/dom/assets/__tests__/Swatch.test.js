/* globals expect, test */
import { Swatch } from '../Swatch'

test('should create swatch from hex string', () => {
  const swatch = Swatch.from('#FFFFFF')
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#FFFFFF')
})

test('should create swatch from object', () => {
  const swatch = Swatch.from({
    color: '#ffffff'
  })
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create swatch from object with name', () => {
  const swatch = Swatch.from({
    name: 'White',
    color: '#ffffff',
  })
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('White')
})

test('should create swatch from MSImmutableColor', () => {
  const color = MSImmutableColor.colorWithSVGString('#FFFFFF')
  const swatch = Swatch.from(color)
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create swatch from MSColor', () => {
  const color = MSImmutableColor.colorWithSVGString('#FFFFFF').newMutableCounterpart()
  const swatch = Swatch.from(color)
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create swatch from NSColor', () => {
  const white = NSColor.whiteColor()
  const swatch = Swatch.from(white)
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create swatch from MSSwatch', () => {
  const color = MSImmutableColor.colorWithSVGString(
    '#FFFFFF'
  ).newMutableCounterpart()
  const nativeSwatch = MSSwatch.alloc().initWithName_color('#ffffff', color)
  const swatch = Swatch.from(nativeSwatch)
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create referencing color', () => {
  const swatch = Swatch.from({
    name: 'Safety Orange',
    color: '#ff6600'
  })
  expect(swatch.referencingColor.isKindOfClass(MSColor)).toBeTruthy()
})