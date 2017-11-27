import { assertEqual, assertTrue, assertFalse } from './assert'

import { Rectangle } from '../Rectangle'

export const LayerTests = {
  tests: {
    testName(context, document) {
      const page = document.selectedPage
      page.name = 'This is a page'
      assertEqual(page.name, 'This is a page')
      const group = page.newGroup({ name: 'blah' })
      assertEqual(group.name, 'blah')
      const group2 = page.newGroup()
      assertEqual(group2.name, 'Group')
    },

    testFrame(context, document) {
      const page = document.selectedPage
      const frame = new Rectangle(10, 10, 20, 20)
      const group = page.newGroup({ frame })
      assertEqual(group.frame, frame)
    },

    testDuplicate(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      assertEqual(page.sketchObject.layers().count(), 1)
      group.duplicate()
      assertEqual(page.sketchObject.layers().count(), 2)
    },

    testRemove(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      assertEqual(page.sketchObject.layers().count(), 1)
      group.remove()
      assertEqual(page.sketchObject.layers().count(), 0)
    },

    testSelection(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()

      // start with nothing selected
      assertTrue(page.selectedLayers.isEmpty)

      // select a layer
      group.select()
      assertFalse(page.selectedLayers.isEmpty)

      // deselect it - should go back to nothing selected
      group.deselect()
      assertTrue(page.selectedLayers.isEmpty)

      // select one layer then another - only the last should be selected
      const group2 = page.newGroup()
      group.select()
      group2.select()
      assertEqual(page.selectedLayers.length, 1)

      // add a second layer to the selection - both should be selected
      group.addToSelection()
      assertEqual(page.selectedLayers.length, 2)
    },

    testContainer(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      assertEqual(group.container.sketchObject, page.sketchObject)
    },

    testOrdering(context, document) {
      const page = document.selectedPage
      const group1 = page.newGroup()
      const group2 = page.newGroup()
      const group3 = page.newGroup()
      assertEqual(group1.index, 0)
      assertEqual(group2.index, 1)
      assertEqual(group3.index, 2)

      group1.moveToFront()
      assertEqual(group2.index, 0)
      assertEqual(group3.index, 1)
      assertEqual(group1.index, 2)

      group3.moveToBack()
      assertEqual(group3.index, 0)
      assertEqual(group2.index, 1)
      assertEqual(group1.index, 2)

      group2.moveForward()
      assertEqual(group3.index, 0)
      assertEqual(group1.index, 1)
      assertEqual(group2.index, 2)

      group1.moveBackward()
      assertEqual(group1.index, 0)
      assertEqual(group3.index, 1)
      assertEqual(group2.index, 2)
    },
  },
}
