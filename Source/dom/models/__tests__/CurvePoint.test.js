/* globals test, expect */

import { Document, ShapePath } from '../..'
import { CurvePoint } from '../CurvePoint'

test('should be able to log an CurvePoint', () => {
  const curvePoint = new CurvePoint()
  log(curvePoint)
})

test('should be able to modify a CurvePoint', () => {
  const curvePoint = new CurvePoint()
  expect(curvePoint.toJSON()).toEqual({
    type: 'CurvePoint',
    cornerRadius: 0,
    curveFrom: { x: 0, y: 0 },
    curveTo: { x: 0, y: 0 },
    point: { x: 0, y: 0 },
    pointType: 'Straight',
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

test('should show if a point is selected', () => {
  const document = new Document()
  const shape = new ShapePath({
    parent: document.selectedPage,
  })
  expect(shape.points[0].isSelected()).toBe(false)

  shape.selected = true

  // switch to path editing mode
  document.sketchObject
    .eventHandlerManager()
    .switchToEventHandlerClass(MSShapeEventHandler.class())

  expect(shape.points[0].isSelected()).toBe(true)

  document.close()
})
