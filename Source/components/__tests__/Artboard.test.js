import * as assert from 'proclaim'

import { Artboard } from '../Artboard'

export const ArtboardTests = {
  tests: {
    testIsArtboard(context, document) {
      const page = document.selectedPage
      const artboard = page.newArtboard({ name: 'Test' })
      assert.strictEqual(artboard.isArtboard, true)
      assert.strictEqual(page.isArtboard, false)

      const artboard2 = new Artboard({ name: 'Test2' })
      assert.strictEqual(artboard2.isArtboard, true)
      assert.strictEqual(artboard2.type, 'Artboard')
    },
  },
}
