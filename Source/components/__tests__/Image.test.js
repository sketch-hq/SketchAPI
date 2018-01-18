/* globals expect, test */

import { Image } from '../Image'

test('should create an image', (context, document) => {
  const page = document.selectedPage

  const image = new Image({ parent: page })
  // check that an image can be logged
  log(image)
  expect(image.type).toBe('Image')
  expect(image.parent).toEqual(page)
})
