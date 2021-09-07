/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import { Text, Rectangle } from '../..'

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
  expect(text.style.alignment).toBe(Text.Alignment.left)

  // TextAlignmentMap/TextAlignmentReverseMap are private APIs. Test API
  // the way users would set them instead using raw values.
  const map = {
    left: 'left', // Visually left aligned
    right: 'right', // Visually right aligned
    center: 'center', // Visually centered
    justified: 'justified', // Fully-justified. The last line in a paragraph is natural-aligned.
    natural: 'natural', // Indicates the default alignment for script
  }

  // The 'natural' aligment defaults to left and is therefore specifically
  // included in the expectation.
  Object.keys(Text.Alignment).forEach((key) => {
    // test setting by name
    text.style.alignment = key
    expect(text.style.alignment).toBe(
      Text.Alignment[key] === 'natural' ? 'left' : Text.Alignment[key]
    )

    // test setting by value
    text.style.alignment = map[key]
    expect(text.style.alignment).toBe(
      Text.Alignment[key] === 'natural' ? 'left' : Text.Alignment[key]
    )
  })
})

test('should change the line spacing behavior', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

// the default will change over time as we improve behaviour.  default is always "newest" 
// and right now thats what we're calling 'system' - see the map below for an explanation.
  expect(text.lineSpacing).toBe(Text.LineSpacing.system)

  // TextLineSpacingBehaviourMap is private API.
  const TextLineSpacingBehaviourMap = {
    variable: 1, // Uses min & max line height on paragraph style
    constantBaseline: 2, // Uses MSConstantBaselineTypesetter for fixed line height
    natural: 3, // Uses MSConstantBaselineTypesetter for fixed line heights, and MSEmojiAwareLayoutManagerDelegate for natural line heights
    system: 4, // Natural, but uses MSConstantBaselineTypesetter with Apple-supplied baseline values instead of calculating our own
  }

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
  expect(fragments[0].text).toBe('Test\n')
  expect(fragments[1].baselineOffset).toBe(3)
  expect(Number(fragments[1].range.location)).toBe(5)
  expect(Number(fragments[1].range.length)).toBe(6)
  expect(fragments[1].rect.toJSON()).toEqual({
    x: 0,
    y: 14,
    width: 27.345703125,
    height: 14,
  })
  expect(fragments[1].text).toBe('Hello\n')
  expect(fragments[2].baselineOffset).toBe(3)
  expect(Number(fragments[2].range.location)).toBe(11)
  expect(Number(fragments[2].range.length)).toBe(4)
  expect(fragments[2].rect.toJSON()).toEqual({
    x: 0,
    y: 28,
    width: 20.021484375,
    height: 14,
  })
  expect(fragments[2].text).toBe('123\n')
})
