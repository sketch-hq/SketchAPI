import { assertTrue, assertFalse } from './assert'

export const ShapeTests = {
  tests: {
    testIsShape(context, document) {
      const page = document.selectedPage
      const shape = page.newShape()
      assertTrue(shape.isShape)
      assertFalse(page.isShape)
    },
  },
}
