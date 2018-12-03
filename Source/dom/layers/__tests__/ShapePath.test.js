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
