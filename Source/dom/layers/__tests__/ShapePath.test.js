/* globals expect, test */
import { ShapePath } from '../..'

test('should create a new shape path', () => {
  const shapePath = new ShapePath()
  // check that a shapePath can be logged
  log(shapePath)
  expect(shapePath.type).toBe('ShapePath')
})

test('should create shape paths of different shape type', () => {
  Object.keys(ShapePath.ShapeType).forEach(shapeType => {
    const shapePath = new ShapePath({
      shapeType,
    })
    expect(shapePath.type).toBe('ShapePath')
    expect(shapePath.shapeType).toBe(
      shapeType === ShapePath.ShapeType.Custom
        ? ShapePath.ShapeType.Rectangle
        : shapeType
    )
  })
})

test('should return the points of a shape', () => {
  const shapePath = new ShapePath()
  expect(shapePath.points.map(p => p.toJSON())).toEqual([
    {
      type: 'CurvePoint',
      curveMode: 'Straight',
      cornerRadius: 0,
      curveFrom: { x: 0, y: 0 },
      curveTo: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
    },
    {
      type: 'CurvePoint',
      curveMode: 'Straight',
      cornerRadius: 0,
      curveFrom: { x: 1, y: 0 },
      curveTo: { x: 1, y: 0 },
      point: { x: 1, y: 0 },
    },
    {
      type: 'CurvePoint',
      curveMode: 'Straight',
      cornerRadius: 0,
      curveFrom: { x: 1, y: 1 },
      curveTo: { x: 1, y: 1 },
      point: { x: 1, y: 1 },
    },
    {
      type: 'CurvePoint',
      curveMode: 'Straight',
      cornerRadius: 0,
      curveFrom: { x: 0, y: 1 },
      curveTo: { x: 0, y: 1 },
      point: { x: 0, y: 1 },
    },
  ])
})
