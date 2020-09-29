/* globals expect, test */
import { outputPath } from '../../../test-utils'
import {
  Library,
  Document,
  Artboard,
  ShapePath,
  SymbolMaster,
  Swatch,
} from '../..'

const testOutputPath = outputPath()

test('should import a symbol from a lib', () => {
  const document = new Document()

  const artboard = new Artboard({
    name: 'Test',
    parent: document.selectedPage,
  })
  // eslint-disable-next-line
  const path = new ShapePath({
    name: 'oval',
    shapeType: ShapePath.ShapeType.Oval,
    parent: artboard,
  })
  // eslint-disable-next-line
  const master = SymbolMaster.fromArtboard(artboard)
  return new Promise((resolve, reject) => {
    document.save(
      `${testOutputPath}/sketch-api-unit-tests-importable-objects.sketch`,
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
      `${testOutputPath}/sketch-api-unit-tests-importable-objects.sketch`
    )

    const document2 = new Document()

    const symbolRefs = lib.getImportableSymbolReferencesForDocument(document2)

    expect(symbolRefs.length).toBe(1)
    expect(symbolRefs[0].id).toBe(master.symbolId)

    const importedMaster = symbolRefs[0].import()

    expect(importedMaster.layers.length).toBe(1)
    expect(importedMaster.layers[0].name).toBe('oval')
    document2.close()
    lib.remove()
  })
})

test('should import a swatch from a Library', () => {
  const document = new Document()
  const swatch = Swatch.from({
    name: 'Safety Orange',
    color: '#ff6600',
  })

  document.swatches.push(swatch)

  return new Promise((resolve, reject) => {
    document.save(
      `${testOutputPath}/sketch-api-unit-tests-importable-objects-swatches.sketch`,
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
      `${testOutputPath}/sketch-api-unit-tests-importable-objects-swatches.sketch`
    )

    const document2 = new Document()

    const swatchRefs = lib.getImportableSwatchReferencesForDocument(document2)

    expect(swatchRefs.length).toBe(1)

    const importedSwatch = swatchRefs[0].import()

    expect(importedSwatch.name).toBe('Safety Orange')
    expect(importedSwatch.color).toBe('#ff6600ff')
    document2.close()
    lib.remove()
  })
})
