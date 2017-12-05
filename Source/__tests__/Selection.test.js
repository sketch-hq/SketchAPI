import * as assert from 'proclaim'

export const SelectionTests = {
  tests: {
    testEmpty(context, document) {
      assert.ok(document.selectedLayers.isEmpty)
    },

    testClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers
      assert.strictEqual(selection.isEmpty, false)
      selection.clear()
      assert.strictEqual(selection.isEmpty, true)
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
      assert.strictEqual(iterations, 2)
      assert.strictEqual(groups, 1)
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
      assert.strictEqual(iterations, 1)
      assert.strictEqual(groups, 1)
    },

    testIterateThenClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers

      let iterations = 0
      assert.strictEqual(selection.isEmpty, false)
      selection.iterateThenClear(() => {
        iterations += 1
      })
      assert.strictEqual(iterations, 1)
      assert.strictEqual(selection.isEmpty, true)
    },

    testIterateWithFilterThenClear(context, document) {
      const group = document.selectedPage.newGroup()
      group.select()
      const selection = document.selectedLayers

      let iterations = 0
      assert.strictEqual(selection.isEmpty, false)
      selection.iterateWithFilterThenClear('isText', () => {
        iterations += 1
      })
      assert.strictEqual(iterations, 0)
      assert.strictEqual(selection.isEmpty, true)
    },
  },
}
