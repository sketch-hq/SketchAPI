/* globals expect */
import { Shape } from '../Shape'

export const tests = {
  testIsShape() {
    const shape = new Shape()
    expect(shape.type).toBe('Shape')
  },
}
