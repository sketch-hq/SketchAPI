/* globals expect, test */
/* eslint-disable no-param-reassign */

import { Text, Shape } from '../..'
import { createSharedStyle } from '../../../test-utils'

test(
  'should create a shared text style from a normal style',
  (context, document) => {
    // build the shared style
    const { sharedStyle, object } = createSharedStyle(document, Shape)
    // check that a shared style can be logged
    log(sharedStyle)
    expect(sharedStyle.type).toBe('SharedStyle')

    expect(sharedStyle.style).toEqual(object.style)
    expect(sharedStyle.name).toEqual('test shared style')

    expect(document.getSharedLayerStyles()).toEqual([sharedStyle])
    expect(document.getSharedTextStyles()).toEqual([])
  }
)

test(
  'should create a shared text style from a text style',
  (context, document) => {
    // build the shared style
    const { sharedStyle, object } = createSharedStyle(document, Text)

    expect(sharedStyle.style).toEqual(object.style)
    expect(document.getSharedLayerStyles()).toEqual([])
    expect(document.getSharedTextStyles()).toEqual([sharedStyle])
  }
)

test(
  'should create a new Style instance from a shared style',
  (context, document) => {
    const { sharedStyle } = createSharedStyle(document, Shape)
    const style = sharedStyle.createNewInstance()

    expect(style.sharedStyleId).toEqual(sharedStyle.id)
  }
)

test('should return all instances', (context, document) => {
  const { sharedStyle } = createSharedStyle(document, Shape) // 1st instance
  const style = sharedStyle.createNewInstance() // 2nd instance

  // add styles to layers
  // eslint-disable-next-line
  const shape = new Shape({
    parent: document.selectedPage,
    style,
  })

  // there is actually 4 instances because each Shape has a MSRectangleShape layer which share the style
  expect(sharedStyle.getAllInstances().length).toBe(4)
})
