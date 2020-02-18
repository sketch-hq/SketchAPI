/* globals expect, test */
import { canBeLogged, base64Image } from '../../../test-utils'
import { Image } from '../..'
import { Rectangle } from '../../models/Rectangle'

test('should create an empty image', (context, document) => {
  const page = document.selectedPage

  const image = new Image({ parent: page })

  expect(image.type).toBe('Image')
  expect(image.parent).toEqual(page)
  expect(image.image).toBe(null)
  canBeLogged(image, Image)
})

test('should use frame to set initial size', (context, document) => {
  const page = document.selectedPage

  const image = new Image({
    image: {
      base64: base64Image,
    },
    parent: page,
    frame: new Rectangle(0, 0, 300, 200),
  })

  expect(image.frame.width).toBe(300)
  expect(image.frame.height).toBe(200)
})

test('should resize image to its original size', (context, document) => {
  const page = document.selectedPage

  const image = new Image({
    image: {
      base64: base64Image,
    },
    parent: page,
    frame: new Rectangle(0, 0, 300, 200),
  })

  image.resizeToOriginalSize()

  expect(image.frame.width).toBe(50)
  expect(image.frame.height).toBe(50)
})

test('should use original image size when a parent is provided', (context, document) => {
  const page = document.selectedPage

  const image = new Image({
    image: {
      // $deity please forgive me for this atrocity. We need to use
      // a path to initialize an Image because this tests a specific
      // code path where images are lazily loaded and don't have an
      // image representation immediately.
      // TODO: find an alternate way of generating a local file
      path: '/Library/User Pictures/Fun/Ying-Yang.png',
    },
    parent: page,
  })

  expect(image.frame.width).toBe(512)
  expect(image.frame.height).toBe(512)

  // Base64 Image
  const imageB64 = new Image({
    image: {
      base64: base64Image,
    },
    parent: page,
  })

  expect(imageB64.frame.width).toBe(50)
  expect(imageB64.frame.height).toBe(50)
})
