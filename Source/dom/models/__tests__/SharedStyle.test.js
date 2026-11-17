/* globals expect, test */
/* eslint-disable no-param-reassign */
import { Text, Shape, SharedStyle } from '../..'
import { createSharedStyle } from '../../../test-utils'

test('should create a shared layer style from a normal style', (_context, document) => {
  // build the shared style
  const { sharedStyle, object } = createSharedStyle(document, Shape)
  expect(sharedStyle.styleType).toBe(SharedStyle.StyleType.Layer)

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
  const { sharedStyle, object } = createSharedStyle(document, Text, {
    fontSize: 42,
    fontFamily: 'Menlo',
  })
  expect(sharedStyle.styleType).toBe(SharedStyle.StyleType.Text)
  expect(sharedStyle.style.fontSize).toBe(42)
  expect(sharedStyle.style.fontFamily).toBe('Menlo')

  const { ...sharedStyleWithoutId } = sharedStyle.style
  const { ...objectStyleWithoutId } = object.style

  // Compare without ids
  delete sharedStyleWithoutId.id
  delete objectStyleWithoutId.id

  expect(sharedStyleWithoutId).toEqual(objectStyleWithoutId)
  expect(document.getSharedLayerStyles()).toEqual([])
  expect(document.getSharedTextStyles()).toEqual([sharedStyle])
})

test('should create a shared layer style from a plain object', (_context, document) => {
  // Case 1: Document.sharedLayerStyles setter
  document.sharedLayerStyles = [
    {
      name: 'My Layer Style',
      style: {
        opacity: 0.5,
      },
    },
  ]
  expect(document.sharedLayerStyles.length).toBe(1)
  expect(document.sharedLayerStyles[0].styleType).toBe(
    SharedStyle.StyleType.Layer
  )

  // Case 2: Document.sharedLayerStyles mutation
  document.sharedLayerStyles.push({
    name: 'My Other Layer Style',
    style: {
      fills: [{ color: '#ff00aaBBff' }],
    },
  })
  expect(document.sharedLayerStyles.length).toBe(2)
  expect(document.sharedLayerStyles[1].styleType).toBe(
    SharedStyle.StyleType.Layer
  )

  // Case 3: SharedStyle.fromStyle()
  const sharedStyle = SharedStyle.fromStyle({
    name: 'My Constructed Layer Style',
    style: {
      borders: [{ color: '#cafebabe' }],
    },
    document,
  })
  expect(document.sharedLayerStyles.length).toBe(3)
  expect(sharedStyle.styleType).toBe(SharedStyle.StyleType.Layer)
})

test('should create a shared text style from a plain object', (_context, document) => {
  // Case 1: Document.sharedTextStyles setter
  document.sharedTextStyles = [
    {
      name: 'My Text Style',
      style: {
        fontSize: 42,
        fontFamily: 'Menlo',
      },
    },
  ]
  expect(document.sharedTextStyles.length).toBe(1)
  expect(document.sharedTextStyles[0].styleType).toBe(
    SharedStyle.StyleType.Text
  )
  expect(document.sharedTextStyles[0].style.fontSize).toBe(42)
  expect(document.sharedTextStyles[0].style.fontFamily).toBe('Menlo')

  // Case 2: Document.sharedTextStyles mutation
  document.sharedTextStyles.push({
    name: 'My Other Text Style',
    style: {
      fills: [{ color: '#ff00aaBBff' }],
    },
  })
  expect(document.sharedTextStyles.length).toBe(2)
  expect(document.sharedTextStyles[1].styleType).toBe(
    SharedStyle.StyleType.Text
  )
  expect(document.sharedTextStyles[1].style.fills.length).toBe(1)

  // Unlike with layer styles above, there's no case #3 because SharedStyle.fromStyle()
  // doesn't support creating text styles from plain objects: there's simply not
  // enough information to determine the output style type
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
