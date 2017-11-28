import * as expect from 'expect'

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
      expect(iterations).toBe(2)
      expect(groups).toBe(1)
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
      expect(iterations).toBe(1)
      expect(groups).toBe(1)
    },

    testPageToLocalRect(context, document) {
      const page = document.selectedPage
      const group = page.newGroup({
        frame: new Rectangle(100, 100, 100, 100),
      })
      const local = group.pageRectToLocalRect(new Rectangle(125, 75, 50, 200))
      expect(local).toEqual(new Rectangle(25, -25, 50, 200))
    },

    testAdjustToFit(context, document) {
      const page = document.selectedPage
      const group = page.newGroup({
        frame: new Rectangle(100, 100, 100, 100),
      })
      group.newShape({ frame: new Rectangle(50, 50, 50, 50) })
      group.adjustToFit()
      expect(group.frame).toEqual(new Rectangle(150, 150, 50, 50))
    },

    testIsGroup(context, document) {
      const page = document.selectedPage
      const group = page.newGroup()
      const text = page.newText()
      const artboard = page.newArtboard()
      expect(group.isGroup).toBe(true)
      expect(text.isGroup).toBe(false)
      expect(page.isGroup).toBe(true) // pages are also groups
      expect(artboard.isGroup).toBe(true) // artboards are also groups

      const group2 = new Group({ parent: page })
      const text2 = new Text({ parent: page })
      const artboard2 = new Artboard({ parent: page })
      expect(group2.isGroup).toBe(true)
      expect(text2.isGroup).toBe(false)
      expect(artboard2.isGroup).toBe(true) // artboards are also groups
    },
  },
}
