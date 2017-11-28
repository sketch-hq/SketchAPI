import * as expect from 'expect'

export const ShapeTests = {
  tests: {
    testIsShape(context, document) {
      const page = document.selectedPage
      const shape = page.newShape()
      expect(shape.isShape).toBe(true)
      expect(page.isShape).toBe(false)
    },
  },
}
