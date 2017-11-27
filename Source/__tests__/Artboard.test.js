import { assertFalse, assertTrue } from './assert'

export const ArtboardTests = {
  tests: {
    testIsArtboard(context, document) {
      const page = document.selectedPage
      const artboard = page.newArtboard({ name: 'Test' })
      assertTrue(artboard.isArtboard)
      assertFalse(page.isArtboard)
    },
  },
}
