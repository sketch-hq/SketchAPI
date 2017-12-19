/* globals expect, test */

import { createFiber } from '../async'

test('should create a fiber', () => {
  const fiber = createFiber()
  fiber.cleanup()
  expect(fiber).toBeDefined()
  expect(fiber.cleanup).toBeDefined()
  fiber.cleanup()
  expect(fiber.onCleanup).toBeDefined()
})

test('onCleanup should be called when cleaning up the fiber', () => {
  const fiber = createFiber()
  let cleanedUp = false
  fiber.onCleanup(() => {
    cleanedUp = true
  })
  expect(cleanedUp).toBe(false)
  fiber.cleanup()
  expect(cleanedUp).toBe(true)
})
