/* globals expect, test */

import { Gradient } from '../Gradient'

test('should create a gradient with some stops', () => {
  const gradient = Gradient.from({
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
  })
  expect(gradient.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.5, y: 1 },
    stops: [
      { position: 1, color: '#112233ff' },
      { position: 0, color: '#553344ff' },
      { position: 0.5, color: '#11223344' },
    ],
  })
})
