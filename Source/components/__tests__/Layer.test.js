/* globals expect */
import { Group } from '../Group'
import { Rectangle } from '../../Rectangle'

export const tests = {
  'should set the name of the layer': (context, document) => {
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

  'should set the frame of the layer': () => {
    const frame = new Rectangle(10, 10, 20, 20)
    const group = new Group({ frame })
    expect(group.frame).toEqual(frame)
    const newFrame = new Rectangle(10, 10, 20, 20)
    group.frame = newFrame
    expect(group.frame).toEqual(newFrame)
  },

  'should duplicate the layer and add it as a sibling': (context, document) => {
    const page = document.selectedPage
    const group = new Group({ parent: page })
    expect(page.layers.length).toBe(1)
    const result = group.duplicate()
    expect(page.layers.length).toBe(2)
    expect(result.type).toBe('Group')
  },

  'should remove the layer from its parent': (context, document) => {
    const page = document.selectedPage
    const group = new Group({
      parent: page,
    })
    expect(page.layers.length).toBe(1)
    const result = group.remove()
    expect(page.layers.length).toBe(0)
    expect(result).toWrapSameAs(group)
  },

  'should select the layer': (context, document) => {
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
  },

  'should be able to add the layer to a group': (context, document) => {
    const page = document.selectedPage
    const group = new Group({
      parent: page,
    })
    expect(group.parent).toWrapSameAs(page)
    expect(group.parent.layers[0]).toWrapSameAs(group)

    const group2 = new Group()
    group2.parent = page
    expect(group2.parent).toWrapSameAs(page)
  },

  'should reorder the layers': (context, document) => {
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
