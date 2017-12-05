import * as assert from 'proclaim'

import { Text } from '../Text'
import { Rectangle } from '../../Rectangle'

export const TextTests = {
  tests: {
    testIsText(context, document) {
      const page = document.selectedPage
      const text = page.newText()
      assert.strictEqual(text.isText, true)
      assert.strictEqual(page.isText, false)
    },

    testText(context, document) {
      const page = document.selectedPage
      const text = page.newText({ text: 'blah' })
      assert.strictEqual(text.text, 'blah')
      text.text = 'doodah'
      assert.strictEqual(text.text, 'doodah')
    },

    testAdjustToFit(context, document) {
      const page = document.selectedPage
      const text = page.newText({
        text: 'blah',
        frame: new Rectangle(10, 10, 1000, 1000),
      })
      text.adjustToFit()
      assert.deepEqual(text.frame, new Rectangle(10, 10, 23, 14))
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
        assert.strictEqual(text.alignment, key)

        // test setting by value
        text.alignment = Text.Alignment[key]
        assert.strictEqual(text.alignment, key)
      }
    },
  },
}
