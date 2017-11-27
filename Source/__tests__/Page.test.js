import { assert, assertEqual, assertFalse, assertTrue } from './assert'

export const PageTests = {
  tests: {
    testSelectedLayers(context, document) {
      const selection = document.selectedLayers
      assert(selection.isEmpty, 'should have an empty selection')

      const page = document.selectedPage
      const group = page.newGroup({ name: 'Test' })
      group.select()

      assert(!selection.isEmpty, 'should no longer have an empty selection')
    },

    testLayerWithID(context, document) {
      const page = document.selectedPage
      const group = page.newGroup({ name: 'Test' })
      const { id } = group
      const found = document.layerWithID(id)
      assertEqual(group.sketchObject, found.sketchObject)
    },

    testIsPage(context, document) {
      const page = document.selectedPage
      const image = page.newImage()
      assertTrue(page.isPage)
      assertFalse(image.isPage)
    },
  },
}
