/* globals expect, test */

import { Style } from '../Style'

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
  expect(style.fills.map(f => f.toJSON())).toEqual([
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
