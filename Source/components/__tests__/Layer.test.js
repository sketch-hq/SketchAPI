/* globals expect */

import { Rectangle } from '../../Rectangle'

export const tests = {
  testName(context, document) {
    const page = document.selectedPage
    page.name = 'This is a page'
    expect(page.name).toBe('This is a page')
    const group = page.newGroup({ name: 'blah' })
    expect(group.name).toBe('blah')
    const group2 = page.newGroup()
    expect(group2.name).toBe('Group')
  },

  testFrame(context, document) {
    const page = document.selectedPage
    const frame = new Rectangle(10, 10, 20, 20)
    const group = page.newGroup({ frame })
    expect(group.frame).toEqual(frame)
  },

  testDuplicate(context, document) {
    const page = document.selectedPage
    const group = page.newGroup()
    expect(page.sketchObject.layers().count()).toBe(1)
    group.duplicate()
    expect(page.sketchObject.layers().count()).toBe(2)
  },

  testRemove(context, document) {
    const page = document.selectedPage
    const group = page.newGroup()
    expect(page.sketchObject.layers().count()).toBe(1)
    group.remove()
    expect(page.sketchObject.layers().count()).toBe(0)
  },

  testSelection(context, document) {
    const page = document.selectedPage
    const group = page.newGroup()

    // start with nothing selected
    expect(page.selectedLayers.isEmpty).toBe(true)

    // select a layer
    group.select()
    expect(page.selectedLayers.isEmpty).toBe(false)

    // deselect it - should go back to nothing selected
    group.deselect()
    expect(page.selectedLayers.isEmpty).toBe(true)

    // select one layer then another - only the last should be selected
    const group2 = page.newGroup()
    group.select()
    group2.select()
    expect(page.selectedLayers.length).toBe(1)

    // add a second layer to the selection - both should be selected
    group.addToSelection()
    expect(page.selectedLayers.length).toBe(2)
  },

  testContainer(context, document) {
    const page = document.selectedPage
    const group = page.newGroup()
    expect(group.container.sketchObject).toBe(page.sketchObject)
  },

  testOrdering(context, document) {
    const page = document.selectedPage
    const group1 = page.newGroup()
    const group2 = page.newGroup()
    const group3 = page.newGroup()
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
  },
}
