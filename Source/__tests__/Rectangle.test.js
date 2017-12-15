/* globals expect */
import { Rectangle } from '../Rectangle'

export const tests = {
  testConstructor() {
    const r = new Rectangle(1, 2, 3, 4)
    expect(r.x).toBe(1)
    expect(r.y).toBe(2)
    expect(r.width).toBe(3)
    expect(r.height).toBe(4)
  },

  testOffset() {
    const r = new Rectangle(1, 2, 3, 4)
    r.offset(10, 10)
    expect(r.x).toBe(11)
    expect(r.y).toBe(12)
    expect(r.width).toBe(3)
    expect(r.height).toBe(4)
  },

  testCGRect() {
    const r = new Rectangle(1, 2, 3, 4)
    const c = r.asCGRect()
    expect(parseInt(c.origin.x, 10)).toBe(1)
    expect(parseInt(c.origin.y, 10)).toBe(2)
    expect(parseInt(c.size.width, 10)).toBe(3)
    expect(parseInt(c.size.height, 10)).toBe(4)
  },
}
