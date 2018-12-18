/* globals expect, test */
import { CurvePoint } from '../CurvePoint'

test('should be able to log an CurvePoint', () => {
  const curvePoint = new CurvePoint()
  log(curvePoint)
})

test('should be able to modify a CurvePoint', () => {
  const curvePoint = new CurvePoint()
  expect(curvePoint.toJSON()).toEqual({
    type: 'CurvePoint',
    pointType: 'Undefined',
    cornerRadius: 0,
    curveFrom: { x: 0, y: 0 },
    curveTo: { x: 0, y: 0 },
    point: { x: 0, y: 0 },
  })

  curvePoint.cornerRadius = 3
  expect(curvePoint.cornerRadius).toBe(3)

  curvePoint.curveFrom = {
    x: 25,
    y: 3,
  }
  expect(curvePoint.curveFrom.toJSON()).toEqual({
    x: 25,
    y: 3,
  })

  curvePoint.curveTo = {
    x: 24,
    y: 4,
  }
  expect(curvePoint.curveTo.toJSON()).toEqual({
    x: 24,
    y: 4,
  })

  curvePoint.point = {
    x: 3,
    y: 4,
  }
  expect(curvePoint.point.toJSON()).toEqual({
    x: 3,
    y: 4,
  })
})
