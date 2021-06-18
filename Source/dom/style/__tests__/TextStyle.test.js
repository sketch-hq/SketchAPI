/* globals expect, test */
import { Text, Rectangle, Group } from '../..'

// Constants from 'dom/style/Text'
// VerticalTextAlignmentMap  and TextAlignmentMap are private APIs.
const VerticalTextAlignmentMap = {
  top: 0, // Visually top aligned
  center: 1, // Visually centered
  bottom: 2, // Visually bottom aligned
}

const TextAlignmentMap = {
  left: 0, // Visually left aligned
  right: 1, // Visually right aligned
  center: 2, // Visually centered
  justified: 3, // Fully-justified. The last line in a paragraph is natural-aligned.
  natural: 4, // Indicates the default alignment for script
}

test('should create a text style for a text layer', () => {
  const { style } = new Text({
    text: 'Hello!',
    style: {},
  })

  expect(style.styleType).toBe('Text')
})

test('should change the text alignment', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to left
  expect(text.style.alignment).toBe(Text.Alignment.left)

  Object.keys(Text.Alignment).forEach((key) => {
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

  Object.keys(Text.VerticalAlignment).forEach((key) => {
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

test('should round the kerning before returning it (#319)', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  text.style.kerning = 0.6
  expect(text.style.kerning).toBe(0.6)
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

test('should change the text transform', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 'none'
  expect(text.style.textTransform).toBe('none')

  text.style.textTransform = 'uppercase'
  expect(text.style.textTransform).toBe('uppercase')

  text.style.textTransform = 'lowercase'
  expect(text.style.textTransform).toBe('lowercase')

  text.style.textTransform = 'none'
  expect(text.style.textTransform).toBe('none')
})

test('should change the font family', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 'Helvetica'
  expect(text.style.fontFamily).toBe('Helvetica')

  text.style.fontFamily = 'Arial'
  expect(text.style.fontFamily).toBe('Arial')

  // non existent font will keep the previous one
  text.style.fontFamily = 'non-existent-font-name'
  expect(text.style.fontFamily).toBe('Arial')

  // system should set the font family to the system font
  text.style.fontFamily = 'system'
  expect(text.style.fontFamily).toBe('system')
})

test('should change the font weight', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 5
  expect(text.style.fontWeight).toBe(5)

  text.style.fontWeight = 9
  expect(text.style.fontFamily).toBe('Helvetica')
  expect(text.style.fontWeight).toBe(9)

  text.style.fontWeight = 5
  expect(text.style.fontFamily).toBe('Helvetica')
  expect(text.style.fontWeight).toBe(5)

  // non existent font weight will pick the closest one
  text.style.fontWeight = 12
  expect(text.style.fontFamily).toBe('Helvetica')
  expect(text.style.fontWeight).toBe(9)
})

test('should change the font style', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to undefined
  expect(text.style.fontStyle).toBe(undefined)

  text.style.fontStyle = 'italic'
  expect(text.style.fontStyle).toBe('italic')

  text.style.fontStyle = 'normal'
  expect(text.style.fontStyle).toBe(undefined)
})

// TODO: can't seem to find a font with small caps
// test('should change the font variant', () => {
//   const text = new Text({
//     text: 'blah',
//     frame: new Rectangle(10, 10, 1000, 1000),
//     style: {
//       fontFamily: 'SF Compact Display',
//     },
//   })

//   expect(text.style.fontFamily).toBe('SF Compact Display')

//   // default to undefined
//   expect(text.style.fontVariant).toBe(undefined)

//   text.style.fontVariant = 'small-caps'
//   expect(text.style.fontVariant).toBe('small-caps')

//   text.style.fontVariant = 'normal'
//   expect(text.style.fontVariant).toBe(undefined)
// })

test('should change the font stretch', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to undefined
  expect(text.style.fontStretch).toBe(undefined)

  // but not all font families tho
  text.style.fontFamily = 'Helvetica Neue'
  text.style.fontWeight = 9
  text.style.fontStretch = 'condensed'
  expect(text.style.fontStretch).toBe('condensed')

  text.style.fontStretch = 'normal'
  expect(text.style.fontStretch).toBe(undefined)
})

test('should change the text underline', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to undefined
  expect(text.style.textUnderline).toBe(undefined)

  text.style.textUnderline = 'single'
  expect(text.style.textUnderline).toBe('single')

  text.style.textUnderline = 'none'
  expect(text.style.textUnderline).toBe(undefined)

  text.style.textUnderline = 'double dot'
  expect(text.style.textUnderline).toBe('double dot')

  text.style.textUnderline = 'dot double'
  expect(text.style.textUnderline).toBe('double dot')

  text.style.textUnderline = 'thick dash-dot'
  expect(text.style.textUnderline).toBe('thick dash-dot')
})

test('should change the text strikethrough', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to undefined
  expect(text.style.textStrikethrough).toBe(undefined)

  text.style.textStrikethrough = 'single'
  expect(text.style.textStrikethrough).toBe('single')

  text.style.textStrikethrough = 'none'
  expect(text.style.textStrikethrough).toBe(undefined)

  text.style.textStrikethrough = 'double dot'
  expect(text.style.textStrikethrough).toBe('double dot')

  text.style.textStrikethrough = 'dot double'
  expect(text.style.textStrikethrough).toBe('double dot')

  text.style.textStrikethrough = 'thick dash-dot'
  expect(text.style.textStrikethrough).toBe('thick dash-dot')
})

test('should get the default line height', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  expect(text.style.getDefaultLineHeight()).toBe(14)

  const group = new Group({
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  expect(group.style.getDefaultLineHeight()).toBe(undefined)
})

// Not sure how to test variable fonts any further, since it would require
// having specific variable fonts installed on the OS
test('fontAxes getter should return null when the font is not a variable font', () => {
  const text = new Text({
    text: 'test',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  expect(text.style.fontAxes).toBe(null)
})

test('fontAxes setter should not error when setting non-existent axes', () => {
  const text = new Text({
    text: 'test',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  try {
    text.style.fontAxes = {
      Weight: {
        value: 900,
        id: 123,
      },
    }
    expect(true).toBe(true)
  } catch (err) {
    expect(false).toBe(true)
  }
})
