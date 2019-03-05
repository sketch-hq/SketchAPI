/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import { Slice } from '../..'

test('should create an slice', () => {
  const slice = new Slice({ name: 'Test' })
  expect(slice.type).toBe('Slice')
  canBeLogged(slice, Slice)
})
