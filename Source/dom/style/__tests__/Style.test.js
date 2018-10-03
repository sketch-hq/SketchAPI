/* globals expect, test */

import { Shape } from '../..'
import { createSharedStyle } from '../../../test-utils'
import { Style } from '../Style'

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

test(
  'should be in and out of sync with its shared style',
  (context, document) => {
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
  }
)
