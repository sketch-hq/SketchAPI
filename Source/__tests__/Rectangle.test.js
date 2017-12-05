import * as assert from 'proclaim'

import { Rectangle } from '../Rectangle'

export const RectangleTests = {
  tests: {
    testConstructor() {
      const r = new Rectangle(1, 2, 3, 4)
      assert.strictEqual(r.x, 1)
      assert.strictEqual(r.y, 2)
      assert.strictEqual(r.width, 3)
      assert.strictEqual(r.height, 4)
    },

    testOffset() {
      const r = new Rectangle(1, 2, 3, 4)
      r.offset(10, 10)
      assert.strictEqual(r.x, 11)
      assert.strictEqual(r.y, 12)
      assert.strictEqual(r.width, 3)
      assert.strictEqual(r.height, 4)
    },

    testCGRect() {
      const r = new Rectangle(1, 2, 3, 4)
      const c = r.asCGRect()
      assert.strictEqual(parseInt(c.origin.x, 10), 1)
      assert.strictEqual(parseInt(c.origin.y, 10), 2)
      assert.strictEqual(parseInt(c.size.width, 10), 3)
      assert.strictEqual(parseInt(c.size.height, 10), 4)
    },
  },
}
