/* globals expect, test */
import { Text, Rectangle } from '../..'
import { VerticalTextAlignmentMap, TextAlignmentMap } from '../Text'

test('should change the text alignment', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to left
  expect(text.style.alignment).toBe(Text.Alignment.left)

  Object.keys(Text.Alignment).forEach(key => {
    const result = key === 'natural' ? Text.Alignment.left : Text.Alignment[key]

    // test setting by name
    text.style.alignment = key
    expect(text.style.alignment).toBe(result)

    // test setting by value
    text.style.alignment = TextAlignmentMap[key]
    expect(text.style.alignment).toBe(result)
  })
})

test('should change the text vertical alignment', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to top
  expect(text.style.verticalAlignment).toBe(Text.VerticalAlignment.top)

  Object.keys(Text.VerticalAlignment).forEach(key => {
    // test setting by name
    text.style.verticalAlignment = key
    expect(text.style.verticalAlignment).toBe(Text.VerticalAlignment[key])

    // test setting by value
    text.style.verticalAlignment = VerticalTextAlignmentMap[key]
    expect(text.style.verticalAlignment).toBe(Text.VerticalAlignment[key])
  })
})

test('should change the kerning', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to null (auto)
  expect(text.style.kerning).toBe(null)

  text.style.kerning = 1
  expect(text.style.kerning).toBe(1)

  text.style.kerning = null
  expect(text.style.kerning).toBe(null)
})

test('should change the line height', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to null (auto)
  expect(text.style.lineHeight).toBe(null)

  text.style.lineHeight = 10
  expect(text.style.lineHeight).toBe(10)
  expect(text.style.paragraphSpacing).toBe(0)

  text.style.lineHeight = null
  expect(text.style.lineHeight).toBe(null)

  text.style.lineHeight = 0
  expect(text.style.lineHeight).toBe(null)
})

test('should change the paragraph spacing', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 0
  expect(text.style.paragraphSpacing).toBe(0)

  text.style.paragraphSpacing = 10
  expect(text.style.paragraphSpacing).toBe(10)
  expect(text.style.lineHeight).toBe(null)

  text.style.paragraphSpacing = 0
  expect(text.style.paragraphSpacing).toBe(0)
})

test('should change the text color', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to black
  expect(text.style.textColor).toBe('#000000ff')

  text.style.textColor = '#123'
  expect(text.style.textColor).toBe('#112233ff')
})

test('should change the font size', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 12
  expect(text.style.fontSize).toBe(12)

  text.style.fontSize = 40
  expect(text.style.fontSize).toBe(40)
})
