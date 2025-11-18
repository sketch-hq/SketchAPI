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
    blendingMode: 'Normal',
  })
  expect(style.innerShadows[0].toJSON()).toEqual({
    color: '#11223344',
    blur: 5,
    x: 2,
    y: 23,
    spread: 10,
    enabled: true,
    isInnerShadow: true,
    blendingMode: 'Normal',
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

test('should set and get blending mode', () => {
  const style = new Style({
    blendingMode: Style.BlendingMode.ColorBurn,
  })
  style.shadows = [
    {
      spread: 0,
      blur: 0,
      x: 1,
      y: 0,
      color: '#ebc100',
      blendingMode: Style.BlendingMode.Darken,
    },
    {
      spread: 0,
      blur: 0,
      x: 1,
      y: 0,
      color: '#ebc100',
      isInnerShadow: true,
      blendingMode: Style.BlendingMode.Difference,
    },
  ]

  expect(style.shadows[0].blendingMode).toBe(Style.BlendingMode.Darken)
  expect(style.innerShadows[0].blendingMode).toBe(Style.BlendingMode.Difference)

  style.shadows[0].blendingMode = Style.BlendingMode.HardLight
  style.innerShadows[0].blendingMode = Style.BlendingMode.Hue
  style.blendingMode = Style.BlendingMode.Lighten

  expect(style.shadows[0].blendingMode).toBe(Style.BlendingMode.HardLight)
  expect(style.innerShadows[0].blendingMode).toBe(Style.BlendingMode.Hue)
})

test('should get color swatch', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]
  const swatch = document.swatches[0]

  // Make sure this host layer is actually part of the same document as the swatch itself
  document.selectedPage.layers = [
    {
      type: 'ShapePath',
      style: {
        shadows: [
          {
            color: swatch.referencingColor,
            blur: 4,
          },
        ],
      },
    },
  ]

  let layer = document.selectedPage.layers[0]
  expect(layer.style.shadows[0].swatch).toBeDefined()
  expect(layer.style.shadows[0].swatch.name).toBe(swatch.name)
  expect(layer.style.shadows[0].swatch.color).toBe(swatch.color)
  expect(layer.style.shadows[0].color).toBe(swatch.color)
})

test('should set color swatch', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]

  // Make sure this host layer is actually part of the same document as the swatch itself
  document.selectedPage.layers = [
    {
      type: 'ShapePath',
      style: {
        shadows: [
          {
            color: '#11223344', // will be replaced with the swatch color
            blur: 4,
          },
        ],
      },
    },
  ]

  let layer = document.selectedPage.layers[0]
  expect(layer.style.shadows[0].swatch).toBeUndefined()

  const swatch = document.swatches[0]
  layer.style.shadows[0].swatch = swatch
  expect(layer.style.shadows[0].swatch).toBeDefined()
  expect(layer.style.shadows[0].swatch.name).toBe(swatch.name)
  expect(layer.style.shadows[0].swatch.color).toBe(swatch.color)
  expect(layer.style.shadows[0].color).toBe(swatch.color)
})

test('should assign swatch directly', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]
  const swatch = document.swatches[0]

  // Make sure this host layer is actually part of the same document as the swatch itself
  document.selectedPage.layers = [
    {
      type: 'ShapePath',
      style: {
        shadows: [
          {
            blur: 4,
            swatch: swatch,
            color: '##11223344', // should be ignored
          },
        ],
      },
    },
  ]
  let layer = document.selectedPage.layers[0]

  expect(layer.style.shadows[0].swatch).toBeDefined()
  expect(layer.style.shadows[0].swatch.id).toBe(swatch.id)
  expect(layer.style.shadows[0].swatch.name).toBe(swatch.name)
  expect(layer.style.shadows[0].swatch.color).toBe(swatch.color)
  expect(layer.style.shadows[0].color).toBe(swatch.color)
})
