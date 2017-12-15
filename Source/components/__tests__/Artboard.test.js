/* globals expect */

import { Artboard } from '../Artboard'

export const tests = {
  testIsArtboard(context, document) {
    const page = document.selectedPage
    const artboard = page.newArtboard({ name: 'Test' })
    expect(artboard.isArtboard).toBe(true)
    expect(page.isArtboard).toBe(false)

    const artboard2 = new Artboard({ name: 'Test2' })
    expect(artboard2.isArtboard).toBe(true)
    expect(artboard2.type).toBe('Artboard')
  },
}
