/* globals expect, test */

import { Style } from '../Style'

test('should set the shadows', () => {
  const style = new Style()
  style.shadows = [
    {
      color: '#11223344',
      blur: 10,
      x: 5,
      y: 8,
      spread: 20,
      enabled: false,
    },
  ]
  style.innerShadows = [
    {
      color: '#11223344',
      blur: 10,
      x: 5,
      y: 8,
      spread: 20,
      enabled: false,
    },
  ]
  expect(style.sketchObject.shadows().count()).toBe(1)
  expect(style.sketchObject.innerShadows().count()).toBe(1)
})

test('should get the shadows', () => {
  const style = new Style()
  style.shadows = [
    {
      color: '#11223344',
      blur: 4,
      x: 5,
      y: 8,
      spread: 20,
      enabled: false,
    },
  ]
  expect(style.shadows[0].toJSON()).toEqual({
    color: '#11223344',
    blur: 4,
    x: 5,
    y: 8,
    spread: 20,
    enabled: false,
  })
  style.innerShadows = [
    {
      color: '#11223344',
      blur: 5,
      x: 2,
      y: 23,
      spread: 10,
      enabled: true,
    },
  ]
  expect(style.innerShadows[0].toJSON()).toEqual({
    color: '#11223344',
    blur: 5,
    x: 2,
    y: 23,
    spread: 10,
    enabled: true,
  })
})

// https://github.com/BohemianCoding/SketchAPI/issues/230
test('should set the shadows with 0 values', () => {
  const style = new Style()
  style.shadows = [
    {
      spread: 0,
      blur: 0,
      x: 1,
      y: 0,
      color: '#ebc100',
    },
  ]
  style.innerShadows = [
    {
      spread: 0,
      blur: 0,
      x: 1,
      y: 0,
      color: '#ebc100',
    },
  ]
  expect(style.shadows[0].blur).toBe(0)
  expect(style.shadows[0].y).toBe(0)
  expect(style.innerShadows[0].blur).toBe(0)
  expect(style.innerShadows[0].y).toBe(0)
})
