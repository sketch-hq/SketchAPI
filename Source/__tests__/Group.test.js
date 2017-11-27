import { assertEqual, assertTrue, assertFalse } from './assert'

import { Group } from '../Group'
import { Text } from '../Text'
import { Artboard } from '../Artboard'
import { Rectangle } from '../Rectangle'

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
      assertEqual(iterations, 2)
      assertEqual(groups, 1)
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
      assertEqual(iterations, 1)
      assertEqual(groups, 1)
    },

    testPageToLocalRect(context, document) {
      const page = document.selectedPage
      const group = page.newGroup({
        frame: new Rectangle(100, 100, 100, 100),
      })
      const local = group.pageRectToLocalRect(new Rectangle(125, 75, 50, 200))
      assertEqual(local, new Rectangle(25, -25, 50, 200))
    },

    testAdjustToFit(context, document) {
      const page = document.selectedPage
      const group = page.newGroup({
        frame: new Rectangle(100, 100, 100, 100),
      })
      group.newShape({ frame: new Rectangle(50, 50, 50, 50) })
      group.adjustToFit()
      const { frame } = group
      assertEqual(frame, new Rectangle(150, 150, 50, 50))
    },

    testIsGroup(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      const text = page.newText()
      const artboard = page.newArtboard()
      assertTrue(group.isGroup)
      assertFalse(text.isGroup)
      assertTrue(page.isGroup) // pages are also groups
      assertTrue(artboard.isGroup) // artboards are also groups

      const group2 = new Group({ parent: page })
      const text2 = new Text({ parent: page })
      const artboard2 = new Artboard({ parent: page })
      assertTrue(group2.isGroup)
      assertFalse(text2.isGroup)
      assertTrue(artboard2.isGroup) // artboards are also groups
    },
  },
}
