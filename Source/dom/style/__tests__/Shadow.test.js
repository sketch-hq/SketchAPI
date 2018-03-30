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
