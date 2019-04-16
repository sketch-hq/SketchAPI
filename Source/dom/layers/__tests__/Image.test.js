/* globals expect, test */
import { canBeLogged } from '../../../test-utils'
import { Image } from '../..'

test('should create an empty image', (context, document) => {
  const page = document.selectedPage

  const image = new Image({ parent: page })

  expect(image.type).toBe('Image')
  expect(image.parent).toEqual(page)
  expect(image.image).toBe(null)
  canBeLogged(image, Image)
})
