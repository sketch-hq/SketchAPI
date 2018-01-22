/* globals expect, test */

import { Artboard } from '../Artboard'

test('should create an artboard', () => {
  const artboard2 = new Artboard({ name: 'Test2' })
  expect(artboard2.type).toBe('Artboard')
})
