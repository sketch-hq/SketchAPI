import * as assert from 'proclaim'

export const PageTests = {
  tests: {
    testSelectedLayers(context, document) {
      const selection = document.selectedLayers
      assert.strictEqual(selection.isEmpty, true)

      const page = document.selectedPage
      const group = page.newGroup({ name: 'Test' })
      group.select()

      assert.strictEqual(selection.isEmpty, false)
    },

    testLayerWithID(context, document) {
      const page = document.selectedPage
      const group = page.newGroup({ name: 'Test' })
      const { id } = group
      const found = document.layerWithID(id)
      assert.strictEqual(group.sketchObject, found.sketchObject)
    },

    testIsPage(context, document) {
      const page = document.selectedPage
      const image = page.newImage()
      assert.strictEqual(page.isPage, true)
      assert.strictEqual(image.isPage, false)
    },
  },
}
