/* globals expect, test */

import { Style } from '../..'

test('should set the borders', () => {
  // setting the borders after creation
  const style = new Style()
  // check that a style can be logged
  log(style)
  style.borders = ['#11223344', '#1234']
  expect(style.sketchObject.borders().count()).toBe(2)

  // setting the borders during creation
  const style2 = new Style({
    borders: ['#11223344', '#1234'],
  })
  expect(style2.sketchObject.borders().count()).toBe(2)

  // setting the borders as an array of object
  const style3 = new Style({
    borders: [
      {
        color: '#11223344',
        thickness: 30,
      },
      {
        color: '#1234',
        position: Style.BorderPosition.Outside,
      },
      {
        gradient: {
          stops: [
            { position: 0, color: '#1234' },
            { position: 0.5, color: '#0000' },
            { position: 0, color: '#1234' },
          ],
        },
      },
    ],
  })
  expect(style3.sketchObject.borders().count()).toBe(3)
})

test('should get the borders', () => {
  const style = new Style()
  style.borders = [
    {
      color: '#11223344',
      thickness: 30,
    },
    {
      color: '#1234',
      position: Style.BorderPosition.Outside,
    },
    {
      gradient: {
        stops: [
          { position: 0, color: '#1234' },
          { position: 0.5, color: '#0000' },
          { position: 1, color: '#1234' },
        ],
      },
    },
  ]
  expect(style.borders[0].toJSON()).toEqual({
    color: '#11223344',
    fillType: 'Color',
    position: 'Center',
    thickness: 30,
    enabled: true,
    blendingMode: 'Normal',
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
    hasIndividualSides: false,
    sides: { left: 30, top: 30, right: 30, bottom: 30 },
  })
  expect(style.borders[1].toJSON()).toEqual({
    color: '#11223344',
    fillType: 'Color',
    position: 'Outside',
    thickness: 1,
    enabled: true,
    blendingMode: 'Normal',
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
    hasIndividualSides: false,
    sides: { left: 1, top: 1, right: 1, bottom: 1 },
  })
  expect(style.borders[2].gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [
      { position: 0, color: '#11223344' },
      { position: 0.5, color: '#00000000' },
      { position: 1, color: '#11223344' },
    ],
  })
})

// https://github.com/sketch-hq/SketchAPI/issues/230
test('should set the borders with 0s', () => {
  const style = new Style({
    borders: [
      {
        color: '#11223344',
        thickness: 0,
      },
    ],
  })
  expect(style.borders[0].thickness).toBe(0)
})

test('should set and get blending mode', () => {
  const style = new Style({
    blendingMode: Style.BlendingMode.Darken,
    borders: [
      {
        color: '##aabbccff',
        blendingMode: Style.BlendingMode.ColorBurn,
      },
      {
        color: 'black',
        blendingMode: Style.BlendingMode.ColorDodge,
      },
    ],
  })
  expect(style.borders[0].blendingMode).toBe(Style.BlendingMode.ColorBurn)
  expect(style.borders[1].blendingMode).toBe(Style.BlendingMode.ColorDodge)

  style.borders[0].blendingMode = Style.BlendingMode.Lighten
  style.borders[1].blendingMode = Style.BlendingMode.Screen
  style.blendingMode = Style.BlendingMode.Multiply

  expect(style.borders[0].blendingMode).toBe(Style.BlendingMode.Lighten)
  expect(style.borders[1].blendingMode).toBe(Style.BlendingMode.Screen)
})

test('should set and get gradient property', () => {
  const style = new Style({
    borders: [
      {
        fillType: Style.FillType.Color,
        color: '#000000ff',
      },
    ],
  })
  expect(style.borders[0].fillType).toBe(Style.FillType.Color)

  style.borders[0].fillType = Style.FillType.Gradient
  style.borders[0].gradient = {
    gradientType: Style.GradientType.Linear,
    from: { x: 0, y: 0 },
    to: { x: 1, y: 1 },
    stops: [
      { position: 0, color: '#ff00007f' },
      { position: 1, color: '#00ff00ff' },
    ],
  }

  expect(style.borders[0].gradient.toJSON()).toEqual({
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
        borders: [
          {
            fillType: Style.FillType.Color,
            color: swatch.referencingColor,
          },
        ],
      },
    },
  ]

  let layer = document.selectedPage.layers[0]
  expect(layer.style.borders[0].swatch).toBeDefined()
  expect(layer.style.borders[0].swatch.name).toBe(swatch.name)
  expect(layer.style.borders[0].swatch.color).toBe(swatch.color)
  expect(layer.style.borders[0].color).toBe(swatch.color)
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
        borders: [
          {
            fillType: Style.FillType.Color,
            color: '#11223344', // will be replaced with the swatch color
          },
        ],
      },
    },
  ]

  let layer = document.selectedPage.layers[0]
  expect(layer.style.borders[0].swatch).toBeUndefined()

  const swatch = document.swatches[0]
  layer.style.borders[0].swatch = swatch
  expect(layer.style.borders[0].swatch).toBeDefined()
  expect(layer.style.borders[0].swatch.name).toBe(swatch.name)
  expect(layer.style.borders[0].swatch.color).toBe(swatch.color)
  expect(layer.style.borders[0].color).toBe(swatch.color)
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
        borders: [
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

  expect(layer.style.borders[0].swatch).toBeDefined()
  expect(layer.style.borders[0].swatch.id).toBe(swatch.id)
  expect(layer.style.borders[0].swatch.name).toBe(swatch.name)
  expect(layer.style.borders[0].swatch.color).toBe(swatch.color)
  expect(layer.style.borders[0].color).toBe(swatch.color)
})

test('should support individual sides', () => {
  const style = new Style({
    borders: [
      {
        color: '#000000ff',
        thickness: 10,
      },
    ],
  })
  expect(style.borders[0].hasIndividualSides).toBe(false)

  // Could be set as properties
  style.borders[0].sides.left = 1
  style.borders[0].sides.top = 2
  style.borders[0].sides.right = 3
  style.borders[0].sides.bottom = 4
  expect(style.borders[0].hasIndividualSides).toBe(true)
  expect(style.borders[0].sides.left).toBe(1)
  expect(style.borders[0].sides.top).toBe(2)
  expect(style.borders[0].sides.right).toBe(3)
  expect(style.borders[0].sides.bottom).toBe(4)

  // Could be reset
  style.borders[0].sides = null
  expect(style.borders[0].hasIndividualSides).toBe(false)

  // Could be set via an object
  style.borders[0].sides = {
    left: 0,
    top: 2,
    right: 4,
    bottom: 6,
  }
  expect(style.borders[0].hasIndividualSides).toBe(true)
  expect(style.borders[0].sides.left).toBe(0)
  expect(style.borders[0].sides.top).toBe(2)
  expect(style.borders[0].sides.right).toBe(4)
  expect(style.borders[0].sides.bottom).toBe(6)

  // Could be set via constructor without the general thickness being set
  const style2 = new Style({
    borders: [
      {
        color: '#000000ff',
        sides: {
          left: 0,
          top: 2,
          right: 4,
          bottom: 6,
        },
      },
    ],
  })
  expect(style2.borders[0].hasIndividualSides).toBe(true)
  expect(style2.borders[0].sides.left).toBe(0)
  expect(style2.borders[0].sides.top).toBe(2)
  expect(style2.borders[0].sides.right).toBe(4)
  expect(style2.borders[0].sides.bottom).toBe(6)
  expect(style2.borders[0].thickness).toBe(6) // thickness is now the max of the sides

  // Could be set via constructor, overriding the general thickness
  const style3 = new Style({
    borders: [
      {
        color: '#000000ff',
        thickness: 10,
        sides: {
          left: 0,
          top: 2,
          right: 4,
          bottom: 6,
        },
      },
    ],
  })
  expect(style3.borders[0].hasIndividualSides).toBe(true)
  expect(style3.borders[0].sides.left).toBe(0)
  expect(style3.borders[0].sides.top).toBe(2)
  expect(style3.borders[0].sides.right).toBe(4)
  expect(style3.borders[0].sides.bottom).toBe(6)
  expect(style3.borders[0].thickness).toBe(6) // thickness is now the max of the sides

  // If set partially, the general thickness is not affected
  const style4 = new Style({
    borders: [
      {
        color: '#000000ff',
        thickness: 10,
        sides: {
          top: 2,
          right: 3,
        },
      },
    ],
  })
  expect(style4.borders[0].hasIndividualSides).toBe(true)
  expect(style4.borders[0].sides.left).toBe(10)
  expect(style4.borders[0].sides.top).toBe(2)
  expect(style4.borders[0].sides.right).toBe(3)
  expect(style4.borders[0].sides.bottom).toBe(10)
  expect(style4.borders[0].thickness).toBe(10)

  // Setting sides resets non-specified sides to the general thickness
  style4.borders[0].sides = {
    left: 5,
  }
  expect(style4.borders[0].hasIndividualSides).toBe(true)
  expect(style4.borders[0].sides.left).toBe(5)
  expect(style4.borders[0].sides.top).toBe(10)
  expect(style4.borders[0].sides.right).toBe(10)
  expect(style4.borders[0].sides.bottom).toBe(10)

  // Setting sides to null resets all to the general thickness
  style4.borders[0].sides = null
  expect(style4.borders[0].hasIndividualSides).toBe(false)
  expect(style4.borders[0].sides.left).toBe(10)
  expect(style4.borders[0].sides.top).toBe(10)
  expect(style4.borders[0].sides.right).toBe(10)
  expect(style4.borders[0].sides.bottom).toBe(10)

  // Setting a side to a negative value should clamp it to 0
  style4.borders[0].sides = null
  style4.borders[0].sides.top = -5
  expect(style4.borders[0].sides.top).toBe(0)
})
