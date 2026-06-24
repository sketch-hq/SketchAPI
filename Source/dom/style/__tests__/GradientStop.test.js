/* globals expect, test */

// Gradient is not a public API and must be used with a fill,
// so it gets imported from the sketch/dom module.
import { Style } from '../..'

const { FillType, GradientType } = Style

test('should create a gradient with some stops', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {
          gradientType: GradientType.Linear,
          stops: [
            {
              position: 1,
              color: '#123',
            },
            {
              position: 0,
              color: '#534',
            },
            {
              position: 0.5,
              color: '#1234',
            },
          ],
        },
      },
    ],
  })
  expect(s.fills.length).toEqual(1)
  expect(s.fills[0].gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [
      { position: 1, color: '#112233ff' },
      { position: 0, color: '#553344ff' },
      { position: 0.5, color: '#11223344' },
    ],
    colorInterpolation: 'RGB',
  })
})

test('should report alpha of gradient stops', () => {
  const s = new Style({
    fills: [
      {
        fillType: FillType.Gradient,
        gradient: {
          gradientType: GradientType.Linear,
          stops: [
            {
              position: 0,
              color: '#1234567F',
            },
            {
              position: 1,
              color: '#123456FF',
            },
          ],
        },
      },
    ],
  })
  expect(Math.round(s.fills[0].gradient.stops[0].alpha * 255)).toEqual(127)
  expect(Math.round(s.fills[0].gradient.stops[1].alpha * 255)).toEqual(255)
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
            fillType: FillType.Gradient,
            gradient: {
              gradientType: GradientType.Linear,
              stops: [
                {
                  position: 0,
                  color: swatch.referencingColor,
                },
                {
                  position: 1,
                  color: '##11223344',
                },
              ],
            },
          },
        ],
      },
    },
  ]

  let layer = document.selectedPage.layers[0]
  expect(layer.style.fills[0].gradient.stops[0].swatch).toBeDefined()
  expect(layer.style.fills[0].gradient.stops[0].swatch.id).toBe(swatch.id)
  expect(layer.style.fills[0].gradient.stops[0].swatch.name).toBe(swatch.name)
  expect(layer.style.fills[0].gradient.stops[0].swatch.color).toBe(swatch.color)
  expect(layer.style.fills[0].gradient.stops[0].color).toBe(swatch.color)
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
            fillType: FillType.Gradient,
            gradient: {
              gradientType: GradientType.Linear,
              stops: [
                {
                  position: 0,
                  color: '##11223344', // will be replaced with the swatch color
                },
                {
                  position: 1,
                  color: '##11223344',
                },
              ],
            },
          },
        ],
      },
    },
  ]

  let layer = document.selectedPage.layers[0]
  expect(layer.style.fills[0].gradient.stops[0].swatch).toBeUndefined()

  const swatch = document.swatches[0]
  layer.style.fills[0].gradient.stops[0].swatch = swatch

  expect(layer.style.fills[0].gradient.stops[0].swatch).toBeDefined()
  expect(layer.style.fills[0].gradient.stops[0].swatch.id).toBe(swatch.id)
  expect(layer.style.fills[0].gradient.stops[0].swatch.name).toBe(swatch.name)
  expect(layer.style.fills[0].gradient.stops[0].swatch.color).toBe(swatch.color)
  expect(layer.style.fills[0].gradient.stops[0].color).toBe(swatch.color)
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
            fillType: FillType.Gradient,
            gradient: {
              gradientType: GradientType.Linear,
              stops: [
                {
                  position: 0,
                  swatch: swatch,
                  color: '##11223344', // should be ignored
                },
                {
                  position: 1,
                  color: '##11223344',
                },
              ],
            },
          },
        ],
      },
    },
  ]
  let layer = document.selectedPage.layers[0]

  expect(layer.style.fills[0].gradient.stops[0].swatch).toBeDefined()
  expect(layer.style.fills[0].gradient.stops[0].swatch.id).toBe(swatch.id)
  expect(layer.style.fills[0].gradient.stops[0].swatch.name).toBe(swatch.name)
  expect(layer.style.fills[0].gradient.stops[0].swatch.color).toBe(swatch.color)
  expect(layer.style.fills[0].gradient.stops[0].color).toBe(swatch.color)
})
