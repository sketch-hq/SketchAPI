/* globals test, expect */

// Use ShapePath to indirectly instantiate CurvePoint as there's no public,
// direct API.
import { Document, ShapePath } from '../..'

test('should be able to log an CurvePoint', () => {
  const p = new ShapePath().points[0]
  log(p)
})

test('should be able to modify a CurvePoint', () => {
  const p = new ShapePath().points[0]
  expect(p.toJSON()).toEqual({
    type: 'CurvePoint',
    cornerRadius: 0,
    curveFrom: { x: 0, y: 0 },
    curveTo: { x: 0, y: 0 },
    point: { x: 0, y: 0 },
    pointType: 'Straight',
  })

  p.cornerRadius = 3
  expect(p.cornerRadius).toBe(3)

  p.curveFrom = { x: 25, y: 3 }
  expect(p.curveFrom.toJSON()).toEqual({ x: 25, y: 3 })

  p.curveTo = { x: 24, y: 4 }
  expect(p.curveTo.toJSON()).toEqual({ x: 24, y: 4 })

  p.point = { x: 0.3, y: 0.4 }
  expect(p.point.toJSON()).toEqual({ x: 0.3, y: 0.4 })
})

test('switching to path edit mode does not select a point (#32796)', () => {
  const document = new Document()
  const shape = new ShapePath({
    parent: document.pages[0],
  })
  expect(shape.points[0].isSelected()).toBe(false)

  shape.selected = true

  // switch to path editing mode
  document.sketchObject
    .eventHandlerManager()
    .switchToEventHandlerClass(MSShapeEventHandler.class())

  expect(shape.points[0].isSelected()).toBe(false)
  document.close()
})
