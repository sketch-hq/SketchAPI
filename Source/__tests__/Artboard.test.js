import { assertFalse, assertTrue } from './assert'

import { Artboard } from '../Artboard'

export const ArtboardTests = {
  tests: {
    testIsArtboard(context, document) {
      const page = document.selectedPage
      const artboard = page.newArtboard({ name: 'Test' })
      assertTrue(artboard.isArtboard)
      assertFalse(page.isArtboard)

      const artboard2 = new Artboard({ name: 'Test2' })
      assertTrue(artboard2.isArtboard)
      assertTrue(artboard2.type === 'Artboard')
    },
  },
}
