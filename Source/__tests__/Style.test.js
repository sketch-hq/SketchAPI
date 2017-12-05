import * as assert from 'proclaim'

import { Style } from '../Style'

export const StyleTests = {
  tests: {
    testBorders() {
      const style = new Style()
      style.borders = ['#11223344', '#1234']
      assert.strictEqual(style.sketchObject.borders().count(), 2)
    },

    testFills() {
      const style = new Style()
      style.borders = ['#11223344', '#1234']
      assert.strictEqual(style.sketchObject.borders().count(), 2)
    },
  },
}
