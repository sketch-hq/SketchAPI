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
  })
})
