/* globals expect */

import { Image } from '../Image'

export const tests = {
  testIsImage(context, document) {
    const page = document.selectedPage
    const image = page.newImage()
    expect(image.isImage).toBe(true)
    expect(page.isImage).toBe(false)

    const image2 = new Image({ parent: page })
    expect(image2.isImage).toBe(true)
  },
}
