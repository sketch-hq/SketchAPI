/* globals expect */

import { Group } from '../Group'

export const tests = {
  'should return the pages': (context, document) => {
    const { pages } = document
    expect(pages.length).toBe(1)
    expect(pages[0]).toWrapSameAs(document.selectedPage)
  },

  'should return the selected layers': (context, document) => {
    const selection = document.selectedLayers
    expect(selection.isEmpty).toBe(true)

    const page = document.selectedPage
    const group = new Group({ name: 'Test', parent: page, selected: true })

    expect(group.selected).toBe(true)
    expect(selection.isEmpty).toBe(false)
  },

  'should look for a layer by its id': (context, document) => {
    const page = document.selectedPage
    const group = new Group({ name: 'Test', parent: page })
    const { id } = group
    const found = document.getLayerWithID(id)
    expect(group).toWrapSameAs(found)
  },
}
