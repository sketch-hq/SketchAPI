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

test('should set and get color swatch as tint', (_context, document) => {
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

  // Make sure this host layer is actually part of the same document as the swatch itself
  document.selectedPage.layers = [
    {
      type: 'ShapePath',
      style: {
        tint: {
          color: swatch1.referencingColor,
        },
      },
    },
    {
      type: 'ShapePath',
      style: {
        tint: {
          swatch: swatch2,
          color: '#11223344', // should be ignored
        },
      },
    },
    {
      type: 'ShapePath',
      style: {
        tint: {
          color: '#11223344', // will be replaced with the swatch color
        },
      },
    },
  ]

  let layer1 = document.selectedPage.layers[0]
  expect(layer1.style.tint.swatch).toBeDefined()
  expect(layer1.style.tint.swatch.id).toBe(swatch1.id)
  expect(layer1.style.tint.swatch.name).toBe(swatch1.name)
  expect(layer1.style.tint.swatch.color).toBe(swatch1.color)
  expect(layer1.style.tint.color).toBe(swatch1.color)

  let layer2 = document.selectedPage.layers[1]
  expect(layer2.style.tint.swatch).toBeDefined()
  expect(layer2.style.tint.swatch.id).toBe(swatch2.id)
  expect(layer2.style.tint.swatch.name).toBe(swatch2.name)
  expect(layer2.style.tint.swatch.color).toBe(swatch2.color)
  expect(layer2.style.tint.color).toBe(swatch2.color)

  let layer3 = document.selectedPage.layers[2]
  expect(layer3.style.tint.swatch).toBeUndefined()

  layer3.style.tint.swatch = swatch3
  expect(layer3.style.tint.swatch).toBeDefined()
  expect(layer3.style.tint.swatch.id).toBe(swatch3.id)
  expect(layer3.style.tint.swatch.name).toBe(swatch3.name)
  expect(layer3.style.tint.swatch.color).toBe(swatch3.color)
  expect(layer3.style.tint.color).toBe(swatch3.color)
})

test('should get color swatch', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]
  const swatch = document.swatches[0]

  // Make sure this host layer is actually part of the same document as the swatch itself
  document.selectedPage.layers = [
    {
      type: 'ShapePath',
      style: {
        fills: [
          {
            fillType: Style.FillType.Color,
            color: swatch.referencingColor,
          },
        ],
      },
    },
  ]

  let layer = document.selectedPage.layers[0]
  expect(layer.style.fills[0].swatch).toBeDefined()
  expect(layer.style.fills[0].swatch.name).toBe(swatch.name)
  expect(layer.style.fills[0].swatch.color).toBe(swatch.color)
  expect(layer.style.fills[0].color).toBe(swatch.color)
})

test('should set color swatch', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]

  // Make sure this host layer is actually part of the same document as the swatch itself
  document.selectedPage.layers = [
    {
      type: 'ShapePath',
      style: {
        fills: [
          {
            fillType: Style.FillType.Color,
            color: '#11223344', // will be replaced with the swatch color
          },
        ],
      },
    },
  ]

  let layer = document.selectedPage.layers[0]
  expect(layer.style.fills[0].swatch).toBeUndefined()

  const swatch = document.swatches[0]
  layer.style.fills[0].swatch = swatch
  expect(layer.style.fills[0].swatch).toBeDefined()
  expect(layer.style.fills[0].swatch.name).toBe(swatch.name)
  expect(layer.style.fills[0].swatch.color).toBe(swatch.color)
  expect(layer.style.fills[0].color).toBe(swatch.color)
})

test('should assign swatch directly', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]
  const swatch = document.swatches[0]

  // Make sure this host layer is actually part of the same document as the swatch itself
  document.selectedPage.layers = [
    {
      type: 'ShapePath',
      style: {
        fills: [
          {
            fillType: Style.FillType.Color,
            swatch: swatch,
            color: '##11223344', // should be ignored
          },
        ],
      },
    },
  ]
  let layer = document.selectedPage.layers[0]

  expect(layer.style.fills[0].swatch).toBeDefined()
  expect(layer.style.fills[0].swatch.id).toBe(swatch.id)
  expect(layer.style.fills[0].swatch.name).toBe(swatch.name)
  expect(layer.style.fills[0].swatch.color).toBe(swatch.color)
  expect(layer.style.fills[0].color).toBe(swatch.color)
})
