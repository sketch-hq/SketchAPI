/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import { Group, Text, Shape, Rectangle, SmartLayout } from '../..'

test('should return the layers and can iterate through them', (context, document) => {
  const page = document.selectedPage
  const group = new Group({ parent: page })
  const text = new Text({ parent: page }) // eslint-disable-line

  let iterations = 0
  let groups = 0
  page.layers.forEach((layer) => {
    iterations += 1
    if (layer.isEqual(group)) {
      groups += 1
    }
  })
  expect(iterations).toBe(2)
  expect(groups).toBe(1)
})

test('should transform a rectangle in page coords to local coords', (context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
    frame: new Rectangle(100, 100, 100, 100),
  })

  const local = group.pageRectToLocalRect(new Rectangle(125, 75, 50, 200))
  expect(local).toEqual(new Rectangle(25, -25, 50, 200))
})

test('should adjust the frame to fit its layers', (context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
    frame: new Rectangle(100, 100, 100, 100),
  })
  const shape = new Shape({
    parent: group,
    frame: new Rectangle(50, 50, 50, 50),
  })
  group.adjustToFit()
  expect(shape.parent).toEqual(group)
  expect(group.frame).toEqual(new Rectangle(150, 150, 50, 50))
})

test('should create a group', (context, document) => {
  const page = document.selectedPage

  const group = new Group({ parent: page })

  expect(group.type).toBe('Group')
  canBeLogged(group, Group)
})

test('should create a group with some layers', (context, document) => {
  const page = document.selectedPage

  const group = new Group({
    parent: page,
    layers: [
      {
        type: 'Text',
        text: 'hello world',
      },
    ],
  })
  expect(group.layers[0].type).toBe('Text')
})

test('should add a layer to a group', (context, document) => {
  const page = document.selectedPage

  const group = new Group({
    parent: page,
    layers: [
      {
        type: 'Text',
        text: 'hello world',
      },
    ],
  })
  expect(group.layers.length).toBe(1)

  group.layers = group.layers.concat({
    type: 'Text',
    text: 'hello world',
  })
  expect(group.layers.length).toBe(2)

  group.layers.push({
    type: 'Text',
    text: 'hello world',
  })
  expect(group.layers.length).toBe(3)
})

test('should expose a smartLayout getter/setter', (context, document) => {
  const page = document.selectedPage
  const group = new Group({
    parent: page,
    layers: [],
  })

  // returns null by default
  expect(group.smartLayout).toBe(null)
  expect(group._object.groupLayout().isKindOfClass(MSFreeformGroupLayout)).toBe(
    1
  )

  // can set to a value
  group.smartLayout = SmartLayout.TopToBottom
  expect(group.smartLayout).toBe(SmartLayout.TopToBottom)
  expect(group._object.groupLayout().isKindOfClass(MSInferredGroupLayout)).toBe(
    1
  )
  expect(group._object.groupLayout().axis()).toBe(1)
  expect(group._object.groupLayout().layoutAnchor()).toBe(0)

  // can clear the value
  group.smartLayout = null
  expect(group._object.groupLayout().isKindOfClass(MSFreeformGroupLayout)).toBe(
    1
  )
  expect(group.smartLayout).toBe(null)
})
