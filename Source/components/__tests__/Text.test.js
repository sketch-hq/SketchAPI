/* globals expect */

import { Text } from '../Text'
import { Rectangle } from '../../Rectangle'

export const tests = {
  testIsText(context, document) {
    const page = document.selectedPage
    const text = page.newText()
    expect(text.isText).toBe(true)
    expect(page.isText).toBe(false)
  },

  testText(context, document) {
    const page = document.selectedPage
    const text = page.newText({ text: 'blah' })
    expect(text.text).toBe('blah')
    text.text = 'doodah'
    expect(text.text).toBe('doodah')
  },

  testAdjustToFit(context, document) {
    const page = document.selectedPage
    const text = page.newText({
      text: 'blah',
      frame: new Rectangle(10, 10, 1000, 1000),
    })
    text.adjustToFit()
    expect(text.frame).toEqual(new Rectangle(10, 10, 23, 14))
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
      expect(text.alignment).toBe(key)

      // test setting by value
      text.alignment = Text.Alignment[key]
      expect(text.alignment).toBe(key)
    }
  },
}
