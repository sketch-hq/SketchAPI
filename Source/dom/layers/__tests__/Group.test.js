/* globals expect, test */

import { Group, Text, Shape, Rectangle } from '../..'

test('should return the layers and can iterate through them', (context, document) => {
  const page = document.selectedPage
  const group = new Group({ parent: page })
  const text = new Text({ parent: page }) // eslint-disable-line

  let iterations = 0
  let groups = 0
  page.layers.forEach(layer => {
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
  // check that a group can be logged
  log(group)
  expect(group.type).toBe('Group')
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
