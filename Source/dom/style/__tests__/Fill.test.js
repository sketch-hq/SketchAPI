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
  expect(style.fills.map(f => f.toJSON())).toEqual([
    {
      color: '#11223344',
      fillType: 'Color',
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
