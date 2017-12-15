/* globals expect */

import { Group } from '../Group'

export const tests = {
  'should return the pages': (context, document) => {
    const { pages } = document
    expect(pages.length).toBe(1)
    expect(pages[0].sketchObject).toBe(document.selectedPage.sketchObject)
  },

  'should return the selected layers': (context, document) => {
    const selection = document.selectedLayers
    expect(selection.isEmpty).toBe(true)

    const page = document.selectedPage
    const group = new Group({ name: 'Test', parent: page })
    group.select()

    expect(selection.isEmpty).toBe(false)
  },

  'should look for a layer by its id': (context, document) => {
    const page = document.selectedPage
    const group = new Group({ name: 'Test', parent: page })
    const { id } = group
    const found = document.getLayerWithID(id)
    expect(group.sketchObject).toBe(found.sketchObject)
  },
}
