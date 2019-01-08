/* globals expect, test */
import { Point } from '../Point'

test('should create a point', () => {
  const r = new Point(1, 2)
  // check that a point can be logged
  log(r)
  expect(r.x).toBe(1)
  expect(r.y).toBe(2)
})

test('should create a point using an object', () => {
  const r = new Point({ x: 1, y: 2 })
  expect(r.x).toBe(1)
  expect(r.y).toBe(2)
})

test('should create a point using an object when x === 0 (#133)', () => {
  const r = new Point({ x: 0, y: 2 })
  expect(r.x).toBe(0)
  expect(r.y).toBe(2)
})

test('should create a point using another point', () => {
  const r2 = new Point({ x: 1, y: 2 })
  const r = new Point(r2)
  expect(r.x).toBe(1)
  expect(r.y).toBe(2)
})

test('should create a point using a CGPoint', () => {
  const r = new Point(CGPointMake(1, 2))
  expect(r.x).toBe(1)
  expect(r.y).toBe(2)
})

test('should create a point using an NSPoint', () => {
  const r = new Point(NSMakePoint(1, 2))
  expect(r.x).toBe(1)
  expect(r.y).toBe(2)
})

test('should return a CGPoint', () => {
  const r = new Point(1, 2)
  const c = r.asCGPoint()
  expect(parseInt(c.x, 10)).toBe(1)
  expect(parseInt(c.y, 10)).toBe(2)
})

test('should return an NSPoint', () => {
  const r = new Point(1, 2)
  const c = r.asNSPoint()
  expect(parseInt(c.x, 10)).toBe(1)
  expect(parseInt(c.y, 10)).toBe(2)
})
