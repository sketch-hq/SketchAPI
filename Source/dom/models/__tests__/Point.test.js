/* globals expect, test */

import { Style } from '../..'

test('should create a point', () => {
  // Point is not exported as a public API but used and exposed by
  // Gradient and Blur.
  const s = new Style({
    fills: [
      {
        fillType: Style.FillType.Gradient,
        gradient: { from: { x: 1, y: 0.5 } },
      },
    ],
  })

  const p = s.fills[0].gradient.from
  // check that a point can be logged
  log(p)

  expect(p.x).toBe(1)
  expect(p.y).toBe(0.5)
})

/** 
 * The following tests cannot be run in the Sketch environment
 * since Point is not exported. Could be useful to reinstate if
 * this changes.
 * 

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
  
*/

test('should return a CGPoint', () => {
  const s = new Style({
    fills: [
      {
        fillType: Style.FillType.Gradient,
        gradient: { from: { x: 1, y: 2 } },
      },
    ],
  })

  const p = s.fills[0].gradient.from
  const c = p.asCGPoint()
  expect(parseInt(c.x, 10)).toBe(1)
  expect(parseInt(c.y, 10)).toBe(2)
})

test('should return an NSPoint', () => {
  const s = new Style({
    fills: [
      {
        fillType: Style.FillType.Gradient,
        gradient: { from: { x: 1, y: 2 } },
      },
    ],
  })

  const p = s.fills[0].gradient.from
  const c = p.asNSPoint()
  expect(parseInt(c.x, 10)).toBe(1)
  expect(parseInt(c.y, 10)).toBe(2)
})
