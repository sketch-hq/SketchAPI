/* globals expect, test */

import { Artboard } from '../Artboard'

test('should create an artboard', () => {
  const artboard = new Artboard({ name: 'Test' })
  // check that an artboard can be logged
  log(artboard)
  expect(artboard.type).toBe('Artboard')
})

test('should set the artboard as a flow start point', () => {
  const artboard = new Artboard({ name: 'Test', flowStartPoint: true })

  expect(artboard.flowStartPoint).toBe(true)
})
