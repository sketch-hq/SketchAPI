import { assertEqual, assertFalse, assertTrue } from './assert'

import { Text } from '../Text'
import { Rectangle } from '../Rectangle'

export const TextTests = {
  tests: {
    testIsText(context, document) {
      const page = document.selectedPage
      const text = page.newText()
      assertTrue(text.isText)
      assertFalse(page.isText)
    },

    testText(context, document) {
      const page = document.selectedPage
      const text = page.newText({ text: 'blah' })
      assertEqual(text.text, 'blah')
      text.text = 'doodah'
      assertEqual(text.text, 'doodah')
    },

    testAdjustToFit(context, document) {
      const page = document.selectedPage
      const text = page.newText({
        text: 'blah',
        frame: new Rectangle(10, 10, 1000, 1000),
      })
      text.adjustToFit()
      assertEqual(text.frame, new Rectangle(10, 10, 23, 14))
    },

    testAlignment(context, document) {
      const page = document.selectedPage
      const text = page.newText({
        text: 'blah',
        frame: new Rectangle(10, 10, 1000, 1000),
      })

      // eslint-disable-next-line guard-for-in
      for (const key in Text.Alignment) {
        // test setting by name
        text.alignment = key
        assertEqual(text.alignment, key)

        // test setting by value
        text.alignment = Text.Alignment[key]
        assertEqual(text.alignment, key)
      }
    },
  },
}
