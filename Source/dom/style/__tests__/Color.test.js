/* globals expect, test */

import { Color } from '../Color'

test('should create a Color from a hex string', () => {
  // #rrggbbaa
  const color = Color.from('#11223344')
  expect(String(color._object.class())).toBe('MSImmutableColor')
  expect(color.toString()).toBe('#11223344')

  // #rrggbb
  const color2 = Color.from('#112233')
  expect(color2.toString()).toBe('#112233ff')

  // #rgb
  const color3 = Color.from('#123')
  expect(color3.toString()).toBe('#112233ff')
})
