/* globals expect, test */
import { Text, Rectangle } from '../..'
import {
  TextAlignmentMap,
  VerticalTextAlignmentMap,
  TextLineSpacingBehaviourMap,
} from '../Text'

test('should create a Text layer', () => {
  const text = new Text()
  // check that a text can be logged
  log(text)
  expect(text.type).toBe('Text')
})

test('should be able to change the text value', () => {
  const text = new Text({ text: 'blah' })
  expect(text.text).toBe('blah')
  text.text = 'doodah'
  expect(text.text).toBe('doodah')
})

test('should adjust its size to the string with `adjustToFit`', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })
  text.adjustToFit()
  expect(text.frame).toEqual(new Rectangle(10, 10, 23, 14))
})

test('should change the text alignment', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to left
  expect(text.alignment).toBe(Text.Alignment.left)

  Object.keys(Text.Alignment).forEach(key => {
    // test setting by name
    text.alignment = key
    expect(text.alignment).toBe(Text.Alignment[key])

    // test setting by value
    text.alignment = TextAlignmentMap[key]
    expect(text.alignment).toBe(Text.Alignment[key])
  })
})

test('should change the text alignment', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to left
  expect(text.alignment).toBe(Text.Alignment.left)

  Object.keys(Text.VerticalAlignment).forEach(key => {
    // test setting by name
    text.verticalAlignment = key
    expect(text.verticalAlignment).toBe(Text.VerticalAlignment[key])

    // test setting by value
    text.verticalAlignment = VerticalTextAlignmentMap[key]
    expect(text.verticalAlignment).toBe(Text.VerticalAlignment[key])
  })
})

test('should change the line spacing behavior', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to constant baseline
  expect(text.lineSpacing).toBe(Text.LineSpacing.constantBaseline)

  Object.keys(Text.LineSpacing).forEach(key => {
    // test setting by name
    text.lineSpacing = key
    expect(text.lineSpacing).toBe(Text.LineSpacing[key])

    // test setting by value
    text.lineSpacing = TextLineSpacingBehaviourMap[key]
    expect(text.lineSpacing).toBe(Text.LineSpacing[key])
  })
})

test('should fix the width', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to true
  expect(text.fixedWidth).toBe(false)

  text.fixedWidth = true

  expect(text.fixedWidth).toBe(true)
})
