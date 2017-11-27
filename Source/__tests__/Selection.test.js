import { assert, assertEqual } from './assert'

export const SelectionTests = {
  tests: {
    testEmpty(context, document) {
      assert(document.selectedLayers.isEmpty, 'selection should be empty')
    },

    testClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers
      assert(!selection.isEmpty, 'selection should not be empty')
      selection.clear()
      assert(selection.isEmpty, 'selection should be empty')
    },

    testIterate(context, document) {
      const group = document.selectedPage.newGroup()
      const text = document.selectedPage.newText()
      text.select()
      group.addToSelection()
      const selection = document.selectedLayers

      let iterations = 0
      let groups = 0
      selection.iterate(layer => {
        iterations += 1
        if (layer.sketchObject == group.sketchObject) {
          groups += 1
        }
      })
      assertEqual(iterations, 2)
      assertEqual(groups, 1)
    },

    testIterateWithFilter(context, document) {
      const group = document.selectedPage.newGroup()
      const text = document.selectedPage.newText()
      text.select()
      group.addToSelection()
      const selection = document.selectedLayers

      let iterations = 0
      let groups = 0
      selection.iterateWithFilter('isGroup', layer => {
        iterations += 1
        if (layer.sketchObject == group.sketchObject) {
          groups += 1
        }
      })
      assertEqual(iterations, 1)
      assertEqual(groups, 1)
    },

    testIterateThenClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers

      let iterations = 0
      assert(!selection.isEmpty, 'selection should not be empty')
      selection.iterateThenClear(() => {
        iterations += 1
      })
      assertEqual(iterations, 1)
      assert(selection.isEmpty, 'selection should be empty')
    },

    testIterateWithFilterThenClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers

      let iterations = 0
      assert(!selection.isEmpty, 'selection should not be empty')
      selection.iterateWithFilterThenClear('isText', () => {
        iterations += 1
      })
      assertEqual(iterations, 0)
      assert(selection.isEmpty, 'selection should be empty')
    },
  },
}
