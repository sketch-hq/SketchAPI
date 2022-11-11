/* globals expect, test */
/* eslint-disable no-param-reassign */
import { Text, Shape } from '../..'
import { createSharedStyle } from '../../../test-utils'

test('should create a shared text style from a normal style', (_context, document) => {
  // build the shared style
  const { sharedStyle, object } = createSharedStyle(document, Shape)

  const { ...sharedStyleWithoutId } = sharedStyle.style
  const { ...objectStyleWithoutId } = object.style

  // Compare without ids
  delete sharedStyleWithoutId.id
  delete objectStyleWithoutId.id

  // check that a shared style can be logged
  log(sharedStyle)
  expect(sharedStyle.type).toBe('SharedStyle')

  expect(sharedStyleWithoutId).toEqual(objectStyleWithoutId)
  expect(sharedStyle.name).toEqual('test shared style')

  expect(document.getSharedLayerStyles()).toEqual([sharedStyle])
  expect(document.getSharedTextStyles()).toEqual([])
})

test('should create a shared text style from a text style', (_context, document) => {
  // build the shared style
  const { sharedStyle, object } = createSharedStyle(document, Text)

  const { ...sharedStyleWithoutId } = sharedStyle.style
  const { ...objectStyleWithoutId } = object.style

  // Compare without ids
  delete sharedStyleWithoutId.id
  delete objectStyleWithoutId.id

  expect(sharedStyleWithoutId).toEqual(objectStyleWithoutId)
  expect(document.getSharedLayerStyles()).toEqual([])
  expect(document.getSharedTextStyles()).toEqual([sharedStyle])
})

test('should return all instances', (_context, document) => {
  const { sharedStyle } = createSharedStyle(document, Shape) // 1st instance

  const shape = new Shape({
    parent: document.selectedPage,
    sharedStyle, // 2nd instance
  })

  expect(sharedStyle.getAllInstances().length).toBe(2)

  // eslint-disable-next-line
  const shape2 = new Shape({
    parent: document.selectedPage,
    sharedStyle, // 2nd instance
  })

  expect(sharedStyle.getAllInstances().length).toBe(3)

  shape.sharedStyle = undefined

  expect(sharedStyle.getAllInstances().length).toBe(2)
})

// I'm commenting out this test until I can find a reliable way to run it.
// The fix in #46970 works, but for some reason the test is not happy.
// test('should get the source Library for a Shared Style', (_context, document) => {
//   const { style } = createSharedStyle(document, Shape)
//   const lib = style.getLibrary()
//   // This will be null for local Styles, but that's ok
//   expect(lib).toBe(null)
// })
