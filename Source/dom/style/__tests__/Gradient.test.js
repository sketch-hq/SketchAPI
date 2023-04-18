/* globals expect, test */

// Gradient is not a public API and must be used with a fill,
// so it gets imported from the sketch/dom module.
import { Style } from '../..'

const { FillType, GradientType } = Style

test('should create a default gradient', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {},
      },
    ],
  })

  expect(s.fills.length).toEqual(1)
  expect(String(s.fills[0].gradient._object.class())).toBe('MSGradient')
  expect(s.fills[0].gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [],
  })
})

test('should create a gradient with a specific type', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {
          gradientType: GradientType.Angular,
        },
      },
    ],
  })
  expect(s.fills[0].gradient.toJSON()).toEqual({
    gradientType: 'Angular',
    from: { x: 0.5, y: 0.5 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [],
  })
})

test('should create a gradient with a specific from and to coordinates', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {
          from: { x: 1, y: 0.5 },
          to: { x: 2, y: 5 },
        },
      },
    ],
  })
  expect(s.fills[0].gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 1, y: 0.5 },
    to: { x: 2, y: 5 },
    aspectRatio: 0,
    stops: [],
  })
})

test('should change the from', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {},
      },
    ],
  })

  const gradient = s.fills[0].gradient
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [],
  })

  gradient.from.x = 0.7
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.7, y: 0 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [],
  })

  gradient.from.y = 0.1
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.7, y: 0.1 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [],
  })

  gradient.from = {
    x: 0.1,
    y: 0.4,
  }
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.1, y: 0.4 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [],
  })
})

// https://github.com/sketch-hq/SketchAPI/issues/216
test('should change the to', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {},
      },
    ],
  })

  const gradient = s.fills[0].gradient
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [],
  })

  gradient.to.x = 0.7
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.7, y: 1 },
    aspectRatio: 0,
    stops: [],
  })

  gradient.to.y = 0.1
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.7, y: 0.1 },
    aspectRatio: 0,
    stops: [],
  })

  gradient.to = {
    x: 0.1,
    y: 0.4,
  }
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.1, y: 0.4 },
    aspectRatio: 0,
    stops: [],
  })
})

// https://github.com/sketch-hq/SketchAPI/issues/230
test('should create a gradient with a specific from and to coordinates including 0s', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {
          from: { x: 0, y: 0 },
          to: { x: 0, y: 0 },
        },
      },
    ],
  })
  expect(s.fills[0].gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0, y: 0 },
    to: { x: 0, y: 0 },
    aspectRatio: 0,
    stops: [],
  })
})

test('should set the aspect ratio of a gradient', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {
          gradientType: 'Radial',
        },
      },
    ],
  })

  const gradient = s.fills[0].gradient
  expect(gradient.aspectRatio).toBe(0)

  gradient.aspectRatio = 2
  expect(gradient.aspectRatio).toBe(2)
})
