import { assertEqual } from './assert'

import { Rectangle } from '../Rectangle'

export const RectangleTests = {
  tests: {
    testConstructor() {
      const r = new Rectangle(1, 2, 3, 4)
      assertEqual(r.x, 1)
      assertEqual(r.y, 2)
      assertEqual(r.width, 3)
      assertEqual(r.height, 4)
    },

    testOffset() {
      const r = new Rectangle(1, 2, 3, 4)
      r.offset(10, 10)
      assertEqual(r.x, 11)
      assertEqual(r.y, 12)
      assertEqual(r.width, 3)
      assertEqual(r.height, 4)
    },

    testCGRect() {
      const r = new Rectangle(1, 2, 3, 4)
      const c = r.asCGRect()
      assertEqual(c.origin.x, 1)
      assertEqual(c.origin.y, 2)
      assertEqual(c.size.width, 3)
      assertEqual(c.size.height, 4)
    },
  },
}
