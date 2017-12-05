import * as assert from 'proclaim'

export const ShapeTests = {
  tests: {
    testIsShape(context, document) {
      const page = document.selectedPage
      const shape = page.newShape()
      assert.strictEqual(shape.isShape, true)
      assert.strictEqual(page.isShape, false)
    },
  },
}
