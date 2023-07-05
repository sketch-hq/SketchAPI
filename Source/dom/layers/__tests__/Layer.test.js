/* globals expect, test */
import { Group, Rectangle, Artboard, SymbolMaster, ShapePath } from '../..'

test('should set the name of the layer', (_context, document) => {
  // setting an existing name
  const page = document.selectedPage
  page.name = 'This is a page'
  expect(page.name).toBe('This is a page')

  // setting a name when creating a component
  const group = new Group({ name: 'blah' })
  expect(group.name).toBe('blah')

  // default name
  const group2 = new Group()
  expect(group2.name).toBe('Group')
})

test('should set the frame of the layer', () => {
  const frame = new Rectangle(10, 10, 20, 20)
  const group = new Group({ frame })
  expect(group.frame).toEqual(frame)
  const newFrame = new Rectangle(10, 10, 20, 20)
  group.frame = newFrame
  expect(group.frame).toEqual(newFrame)
})

test('mutating a frame should change the frame of a layer', () => {
  const group = new Group()
  expect(group.frame.width).toBe(100)
  group.frame.width = 400
  expect(group.frame.width).toBe(400)
})

test('should duplicate the layer and add it as a sibling', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({ parent: page })
  expect(page.layers.length).toBe(1)
  const result = group.duplicate()
  expect(page.layers.length).toBe(2)
  expect(result.type).toBe('Group')
})

test('should duplicate the layer with no parent', () => {
  const group = new Group()
  const result = group.duplicate()
  expect(result.type).toBe('Group')
})

test('should remove the layer from its parent', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
  })
  expect(page.layers.length).toBe(1)
  const result = group.remove()
  expect(page.layers.length).toBe(0)
  expect(result).toEqual(group)
})

test('should select the layer', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
  })

  // start with nothing selected
  expect(group.selected).toBe(false)
  expect(page.selectedLayers.isEmpty).toBe(true)

  // select a layer
  group.selected = true
  expect(page.selectedLayers.isEmpty).toBe(false)

  // deselect it - should go back to nothing selected
  group.selected = false
  expect(page.selectedLayers.isEmpty).toBe(true)

  // select one layer then another - they both should be selected
  const group2 = new Group({
    parent: page,
    selected: true,
  })
  group.selected = true
  expect(group2.selected).toBe(true)
  expect(page.selectedLayers.length).toBe(2)
})

test('should be able to add the layer to a group', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
  })
  expect(group.parent).toEqual(page)
  expect(group.parent.layers[0]).toEqual(group)

  const group2 = new Group()
  group2.parent = page
  expect(group2.parent).toEqual(page)
})

test('should reorder the layers', (_context, document) => {
  const page = document.selectedPage
  const group1 = new Group({
    parent: page,
  })
  const group2 = new Group({
    parent: page,
  })
  const group3 = new Group({
    parent: page,
  })
  expect(group1.index).toBe(0)
  expect(group2.index).toBe(1)
  expect(group3.index).toBe(2)

  group1.moveToFront()
  expect(group2.index).toBe(0)
  expect(group3.index).toBe(1)
  expect(group1.index).toBe(2)

  group3.moveToBack()
  expect(group3.index).toBe(0)
  expect(group2.index).toBe(1)
  expect(group1.index).toBe(2)

  group2.moveForward()
  expect(group3.index).toBe(0)
  expect(group1.index).toBe(1)
  expect(group2.index).toBe(2)

  group1.moveBackward()
  expect(group1.index).toBe(0)
  expect(group3.index).toBe(1)
  expect(group2.index).toBe(2)
})

test('should reorder the layers using the index property', (_context, document) => {
  const page = document.selectedPage
  const group1 = new Group({
    parent: page,
  })
  const group2 = new Group({
    parent: page,
  })
  const group3 = new Group({
    parent: page,
  })
  expect(group1.index).toBe(0)
  expect(group2.index).toBe(1)
  expect(group3.index).toBe(2)

  group1.index = 2
  expect(group2.index).toBe(0)
  expect(group3.index).toBe(1)
  expect(group1.index).toBe(2)

  group3.index = 0
  expect(group3.index).toBe(0)
  expect(group2.index).toBe(1)
  expect(group1.index).toBe(2)

  group2.index = 2
  expect(group3.index).toBe(0)
  expect(group1.index).toBe(1)
  expect(group2.index).toBe(2)

  group1.index = 0
  expect(group1.index).toBe(0)
  expect(group3.index).toBe(1)
  expect(group2.index).toBe(2)

  group1.index = 3
  expect(group3.index).toBe(0)
  expect(group2.index).toBe(1)
  expect(group1.index).toBe(2)
})

test('should convert rect to different coord system', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
    frame: {
      x: 100,
      y: 50,
      width: 10,
      height: 10,
    },
  })

  const parentRect = group.localRectToParentRect(
    new Rectangle({ x: 10, y: 10, width: 10, height: 10 })
  )

  expect(parentRect.toJSON()).toEqual({
    x: 110,
    y: 60,
    width: 10,
    height: 10,
  })

  const pageRect = group.localRectToPageRect(
    new Rectangle({ x: 10, y: 10, width: 10, height: 10 })
  )

  expect(pageRect.toJSON()).toEqual({
    x: 110,
    y: 60,
    width: 10,
    height: 10,
  })
})

test('should hide the layer', () => {
  const group = new Group()
  expect(group.hidden).toBe(false)

  group.hidden = true
  expect(group.hidden).toBe(true)
})

test('should lock the layer', () => {
  const group = new Group()
  expect(group.locked).toBe(false)

  group.locked = true
  expect(group.locked).toBe(true)
})

test('should change the exportFormats', () => {
  const group = new Group()
  expect(group.exportFormats.length).toEqual(0)

  group.exportFormats = [
    {
      size: '2x',
      suffix: '@2x',
    },
  ]
  expect(group.exportFormats.map((e) => e.toJSON())).toEqual([
    {
      type: 'ExportFormat',
      fileFormat: 'png',
      suffix: '@2x',
      size: '2x',
    },
  ])
})

test('should get the different parents', (_context, document) => {
  const page = document.selectedPage
  expect(page.parent).toEqual(document)
  expect(page.getParentPage()).toEqual(undefined)
  expect(page.getParentArtboard()).toBe(undefined)
  expect(page.getParentSymbolMaster()).toBe(undefined)
  expect(page.getParentShape()).toBe(undefined)

  const artboard = new Artboard({
    parent: page,
  })
  expect(artboard.parent).toEqual(page)
  expect(artboard.getParentPage()).toEqual(page)
  expect(artboard.getParentArtboard()).toBe(undefined)
  expect(artboard.getParentSymbolMaster()).toBe(undefined)
  expect(artboard.getParentShape()).toBe(undefined)

  const group = new Group({
    parent: artboard,
  })
  expect(group.parent).toEqual(artboard)
  expect(group.getParentPage()).toEqual(page)
  expect(group.getParentArtboard()).toEqual(artboard)
  expect(group.getParentSymbolMaster()).toBe(undefined)
  expect(group.getParentShape()).toBe(undefined)

  const symbolMaster = SymbolMaster.fromArtboard(artboard)
  expect(symbolMaster.parent).toEqual(page)
  expect(symbolMaster.getParentPage()).toEqual(page)
  expect(symbolMaster.getParentArtboard()).toEqual(undefined)
  expect(symbolMaster.getParentSymbolMaster()).toBe(undefined)
  expect(symbolMaster.getParentShape()).toBe(undefined)
})

test('should transform the layer', () => {
  const group = new Group()
  expect(group.transform.toJSON()).toEqual({
    rotation: 0,
    flippedHorizontally: false,
    flippedVertically: false,
  })

  group.transform.flippedHorizontally = true
  expect(group.transform.flippedHorizontally).toBe(true)

  group.transform.flippedVertically = true
  expect(group.transform.flippedVertically).toBe(true)

  group.transform = {
    rotation: 90,
    flippedHorizontally: true,
    flippedVertically: false,
  }
  expect(group.transform.toJSON()).toEqual({
    rotation: 90,
    flippedHorizontally: true,
    flippedVertically: false,
  })

  group.transform.rotation = 720
  expect(group.transform.rotation).toBe(0)
})

// Regression #39358, SketchAPI#772.
test('should return valid line rotation', () => {
  let start = CGPointMake(0, 0)
  let end = CGPointMake(200, 200)
  let path = MSPath.alloc().initWithLineFrom_to(start, end)
  let layer = MSShapePathLayer.layerWithPath(path)

  let immutableShape = new ShapePath({sketchObject: layer.immutableModelObject()})
  expect(Number(immutableShape.sketchObject.isLine())).toBe(1)
  expect(immutableShape.transform.rotation).toBe(45)
  
  immutableShape.transform.rotation = 80
  // It should not be possible to modify an immutable object.
  expect(immutableShape.transform.rotation).toBe(45)

  let shape = new ShapePath({sketchObject: layer})
  expect(Number(shape.sketchObject.isLine())).toBe(1)
  expect(shape.transform.rotation).toBe(45)

  shape.transform.rotation = 80
  expect(shape.transform.rotation).toBe(80)
  
  shape.transform.rotation = 0
  expect(shape.transform.rotation).toBeCloseTo(0)
})

test('should remove a flow from a layer', (_context, document) => {
  const artboard = new Artboard({
    name: 'Test1',
    parent: document.selectedPage,
  })
  const artboard2 = new Artboard({
    name: 'Test2',
    parent: document.selectedPage,
  })

  const rect = new Group({
    parent: artboard,
    flow: {
      targetId: artboard2.id,
    },
  })

  expect(rect.flow.targetId).toBe(artboard2.id)

  rect.flow = undefined

  expect(rect.flow).toBe(undefined)
})
