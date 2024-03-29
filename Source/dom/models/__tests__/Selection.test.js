/* globals expect, test */
import { Group, Text } from '../..'

test('an empty document should have an empty selection', (_context, document) => {
  expect(document.selectedLayers.isEmpty).toBe(true)
})

test('should clear the selection', (_context, document) => {
  const group = new Group({
    parent: document.selectedPage,
    selected: true,
  })
  const selection = document.selectedLayers
  // check that a selection can be logged
  log(selection)
  expect(group.selected).toBe(true)
  expect(selection.isEmpty).toBe(false)
  selection.clear()
  expect(group.selected).toBe(false)
  expect(selection.isEmpty).toBe(true)
})

test('should change the selection', (_context, document) => {
  const group = new Group({
    parent: document.selectedPage,
    selected: true,
  })
  const selection = document.selectedLayers
  // check that a selection can be logged
  log(selection)
  expect(group.selected).toBe(true)
  expect(selection.isEmpty).toBe(false)
  selection.layers = []
  expect(group.selected).toBe(false)
  expect(selection.isEmpty).toBe(true)
})

test('should return the length without wrapping all the object', (_context, document) => {
  // eslint-disable-next-line
  const group = new Group({
    parent: document.selectedPage,
    selected: true,
  })
  // eslint-disable-next-line
  const text = new Text({
    parent: document.selectedPage,
    selected: true,
  })
  const selection = document.selectedLayers

  expect(selection.length).toBe(2)
})

test('should be able to go through the layers', (_context, document) => {
  const group = new Group({
    parent: document.selectedPage,
    selected: true,
  })
  // eslint-disable-next-line
  const text = new Text({
    parent: document.selectedPage,
    selected: true,
  })
  const selection = document.selectedLayers

  let iterations = 0
  let groups = 0
  selection.layers.forEach((layer) => {
    iterations += 1
    if (layer.isEqual(group)) {
      groups += 1
    }
  })
  expect(iterations).toBe(2)
  expect(groups).toBe(1)
})

test('should define convenience array methods', (_context, document) => {
  // eslint-disable-next-line
  const group = new Group({
    parent: document.selectedPage,
    selected: true,
  })
  // eslint-disable-next-line
  const text = new Text({
    parent: document.selectedPage,
    selected: true,
  })
  const selection = document.selectedLayers

  expect(selection.forEach).toBeDefined()
  expect(selection.map).toBeDefined()
  expect(selection.reduce).toBeDefined()
})
