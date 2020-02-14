/* globals expect, test */
import { canBeLogged, base64Image } from '../../../test-utils'
import { Image } from '../..'

test('should create an empty image', (context, document) => {
  const page = document.selectedPage

  const image = new Image({ parent: page })

  expect(image.type).toBe('Image')
  expect(image.parent).toEqual(page)
  expect(image.image).toBe(null)
  canBeLogged(image, Image)
})

test('should resize image to its original size', (context, document) => {
  const page = document.selectedPage

  const image = new Image({
    image: {
      base64: base64Image,
    },
    parent: page,
  })

  expect(image.frame.width).toBe(100)
  expect(image.frame.height).toBe(100)

  image.resizeToOriginalSize()

  expect(image.frame.width).toBe(50)
  expect(image.frame.height).toBe(50)
})
