/* globals expect, test */

import { Artboard } from '../Artboard'

test('should create an artboard', () => {
  const artboard = new Artboard({ name: 'Test' })
  // check that an artboard can be logged
  log(artboard)
  expect(artboard.type).toBe('Artboard')
})
