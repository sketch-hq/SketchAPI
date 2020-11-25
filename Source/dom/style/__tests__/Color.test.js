/* globals expect, test */

import { Style } from '../..'

test('should create a Color from a hex string', () => {
  // #rrggbbaa
  const color = Style.colorFromString('#11223344')
  expect(String(color._object.class())).toBe('MSImmutableColor')
  expect(Style.colorToString(color)).toBe('#11223344')

  // #rrggbb
  const color2 = Style.colorFromString('#112233')
  expect(Style.colorToString(color2)).toBe('#112233ff')

  // #rgb
  const color3 = Style.colorFromString('#123')
  expect(Style.colorToString(color3)).toBe('#112233ff')
})
