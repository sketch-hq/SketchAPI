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

  text.style.textColor = 'Clearly an invalid value that should be ignored'
  expect(text.style.textColor).toBe('#112233ff')
})

test('should change the text color using swatches', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
    {
      name: 'Just Green',
      color: '#00ff00',
    },
    {
      name: 'Bright Blue',
      color: '#0000ff',
    },
  ]
  const swatch1 = document.swatches[0]
  const swatch2 = document.swatches[1]
  const swatch3 = document.swatches[2]

  document.selectedPage.layers = [
    {
      type: 'Text',
      text: 'first text layer',
      style: {
        textColor: swatch1.referencingColor,
      },
    },
    {
      type: 'Text',
      text: 'second text layer',
      style: {
        textSwatch: swatch2,
      },
    },
    {
      type: 'Text',
      text: 'third text layer',
      style: {
        textColor: '#11223344', // will be replaced with the swatch color
      },
    },
  ]

  let layer1 = document.selectedPage.layers[0]
  expect(layer1.style.textColor).toBe(swatch1.color)
  expect(layer1.style.textSwatch?.id).toBe(swatch1.id)
  expect(layer1.style.textSwatch?.name).toBe(swatch1.name)
  expect(layer1.style.textSwatch?.color).toBe(swatch1.color)

  let layer2 = document.selectedPage.layers[1]
  expect(layer2.style.textColor).toBe(swatch2.color)
  expect(layer2.style.textSwatch?.id).toBe(swatch2.id)
  expect(layer2.style.textSwatch?.name).toBe(swatch2.name)
  expect(layer2.style.textSwatch?.color).toBe(swatch2.color)

  let layer3 = document.selectedPage.layers[2]
  expect(layer3.style.textColor).toBe('#11223344')
  expect(layer3.style.textSwatch).toBeUndefined()

  layer3.style.textSwatch = swatch3
  expect(layer3.style.textColor).toBe(swatch3.color)
  expect(layer3.style.textSwatch?.id).toBe(swatch3.id)
  expect(layer3.style.textSwatch?.name).toBe(swatch3.name)
  expect(layer3.style.textSwatch?.color).toBe(swatch3.color)
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

  text.style.textUnderline = 'none' // unknown values are treated as null
  expect(text.style.textUnderline).toBe(undefined)

  text.style.textUnderline = 'single dash-dot by-word' // patterns are ignored
  expect(text.style.textUnderline).toBe('single')
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

  text.style.textStrikethrough = 'none' // unknown values are treated as null
  expect(text.style.textStrikethrough).toBe(undefined)

  text.style.textStrikethrough = 'single dash-dot by-word' // patterns are ignored
  expect(text.style.textStrikethrough).toBe('single')
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

  text.style.fontFamily = 'Skia'
  // Make sure the font is actually available for testing its variable axes
  expect(text.style.fontFamily).toBe('Skia')

  expect(text.style.fontAxes).not.toBe(null)
  expect(text.style.fontAxes.Weight).toBeDefined()
  expect(text.style.fontAxes.Width).toBeDefined()
})

test('fontAxes setter should change the axes values', () => {
  const text = new Text({
    text: 'test',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  text.style.fontFamily = 'Skia'
  // Make sure the font is actually available for testing its variable axes
  expect(text.style.fontFamily).toBe('Skia')

  text.style.fontAxes = {
    Weight: {
      value: 3,
      id: text.style.fontAxes.Weight.id,
    },
    Width: {
      value: 0.91,
      id: null, // this should still work without the explicit id here
    },
  }
  expect(text.style.fontAxes.Weight.value).toBe(3)
  expect(text.style.fontAxes.Width.value).toBe(0.91)
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
