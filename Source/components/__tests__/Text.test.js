/* globals expect */

import { Text, TextAlignmentMap, TextLineSpacingBehaviourMap } from '../Text'
import { Rectangle } from '../../Rectangle'

export const tests = {
  'should create a Text layer': () => {
    const text = new Text()
    expect(text.type).toBe('Text')
  },

  'should be able to change the text value': () => {
    const text = new Text({ text: 'blah' })
    expect(text.text).toBe('blah')
    text.text = 'doodah'
    expect(text.text).toBe('doodah')
  },

  'should adjust its size to the string with `adjustToFit`': () => {
    const text = new Text({
      text: 'blah',
      frame: new Rectangle(10, 10, 1000, 1000),
    })
    text.adjustToFit()
    expect(text.frame).toEqual(new Rectangle(10, 10, 23, 14))
  },

  'should change the text alignment': () => {
    const text = new Text({
      text: 'blah',
      frame: new Rectangle(10, 10, 1000, 1000),
    })

    // default to left
    expect(text.alignment).toBe(Text.Alignment.left)

    // eslint-disable-next-line guard-for-in
    Object.keys(Text.Alignment).forEach(key => {
      // test setting by name
      text.alignment = key
      expect(text.alignment).toBe(Text.Alignment[key])

      // test setting by value
      text.alignment = TextAlignmentMap[key]
      expect(text.alignment).toBe(Text.Alignment[key])
    })
  },

  'should change the line spacing behavior': () => {
    const text = new Text({
      text: 'blah',
      frame: new Rectangle(10, 10, 1000, 1000),
    })

    // default to left
    expect(text.lineSpacing).toBe(Text.LineSpacing.constantBaseline)

    // eslint-disable-next-line guard-for-in
    Object.keys(Text.LineSpacing).forEach(key => {
      // test setting by name
      text.lineSpacing = key
      expect(text.lineSpacing).toBe(Text.LineSpacing[key])

      // test setting by value
      text.lineSpacing = TextLineSpacingBehaviourMap[key]
      expect(text.lineSpacing).toBe(Text.LineSpacing[key])
    })
  },
}
