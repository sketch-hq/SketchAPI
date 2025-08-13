/* globals expect, test */
import { base64Image } from '../../../test-utils'
import { Style } from '../..'

test('should set the fills', () => {
  // setting the fills after creation
  const style = new Style()
  style.fills = ['#11223344', '#1234']
  expect(style.sketchObject.fills().count()).toBe(2)

  // setting the fills during creation
  const style2 = new Style({
    fills: ['#11223344', '#1234'],
  })
  expect(style2.sketchObject.fills().count()).toBe(2)

  // setting the fills as an array of object
  const style3 = new Style({
    fills: [
      {
        color: '#11223344',
        thickness: 30,
      },
      {
        color: '#1234',
        fillType: Style.FillType.Color,
      },
    ],
  })
  expect(style3.sketchObject.fills().count()).toBe(2)

  // should still work with `Fill.type`
  const style4 = new Style({
    fills: [
      {
        color: '#1234',
        fill: Style.FillType.Color,
      },
    ],
  })
  expect(style4.sketchObject.fills().count()).toBe(1)
})

test('should get the fills', () => {
  const style = new Style()
  style.fills = ['#11223344', '#1234']
  expect(style.fills.map((f) => f.toJSON())).toEqual([
    {
      color: '#11223344',
      fillType: 'Color',
      blendingMode: 'Normal',
      enabled: true,
      gradient: {
        gradientType: 'Linear',
        from: { x: 0.5, y: 0 },
        to: { x: 0.5, y: 1 },
        aspectRatio: 0,
        stops: [
          { position: 0, color: '#ffffffff' },
          { position: 1, color: '#000000ff' },
        ],
      },
      pattern: { patternType: 'Fill', image: null, tileScale: 1 },
    },
    {
      color: '#11223344',
      fillType: 'Color',
      blendingMode: 'Normal',
      enabled: true,
      gradient: {
        gradientType: 'Linear',
        from: { x: 0.5, y: 0 },
        to: { x: 0.5, y: 1 },
        aspectRatio: 0,
        stops: [
          { position: 0, color: '#ffffffff' },
          { position: 1, color: '#000000ff' },
        ],
      },
      pattern: { patternType: 'Fill', image: null, tileScale: 1 },
    },
  ])
})

test('should set the pattern', () => {
  const style = new Style()
  style.fills = [
    {
      fillType: 'Pattern',
      pattern: {
        patternType: 'Fit',
        image: {
          base64: base64Image,
        },
        tileScale: 2,
      },
    },
  ]
  expect(style.fills[0].fill).toBe('Pattern')
  expect(style.fills[0].pattern.patternType).toBe('Fit')
  expect(style.fills[0].pattern.tileScale).toBe(2)
  expect(style.fills[0].pattern.image.type).toBe('ImageData')
})

test('should set and get blending mode', () => {
  const style = new Style({ blendingMode: Style.BlendingMode.Multiply })
  style.fills = [
    {
      fillType: Style.FillType.Color,
      color: '#aabbccff',
      blendingMode: Style.BlendingMode.HardLight,
    },
    {
      fillType: Style.FillType.Color,
      color: '#ffccbbaa',
      blendingMode: Style.BlendingMode.Exclusion,
    },
  ]
  expect(style.fills[0].blendingMode).toBe(Style.BlendingMode.HardLight)
  expect(style.fills[1].blendingMode).toBe(Style.BlendingMode.Exclusion)

  style.fills[0].blendingMode = Style.BlendingMode.Difference
  style.fills[1].blendingMode = Style.BlendingMode.Luminosity
  style.blendingMode = Style.BlendingMode.Hue

  expect(style.fills[0].blendingMode).toBe(Style.BlendingMode.Difference)
  expect(style.fills[1].blendingMode).toBe(Style.BlendingMode.Luminosity)
})

test('should set and get gradient property', () => {
  const style = new Style({
    fills: [
      {
        fillType: Style.FillType.Color,
        color: '#000000ff',
      },
    ],
  })
  expect(style.fills[0].fillType).toBe(Style.FillType.Color)

  style.fills[0].fillType = Style.FillType.Gradient
  style.fills[0].gradient = {
    gradientType: Style.GradientType.Linear,
    from: { x: 0, y: 0 },
    to: { x: 1, y: 1 },
    stops: [
      { position: 0, color: '#ff00007f' },
      { position: 1, color: '#00ff00ff' },
    ],
  }

  expect(style.fills[0].gradient.toJSON()).toEqual({
    gradientType: Style.GradientType.Linear,
    from: { x: 0, y: 0 },
    to: { x: 1, y: 1 },
    aspectRatio: 0,
    stops: [
      { position: 0, color: '#ff00007f' },
      { position: 1, color: '#00ff00ff' },
    ],
  })
})

test('should only return regular fills', () => {
  const style = new Style({
    fills: [
      {
        fillType: Style.FillType.Color,
        color: '#aa00ccff',
      },
      {
        fillType: Style.FillType.Color,
        color: '#00bb00ff',
      },
    ],
  })

  expect(style.fills.length).toBe(2)
  expect(style.tint).toBeUndefined()

  style.fills[0].sketchObject.setLayeringType(1) // Make it a tint fill

  expect(style.fills.length).toBe(1)
  expect(style.tint).toBeDefined()
})

test('should set, get, and remove tint', () => {
  const style = new Style({
    fills: [
      {
        fillType: Style.FillType.Color,
        color: '#aa00ccff',
      },
    ],
  })

  expect(style.fills.length).toBe(1)
  expect(style.tint).toBeUndefined()

  style.tint = {
    fillType: Style.FillType.Gradient, // will be ignored
    color: '#00bb00ff',
  }

  expect(style.fills.length).toBe(1)
  expect(style.tint.color).toBe('#00bb00ff')
  expect(style.tint.fillType).toBe(Style.FillType.Color)

  style.tint = null

  expect(style.fills.length).toBe(1)
  expect(style.tint).toBeUndefined()
})
