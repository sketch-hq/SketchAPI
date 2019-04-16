/* globals expect, test */
import { base64Image } from '../../../test-utils'
import { Image } from '../..'

test('should return an ImageData when accessing `image`', (context, document) => {
  const page = document.selectedPage

  const image = new Image({
    parent: page,
    image: {
      base64: base64Image,
    },
  })
  expect(image.image.type).toBe('ImageData')
})
