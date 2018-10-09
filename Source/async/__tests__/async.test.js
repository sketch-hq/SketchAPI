/* globals expect, test, coscript */

import { createFiber } from '..'

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

test.only('should keep the plugin around when using a fiber', () => {
  expect.assertions(1)
  // creates a fiber
  return new Promise(resolve => {
    coscript.scheduleWithInterval_jsFunction(
      0.1, // 0.1s
      () => {
        expect(true).toBe(true)
        resolve()
      }
    )
  })
})
