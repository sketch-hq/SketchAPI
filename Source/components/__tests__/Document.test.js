import * as assert from 'proclaim'

import { Group } from '../Group'

export const DocumentTests = {
  tests: {
    testPages(context, document) {
      const { pages } = document
      assert.strictEqual(pages.length, 1)
      assert.strictEqual(
        pages[0].sketchObject,
        document.selectedPage.sketchObject
      )
    },

    testSelectedLayers(context, document) {
      const selection = document.selectedLayers
      assert.strictEqual(selection.isEmpty, true)

      const page = document.selectedPage
      const group = new Group({ name: 'Test', parent: page })
      group.select()

      assert.strictEqual(selection.isEmpty, false)
    },

    testLayerWithID(context, document) {
      const page = document.selectedPage
      const group = new Group({ name: 'Test', parent: page })
      const { id } = group
      const found = document.layerWithID(id)
      assert.strictEqual(group.sketchObject, found.sketchObject)
    },
  },
}
