/* globals expect, test */
import { base64Image } from '../../../test-utils'
import { Image, Rectangle } from '../..'

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

test('should return image size when accessing `size`', (context, document) => {
  const page = document.selectedPage

  const image = new Image({
    parent: page,
    image: {
      base64: base64Image,
    },
  })
  expect(image.image.size.width).toBe(50)
  expect(image.image.size.height).toBe(50)
})

test('should return image size regardless of scale', (context, document) => {
  const page = document.selectedPage

  const image = new Image({
    parent: page,
    image: {
      base64: base64Image,
    },
  })
  image.frame = new Rectangle(0, 0, 300, 200)
  expect(image.image.size.width).toBe(50)
  expect(image.image.size.height).toBe(50)
})
