/* globals expect, test */
import sketch from '../..'
const { Shape, Rectangle, createLayerFromData } = sketch

test('should create Group from an SVG', () => {
  const svgString =
    '<svg width="200px" height="100px" viewBox="0 0 200 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="#000000" x="0" y="0" width="200" height="100"></rect></svg>'

  const group = createLayerFromData(svgString, 'svg')
  expect(group.type).toEqual('Group')
  expect(group.layers.length).toEqual(1)
  expect(group.layers[0].type).toEqual('ShapePath')
  expect(group.layers[0].shapeType).toEqual('Rectangle')
  expect(group.layers[0].frame.width).toEqual(200)
  expect(group.layers[0].frame.height).toEqual(100)
})

test('should create group from a PDF', (context, document) => {
  const layer = new Shape({
    parent: document.selectedPage,
    frame: new Rectangle(0, 0, 200, 100),
    style: {
      fills: [
        {
          color: '#888888',
        },
      ],
    },
  })
  const buffer = sketch.export(layer, {
    formats: 'pdf',
    output: null,
  })
  const page = createLayerFromData(buffer, 'pdf')
  expect(page.type).toEqual('Group')
  expect(page.frame.width).toEqual(200)
  expect(page.frame.height).toEqual(100)
})

test('should create Image from a bitmap', (context, document) => {
  const layer = new Shape({
    parent: document.selectedPage,
    frame: new Rectangle(0, 0, 200, 100),
  })
  const buffer = sketch.export(layer, {
    formats: 'png',
    output: null,
  })
  const image = createLayerFromData(buffer, 'bitmap')
  expect(image.type).toEqual('Image')
})
