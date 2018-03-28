/* globals expect, test */

import { Style } from '../Style'

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
  expect(style.borders[1].toJSON()).toEqual({
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
  expect(style.borders[2].gradient.toJSON()).toEqual({
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
