import * as assert from 'proclaim'

import { Rectangle } from '../../Rectangle'

export const LayerTests = {
  tests: {
    testName(context, document) {
      const page = document.selectedPage
      page.name = 'This is a page'
      assert.strictEqual(page.name, 'This is a page')
      const group = page.newGroup({ name: 'blah' })
      assert.strictEqual(group.name, 'blah')
      const group2 = page.newGroup()
      assert.strictEqual(group2.name, 'Group')
    },

    testFrame(context, document) {
      const page = document.selectedPage
      const frame = new Rectangle(10, 10, 20, 20)
      const group = page.newGroup({ frame })
      assert.deepEqual(group.frame, frame)
    },

    testDuplicate(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      assert.strictEqual(page.sketchObject.layers().count(), 1)
      group.duplicate()
      assert.strictEqual(page.sketchObject.layers().count(), 2)
    },

    testRemove(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      assert.strictEqual(page.sketchObject.layers().count(), 1)
      group.remove()
      assert.strictEqual(page.sketchObject.layers().count(), 0)
    },

    testSelection(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()

      // start with nothing selected
      assert.strictEqual(page.selectedLayers.isEmpty, true)

      // select a layer
      group.select()
      assert.strictEqual(page.selectedLayers.isEmpty, false)

      // deselect it - should go back to nothing selected
      group.deselect()
      assert.strictEqual(page.selectedLayers.isEmpty, true)

      // select one layer then another - only the last should be selected
      const group2 = page.newGroup()
      group.select()
      group2.select()
      assert.strictEqual(page.selectedLayers.length, 1)

      // add a second layer to the selection - both should be selected
      group.addToSelection()
      assert.strictEqual(page.selectedLayers.length, 2)
    },

    testContainer(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      assert.strictEqual(group.container.sketchObject, page.sketchObject)
    },

    testOrdering(context, document) {
      const page = document.selectedPage
      const group1 = page.newGroup()
      const group2 = page.newGroup()
      const group3 = page.newGroup()
      assert.strictEqual(group1.index, 0)
      assert.strictEqual(group2.index, 1)
      assert.strictEqual(group3.index, 2)

      group1.moveToFront()
      assert.strictEqual(group2.index, 0)
      assert.strictEqual(group3.index, 1)
      assert.strictEqual(group1.index, 2)

      group3.moveToBack()
      assert.strictEqual(group3.index, 0)
      assert.strictEqual(group2.index, 1)
      assert.strictEqual(group1.index, 2)

      group2.moveForward()
      assert.strictEqual(group3.index, 0)
      assert.strictEqual(group1.index, 1)
      assert.strictEqual(group2.index, 2)

      group1.moveBackward()
      assert.strictEqual(group1.index, 0)
      assert.strictEqual(group3.index, 1)
      assert.strictEqual(group2.index, 2)
    },
  },
}
