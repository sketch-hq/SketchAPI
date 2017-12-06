/* globals expect */

export const tests = {
  testIsShape(context, document) {
    const page = document.selectedPage
    const shape = page.newShape()
    expect(shape.isShape).toBe(true)
    expect(page.isShape).toBe(false)
  },
}
