/* globals expect, test */

import { Style } from '../..'

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
    {
      color: '#11223344',
      blur: 10,
      x: 5,
      y: 8,
      spread: 20,
      enabled: false,
      isInnerShadow: true,
    },
  ]
  expect(style.sketchObject.dropShadows().count()).toBe(1)
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
    {
      color: '#11223344',
      blur: 5,
      x: 2,
      y: 23,
      spread: 10,
      enabled: true,
      isInnerShadow: true,
    },
  ]
  expect(style.shadows[0].toJSON()).toEqual({
    color: '#11223344',
    blur: 4,
    x: 5,
    y: 8,
    spread: 20,
    enabled: false,
    isInnerShadow: false,
  })
  expect(style.innerShadows[0].toJSON()).toEqual({
    color: '#11223344',
    blur: 5,
    x: 2,
    y: 23,
    spread: 10,
    enabled: true,
    isInnerShadow: true,
  })
})

// https://github.com/sketch-hq/SketchAPI/issues/230
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
    {
      spread: 0,
      blur: 0,
      x: 1,
      y: 0,
      color: '#ebc100',
      isInnerShadow: true,
    },
  ]
  expect(style.shadows[0].blur).toBe(0)
  expect(style.shadows[0].y).toBe(0)
  expect(style.innerShadows[0].blur).toBe(0)
  expect(style.innerShadows[0].y).toBe(0)
})
