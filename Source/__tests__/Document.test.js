import { assertEqual, assert } from './assert'

import { Group } from '../Group'

export const DocumentTests = {
  tests: {
    testPages(context, document) {
      const { pages } = document
      assertEqual(pages.length, 1)
      assertEqual(pages[0].sketchObject, document.selectedPage.sketchObject)
    },

    testSelectedLayers(context, document) {
      const selection = document.selectedLayers
      assert(selection.isEmpty, 'should have an empty selection')

      const page = document.selectedPage
      const group = new Group({ name: 'Test', parent: page })
      group.select()

      assert(!selection.isEmpty, 'should no longer have an empty selection')
    },

    testLayerWithID(context, document) {
      const page = document.selectedPage
      const group = new Group({ name: 'Test', parent: page })
      const { id } = group
      const found = document.layerWithID(id)
      assertEqual(group.sketchObject, found.sketchObject)
    },
  },
}
