/* globals expect, test */
import { Shape, Style } from '../..'
import { createSharedStyle } from '../../../test-utils'

test('should change the opacity', () => {
  const style = new Style()
  expect(style.opacity).toBe(1)
  style.opacity = 0.5
  expect(style.opacity).toBe(0.5)

  style.opacity = 2
  expect(style.opacity).toBe(1)

  style.opacity = -1
  expect(style.opacity).toBe(0)
})

test('should change the blending mode', () => {
  const style = new Style()
  expect(style.blendingMode).toBe(Style.BlendingMode.Normal)
  style.blendingMode = Style.BlendingMode.Multiply
  expect(style.blendingMode).toBe('Multiply')
})

test('default style should not have any fills', () => {
  // setting the fills after creation
  const style = new Style()
  expect(style.sketchObject.fills().count()).toBe(0)
})

test('should be in and out of sync with its shared style', (_context, document) => {
  const { sharedStyle } = createSharedStyle(document, Shape)

  const shape = new Shape({
    parent: document.selectedPage,
    sharedStyle,
  })
  const { style } = shape

  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(false)

  sharedStyle.style.opacity = 0.5

  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(true)
  expect(style.opacity).toBe(1)

  style.syncWithSharedStyle(sharedStyle)

  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(false)
  expect(style.opacity).toBe(0.5)

  style.opacity = 1

  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(true)

  sharedStyle.style = style

  expect(style.isOutOfSyncWithSharedStyle(sharedStyle)).toBe(false)
  expect(sharedStyle.style.opacity).toBe(1)
})

test('should get and set progressive alpha gradient', () => {
  const style = new Style()
  expect(style.progressiveAlpha).toBeUndefined()

  style.progressiveAlpha = {
    stops: [
      { color: '#00000000', position: 0 },
      { color: '#0000007f', position: 0.5 },
      { color: '#000000ff', position: 1 },
    ],
  }
  expect(style.progressiveAlpha.toJSON()).toEqual({
    gradientType: 'Linear',
    from: { x: 0.5, y: 0 },
    to: { x: 0.5, y: 1 },
    aspectRatio: 0,
    stops: [
      { color: '#00000000', position: 0 },
      { color: '#0000007f', position: 0.5 },
      { color: '#000000ff', position: 1 },
    ],
  })

  style.progressiveAlpha = null
  expect(style.progressiveAlpha).toBeUndefined()
})
