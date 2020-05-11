/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import { Text, Rectangle } from '../..'
import { TextLineSpacingBehaviourMap } from '../Text'
import { TextAlignmentMap } from '../../style/Text'

test('should create a Text layer', () => {
  const text = new Text()
  expect(text.type).toBe('Text')
  canBeLogged(text, Text)
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

  Object.keys(Text.Alignment).forEach((key) => {
    // test setting by name
    text.alignment = key
    expect(text.alignment).toBe(
      Text.Alignment[key] === 'natural' ? 'left' : Text.Alignment[key]
    )

    // test setting by value
    text.alignment = TextAlignmentMap[key]
    expect(text.alignment).toBe(
      Text.Alignment[key] === 'natural' ? 'left' : Text.Alignment[key]
    )
  })
})

test('should change the line spacing behavior', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to constant baseline
  expect(text.lineSpacing).toBe(Text.LineSpacing.constantBaseline)

  Object.keys(Text.LineSpacing).forEach((key) => {
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

test('should return the fragments of a text layer', () => {
  let text = new Text({
    text: 'blah',
  })

  let { fragments } = text

  expect(fragments.length).toBe(1)
  expect(fragments[0].baselineOffset).toBe(3)
  expect(Number(fragments[0].range.location)).toBe(0)
  expect(Number(fragments[0].range.length)).toBe(4)
  expect(fragments[0].rect.toJSON()).toEqual({
    x: 0,
    y: 0,
    width: 22.6875,
    height: 14,
  })
  expect(fragments[0].text).toBe('blah')

  // https://github.com/sketch-hq/SketchAPI/issues/144
  text = new Text({
    text: 'Test\nHello\n123\no',
  })
  // eslint-disable-next-line
  fragments = text.fragments

  expect(fragments.length).toBe(4)
  expect(fragments[0].baselineOffset).toBe(3)
  expect(Number(fragments[0].range.location)).toBe(0)
  expect(Number(fragments[0].range.length)).toBe(5)
  expect(fragments[0].rect.toJSON()).toEqual({
    x: 0,
    y: 0,
    width: 22.0078125,
    height: 14,
  })
  expect(fragments[0].text).toBe('Test')
  expect(fragments[1].baselineOffset).toBe(3)
  expect(Number(fragments[1].range.location)).toBe(5)
  expect(Number(fragments[1].range.length)).toBe(6)
  expect(fragments[1].rect.toJSON()).toEqual({
    x: 0,
    y: 14,
    width: 27.345703125,
    height: 14,
  })
  expect(fragments[1].text).toBe('Hello')
  expect(fragments[2].baselineOffset).toBe(3)
  expect(Number(fragments[2].range.location)).toBe(11)
  expect(Number(fragments[2].range.length)).toBe(4)
  expect(fragments[2].rect.toJSON()).toEqual({
    x: 0,
    y: 28,
    width: 20.021484375,
    height: 14,
  })
  expect(fragments[2].text).toBe('o')
})
