/* globals expect */
import { Group } from '../Group'

export const tests = {
  testSelectedLayers(context, document) {
    const selection = document.selectedLayers
    expect(selection.isEmpty).toBe(true)

    const page = document.selectedPage
    const group = new Group({ parent: page, name: 'Test' })
    group.select()

    expect(selection.isEmpty).toBe(false)
  },

  testIsPage(context, document) {
    const page = document.selectedPage
    expect(page.type).toBe('Page')
  },
}
