/* globals expect, test */
import { isRunningOnJenkins } from '../../../test-utils'
import { Library, Document, Artboard, Text, SymbolMaster } from '../../'

// some tests cannot really run on jenkins because it doesn't have access to MSDocument
if (!isRunningOnJenkins()) {
  test('should import a symbol from a lib', () => {
    const document = new Document()

    const artboard = new Artboard({
      name: 'Test',
      parent: document.selectedPage,
    })
    // eslint-disable-next-line
    const text = new Text({
      text: 'Test value',
      parent: artboard,
    })
    // eslint-disable-next-line
    const master = SymbolMaster.fromArtboard(artboard)
    return document.save(
      '~/Desktop/sketch-api-unit-tests-importable-objects.sketch',
      err => {
        expect(err).toBe(undefined)

        const lib = Library.getLibraryForDocumentAtPath(
          '~/Desktop/sketch-api-unit-tests-importable-objects.sketch'
        )

        const document2 = new Document()

        const symbolRefs = lib.getImportableSymbolReferencesForDocument(
          document2
        )

        expect(symbolRefs.length).toBe(1)
        expect(symbolRefs[0].id).toBe(master.symbolId)

        const importedMaster = symbolRefs[0].import()

        expect(importedMaster.layers[0].text).toBe('Test value')

        document.close()
        document2.close()
        lib.remove()
      }
    )
  })
}
