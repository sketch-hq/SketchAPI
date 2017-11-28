import * as expect from 'expect'

export const SelectionTests = {
  tests: {
    testEmpty(context, document) {
      expect(document.selectedLayers.isEmpty).toBe(true)
    },

    testClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers
      expect(selection.isEmpty).toBe(false)
      selection.clear()
      expect(selection.isEmpty).toBe(true)
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
      expect(iterations).toBe(2)
      expect(groups).toBe(1)
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
      expect(iterations).toBe(1)
      expect(groups).toBe(1)
    },

    testIterateThenClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers

      let iterations = 0
      expect(selection.isEmpty).toBe(false)
      selection.iterateThenClear(() => {
        iterations += 1
      })
      expect(iterations).toBe(1)
      expect(selection.isEmpty).toBe(true)
    },

    testIterateWithFilterThenClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers

      let iterations = 0
      expect(selection.isEmpty).toBe(false)
      selection.iterateWithFilterThenClear('isText', () => {
        iterations += 1
      })
      expect(iterations).toBe(0)
      expect(selection.isEmpty).toBe(true)
    },
  },
}
