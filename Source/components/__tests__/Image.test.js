import * as assert from 'proclaim'

import { Image } from '../Image'

export const ImageTests = {
  tests: {
    testIsImage(context, document) {
      const page = document.selectedPage
      const image = page.newImage()
      assert.strictEqual(image.isImage, true)
      assert.strictEqual(page.isImage, false)

      const image2 = new Image({ parent: page })
      assert.strictEqual(image2.isImage, true)
    },
  },
}
