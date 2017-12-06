/* globals expect */

export const tests = {
  testSelectedLayers(context, document) {
    const selection = document.selectedLayers
    expect(selection.isEmpty).toBe(true)

    const page = document.selectedPage
    const group = page.newGroup({ name: 'Test' })
    group.select()

    expect(selection.isEmpty).toBe(false)
  },

  testLayerWithID(context, document) {
    const page = document.selectedPage
    const group = page.newGroup({ name: 'Test' })
    const { id } = group
    const found = document.layerWithID(id)
    expect(group.sketchObject).toBe(found.sketchObject)
  },

  testIsPage(context, document) {
    const page = document.selectedPage
    const image = page.newImage()
    expect(page.isPage).toBe(true)
    expect(image.isPage).toBe(false)
  },
}
