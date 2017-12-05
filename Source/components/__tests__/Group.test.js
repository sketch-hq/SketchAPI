import * as assert from 'proclaim'

import { Group } from '../Group'
import { Text } from '../Text'
import { Artboard } from '../Artboard'
import { Rectangle } from '../../Rectangle'

export const GroupTests = {
  tests: {
    testIterate(context, document) {
      const page = document.selectedPage
      const group = new Group({ parent: page })
      const text = new Text({ parent: page }) // eslint-disable-line

      let iterations = 0
      let groups = 0
      page.iterate(layer => {
        iterations += 1
        if (layer.sketchObject == group.sketchObject) {
          groups += 1
        }
      })
      assert.strictEqual(iterations, 2)
      assert.strictEqual(groups, 1)
    },

    testIterateWithFilter(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      page.newText()

      let iterations = 0
      let groups = 0
      page.iterateWithFilter('isGroup', layer => {
        iterations += 1
        if (layer.sketchObject == group.sketchObject) {
          groups += 1
        }
      })
      assert.strictEqual(iterations, 1)
      assert.strictEqual(groups, 1)
    },

    testPageToLocalRect(context, document) {
      const page = document.selectedPage
      const group = page.newGroup({
        frame: new Rectangle(100, 100, 100, 100),
      })
      const local = group.pageRectToLocalRect(new Rectangle(125, 75, 50, 200))
      assert.deepEqual(local, new Rectangle(25, -25, 50, 200))
    },

    testAdjustToFit(context, document) {
      const page = document.selectedPage
      const group = page.newGroup({
        frame: new Rectangle(100, 100, 100, 100),
      })
      group.newShape({ frame: new Rectangle(50, 50, 50, 50) })
      group.adjustToFit()
      assert.deepEqual(group.frame, new Rectangle(150, 150, 50, 50))
    },

    testIsGroup(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      const text = page.newText()
      const artboard = page.newArtboard()
      assert.strictEqual(group.isGroup, true)
      assert.strictEqual(text.isGroup, false)
      assert.strictEqual(page.isGroup, true) // pages are also groups
      assert.strictEqual(artboard.isGroup, true) // artboards are also groups

      const group2 = new Group({ parent: page })
      const text2 = new Text({ parent: page })
      const artboard2 = new Artboard({ parent: page })
      assert.strictEqual(group2.isGroup, true)
      assert.strictEqual(text2.isGroup, false)
      assert.strictEqual(artboard2.isGroup, true) // artboards are also groups
    },
  },
}
