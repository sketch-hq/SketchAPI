import { assertFalse, assertTrue } from './assert'

export const ImageTests = {
  tests: {
    testIsImage(context, document) {
      const page = document.selectedPage
      const image = page.newImage()
      assertTrue(image.isImage)
      assertFalse(page.isImage)
    },
  },
}
