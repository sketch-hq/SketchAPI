/* globals expect, test */

import { Slice } from '../..'

test('should create an slice', () => {
  const slice = new Slice({ name: 'Test' })
  // check that an artboard can be logged
  log(slice)
  expect(slice.type).toBe('Slice')
})
