/* globals expect */
import { Group } from '../Group'
import { Rectangle } from '../../Rectangle'

export const tests = {
  testName(context, document) {
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
  },

  testFrame() {
    const frame = new Rectangle(10, 10, 20, 20)
    const group = new Group({ frame })
    expect(group.frame).toEqual(frame)
    const newFrame = new Rectangle(10, 10, 20, 20)
    group.frame = newFrame
    expect(group.frame).toEqual(newFrame)
  },

  testDuplicate(context, document) {
    const page = document.selectedPage
    const group = new Group({ parent: page })
    expect(page.layers.length).toBe(1)
    const result = group.duplicate()
    expect(page.layers.length).toBe(2)
    expect(result.type).toBe('Group')
  },

  testRemove(context, document) {
    const page = document.selectedPage
    const group = new Group({
      parent: page,
    })
    expect(page.layers.length).toBe(1)
    const result = group.remove()
    expect(page.layers.length).toBe(0)
    expect(result.sketchObject).toBe(group.sketchObject)
  },

  testSelection(context, document) {
    const page = document.selectedPage
    const group = new Group({
      parent: page,
    })

    // start with nothing selected
    expect(page.selectedLayers.isEmpty).toBe(true)

    // select a layer
    let result = group.select()
    expect(page.selectedLayers.isEmpty).toBe(false)
    expect(result.sketchObject).toBe(group.sketchObject)

    // deselect it - should go back to nothing selected
    result = group.deselect()
    expect(page.selectedLayers.isEmpty).toBe(true)
    expect(result.sketchObject).toBe(group.sketchObject)

    // select one layer then another - only the last should be selected
    const group2 = new Group({
      parent: page,
    })
    group.select()
    group2.select()
    expect(page.selectedLayers.length).toBe(1)

    // add a second layer to the selection - both should be selected
    result = group.addToSelection()
    expect(page.selectedLayers.length).toBe(2)
    expect(result.sketchObject).toBe(group.sketchObject)
  },

  testParent(context, document) {
    const page = document.selectedPage
    const group = new Group({
      parent: page,
    })
    expect(group.parent.sketchObject).toBe(page.sketchObject)

    const group2 = new Group()
    group2.parent = page
    expect(group2.parent.sketchObject).toBe(page.sketchObject)
  },

  testOrdering(context, document) {
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
  },
}
