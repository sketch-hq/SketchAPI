/* globals expect, test */
import { isRunningOnJenkins, canBeLogged } from '../../../test-utils'
import { ShapePath } from '../..'
import { CurvePoint } from '../../models/CurvePoint'

test('should create a new shape path', () => {
  const shapePath = new ShapePath()
  expect(shapePath.type).toBe('ShapePath')
  canBeLogged(shapePath, ShapePath)
})

test('should expose PointType', () => {
  expect(ShapePath.PointType).toBe(CurvePoint.PointType)
})

test('should create shape paths of different shape type', () => {
  Object.keys(ShapePath.ShapeType).forEach((shapeType) => {
    const shapePath = new ShapePath({
      shapeType,
    })
    expect(shapePath.type).toBe('ShapePath')
    expect(shapePath.shapeType).toBe(shapeType)
  })
})

test('should return the points of a shape', () => {
  const shapePath = new ShapePath()
  expect(shapePath.points.map((p) => p.toJSON())).toEqual([
    {
      type: 'CurvePoint',
      pointType: 'Straight',
      cornerRadius: 0,
      curveFrom: { x: 0, y: 0 },
      curveTo: { x: 0, y: 0 },
      point: { x: 0, y: 0 },
    },
    {
      type: 'CurvePoint',
      pointType: 'Straight',
      cornerRadius: 0,
      curveFrom: { x: 1, y: 0 },
      curveTo: { x: 1, y: 0 },
      point: { x: 1, y: 0 },
    },
    {
      type: 'CurvePoint',
      pointType: 'Straight',
      cornerRadius: 0,
      curveFrom: { x: 1, y: 1 },
      curveTo: { x: 1, y: 1 },
      point: { x: 1, y: 1 },
    },
    {
      type: 'CurvePoint',
      pointType: 'Straight',
      cornerRadius: 0,
      curveFrom: { x: 0, y: 1 },
      curveTo: { x: 0, y: 1 },
      point: { x: 0, y: 1 },
    },
  ])
})

if (!isRunningOnJenkins()) {
  test('should create a shape path from an svg path', () => {
    const svgPath = 'M10,10 L90,10 L90,90 L10,90 L10,10'
    const shapePath = ShapePath.fromSVGPath(svgPath)
    expect(shapePath.getSVGPath()).toBe(svgPath)
  })
}
