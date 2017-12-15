/* globals expect */
import { Group } from '../Group'
import { Page } from '../Page'

export const tests = {
  'should return a Selection with the selected layers of the page': (
    context,
    document
  ) => {
    const page = document.selectedPage
    const selection = page.selectedLayers
    expect(selection.isEmpty).toBe(true)

    const group = new Group({ parent: page, name: 'Test', selected: true })

    expect(group.selected).toBe(true)
    expect(selection.isEmpty).toBe(false)
  },

  'should create a page': (context, document) => {
    const page = new Page({ parent: document })
    expect(page.type).toBe('Page')
    expect(document.pages[1]).toWrapSameAs(page)
  },
}
