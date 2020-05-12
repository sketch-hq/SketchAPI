/* globals expect, test */
import { outputPath } from '../../../test-utils'
import { Library, Document, Artboard, Text, SymbolMaster } from '../..'

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
  return new Promise((resolve, reject) => {
    document.save(
      `${outputPath()}/sketch-api-unit-tests-importable-objects.sketch`,
      (err) => {
        document.close()
        if (err) {
          return reject(err)
        }
        return resolve()
      }
    )
  }).then(() => {
    const lib = Library.getLibraryForDocumentAtPath(
      `${outputPath()}/sketch-api-unit-tests-importable-objects.sketch`
    )

    const document2 = new Document()

    const symbolRefs = lib.getImportableSymbolReferencesForDocument(document2)

    expect(symbolRefs.length).toBe(1)
    expect(symbolRefs[0].id).toBe(master.symbolId)

    const importedMaster = symbolRefs[0].import()

    expect(importedMaster.layers[0].text).toBe('Test value')
    document2.close()
    lib.remove()
  })
})
