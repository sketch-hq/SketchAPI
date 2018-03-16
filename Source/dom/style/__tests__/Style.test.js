/* globals expect, test */

import { Style } from '../Style'

test('should change the opacity', () => {
  const style = new Style()
  expect(style.opacity).toBe(1)
  style.opacity = 0.5
  expect(style.opacity).toBe(0.5)

  style.opacity = 2
  expect(style.opacity).toBe(1)

  style.opacity = -1
  expect(style.opacity).toBe(0)
})

test('should change the blending mode', () => {
  const style = new Style()
  expect(style.blendingMode).toBe('Normal')
  style.blendingMode = Style.BlendingMode.Multiply
  expect(style.blendingMode).toBe('Multiply')
})

test('should change the blur', () => {
  const style = new Style()
  expect(style.blur).toEqual({
    center: { x: 0.5, y: 0.5 },
    motionAngle: 0,
    radius: 10,
    enabled: false,
    type: 'Gaussian',
  })
  style.blur = {
    center: { x: 2, y: 6 },
    motionAngle: 5,
    radius: 20,
    enabled: true,
    type: Style.BlurType.Zoom,
  }
  expect(style.blur).toEqual({
    center: { x: 2, y: 6 },
    motionAngle: 5,
    radius: 20,
    enabled: true,
    type: 'Zoom',
  })
})

test('should change the border options', () => {
  const style = new Style()
  expect(style.borderOptions).toEqual({
    startArrowhead: 'None',
    endArrowhead: 'None',
    dashPattern: [],
    lineEnd: 'Butt',
    lineJoin: 'Miter',
  })
  style.borderOptions = {
    startArrowhead: Style.Arrowhead.OpenArrow,
    endArrowhead: Style.Arrowhead.ClosedArrow,
    dashPattern: [20, 5],
    lineEnd: Style.LineEnd.Round,
    lineJoin: Style.LineJoin.Bevel,
  }
  expect(style.borderOptions).toEqual({
    startArrowhead: 'OpenArrow',
    endArrowhead: 'ClosedArrow',
    dashPattern: [20, 5],
    lineEnd: 'Round',
    lineJoin: 'Bevel',
  })
})

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
  expect(style.borders[0]).toEqual({
    color: '#11223344',
    fillType: 'Color',
    position: 'Center',
    thickness: 30,
    enabled: true,
    gradient: {
      gradientType: 'Linear',
      from: { x: 0.5, y: 0 },
      to: { x: 0.5, y: 1 },
      stops: [
        { position: 0, color: '#ffffffff' },
        { position: 1, color: '#000000ff' },
      ],
    },
  })
  expect(style.borders[1]).toEqual({
    color: '#11223344',
    fillType: 'Color',
    position: 'Outside',
    thickness: 1,
    enabled: true,
    gradient: {
      gradientType: 'Linear',
      from: { x: 0.5, y: 0 },
      to: { x: 0.5, y: 1 },
      stops: [
        { position: 0, color: '#ffffffff' },
        { position: 1, color: '#000000ff' },
      ],
    },
  })
  expect(style.borders[2].gradient).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.5, y: 1 },
    stops: [
      { position: 0, color: '#11223344' },
      { position: 0.5, color: '#00000000' },
      { position: 1, color: '#11223344' },
    ],
  })
})

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
})

test('should get the fills', () => {
  const style = new Style()
  style.fills = ['#11223344', '#1234']
  expect(style.fills).toEqual([
    {
      color: '#11223344',
      fill: 'Color',
      enabled: true,
      gradient: {
        gradientType: 'Linear',
        from: { x: 0.5, y: 0 },
        to: { x: 0.5, y: 1 },
        stops: [
          { position: 0, color: '#ffffffff' },
          { position: 1, color: '#000000ff' },
        ],
      },
    },
    {
      color: '#11223344',
      fill: 'Color',
      enabled: true,
      gradient: {
        gradientType: 'Linear',
        from: { x: 0.5, y: 0 },
        to: { x: 0.5, y: 1 },
        stops: [
          { position: 0, color: '#ffffffff' },
          { position: 1, color: '#000000ff' },
        ],
      },
    },
  ])
})

test('should set the shadows', () => {
  const style = new Style()
  style.shadows = [
    {
      color: '#11223344',
      blur: 10,
      x: 5,
      y: 8,
      spread: 20,
      enabled: false,
    },
  ]
  style.innerShadows = [
    {
      color: '#11223344',
      blur: 10,
      x: 5,
      y: 8,
      spread: 20,
      enabled: false,
    },
  ]
  expect(style.sketchObject.shadows().count()).toBe(1)
  expect(style.sketchObject.innerShadows().count()).toBe(1)
})

test('should get the shadows', () => {
  const style = new Style()
  style.shadows = [
    {
      color: '#11223344',
      blur: 4,
      x: 5,
      y: 8,
      spread: 20,
      enabled: false,
    },
  ]
  expect(style.shadows).toEqual([
    {
      color: '#11223344',
      blur: 4,
      x: 5,
      y: 8,
      spread: 20,
      enabled: false,
    },
  ])
  style.innerShadows = [
    {
      color: '#11223344',
      blur: 5,
      x: 2,
      y: 23,
      spread: 10,
      enabled: true,
    },
  ]
  expect(style.innerShadows).toEqual([
    {
      color: '#11223344',
      blur: 5,
      x: 2,
      y: 23,
      spread: 10,
      enabled: true,
    },
  ])
})
