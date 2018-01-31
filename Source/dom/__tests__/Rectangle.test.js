/* globals expect, test */
import { Rectangle } from '../Rectangle'

test('should create a rectangle', () => {
  const r = new Rectangle(1, 2, 3, 4)
  // check that a rectangle can be logged
  log(r)
  expect(r.x).toBe(1)
  expect(r.y).toBe(2)
  expect(r.width).toBe(3)
  expect(r.height).toBe(4)
})

test('should create a rectangle using an object', () => {
  const r = new Rectangle({ x: 1, y: 2, width: 3, height: 4 })
  expect(r.x).toBe(1)
  expect(r.y).toBe(2)
  expect(r.width).toBe(3)
  expect(r.height).toBe(4)
})

test('should create a rectangle using another rectangle', () => {
  const r2 = new Rectangle({ x: 1, y: 2, width: 3, height: 4 })
  const r = new Rectangle(r2)
  expect(r.x).toBe(1)
  expect(r.y).toBe(2)
  expect(r.width).toBe(3)
  expect(r.height).toBe(4)
})

test('should offset a rectangle', () => {
  const r = new Rectangle(1, 2, 3, 4)
  r.offset(10, 10)
  expect(r.x).toBe(11)
  expect(r.y).toBe(12)
  expect(r.width).toBe(3)
  expect(r.height).toBe(4)
})

test('should return a CGRect', () => {
  const r = new Rectangle(1, 2, 3, 4)
  const c = r.asCGRect()
  expect(parseInt(c.origin.x, 10)).toBe(1)
  expect(parseInt(c.origin.y, 10)).toBe(2)
  expect(parseInt(c.size.width, 10)).toBe(3)
  expect(parseInt(c.size.height, 10)).toBe(4)
})
