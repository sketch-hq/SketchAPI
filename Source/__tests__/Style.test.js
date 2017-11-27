import { assertEqual } from './assert'

import { Style } from '../Style'

export const StyleTests = {
  tests: {
    testBorders() {
      const style = new Style()
      style.borders = ['#11223344', '#1234']
      assertEqual(style.sketchObject.borders().count(), 2)
    },

    testFills() {
      const style = new Style()
      style.borders = ['#11223344', '#1234']
      assertEqual(style.sketchObject.borders().count(), 2)
    },
  },
}
