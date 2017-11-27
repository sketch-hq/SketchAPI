import { assertFalse, assertTrue } from './assert'

import { Image } from '../Image'

export const ImageTests = {
  tests: {
    testIsImage(context, document) {
      const page = document.selectedPage
      const image = page.newImage()
      assertTrue(image.isImage)
      assertFalse(page.isImage)

      const image2 = new Image({ parent: page })
      assertTrue(image2.isImage)
    },
  },
}
