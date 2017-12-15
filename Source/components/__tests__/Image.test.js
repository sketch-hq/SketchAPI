/* globals expect */

import { Image } from '../Image'

export const tests = {
  testIsImage(context, document) {
    const page = document.selectedPage

    const image = new Image({ parent: page })
    expect(image.type).toBe('Image')
    expect(image.parent.sketchObject).toBe(page.sketchObject)
  },
}
