/* globals expect, test */
/* eslint-disable no-param-reassign */

import { Text, Shape } from '../../'
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
  const { sharedStyle } = createSharedStyle(document, Shape)
  const style = sharedStyle.createNewInstance()
  const style2 = sharedStyle.createNewInstance()

  // add styles to layers
  // eslint-disable-next-line
  const shape = new Shape({
    parent: document.selectedPage,
    style,
  })
  // eslint-disable-next-line
  const shape2 = new Shape({
    parent: document.selectedPage,
    style: style2,
  })

  expect(sharedStyle.getAllInstances().length).toBe(3)
})
