/* globals expect, test */
import { Group } from '../Group'
import { Rectangle } from '../../Rectangle'

test('should set the name of the layer', (context, document) => {
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

test(
  'should duplicate the layer and add it as a sibling',
  (context, document) => {
    const page = document.selectedPage
    const group = new Group({ parent: page })
    expect(page.layers.length).toBe(1)
    const result = group.duplicate()
    expect(page.layers.length).toBe(2)
    expect(result.type).toBe('Group')
  }
)

test('should remove the layer from its parent', (context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
  })
  expect(page.layers.length).toBe(1)
  const result = group.remove()
  expect(page.layers.length).toBe(0)
  expect(result).toEqual(group)
})

test('should select the layer', (context, document) => {
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

test('should be able to add the layer to a group', (context, document) => {
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

test('should reorder the layers', (context, document) => {
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

test('should convert rect to different coord system', (context, document) => {
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
