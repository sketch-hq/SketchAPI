/* globals expect, test */
import { layerFromString } from '../import'

test('should create svg layer', () => {
  const svgString =
    '<svg width="200px" height="100px" viewBox="0 0 200 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="#000000" x="0" y="0" width="200" height="100"></rect></svg>'

  const group = layerFromString(svgString, 'svg')
  expect(group.type).toEqual('Group')
  expect(group.layers.length).toEqual(1)
  expect(group.layers[0].type).toEqual('ShapePath')
  expect(group.layers[0].shapeType).toEqual('Rectangle')
  expect(group.layers[0].frame.width).toEqual(200)
  expect(group.layers[0].frame.height).toEqual(100)
})
