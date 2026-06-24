/* globals expect, test */
import { outputPath } from '../../../test-utils'
import {
  Library,
  Document,
  Artboard,
  Group,
  ShapePath,
  SymbolMaster,
  Swatch,
} from '../..'

test('should import a symbol from a lib', () => {
  const testOutputPath = outputPath()
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
  const master = SymbolMaster.fromFrame(artboard)
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
  const testOutputPath = outputPath()
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

test('should import frame and graphic templates from a Library', () => {
  const testOutputPath = outputPath()
  const document = new Document()

  const frameTemplate = new Group.Frame({
    name: 'Templates/Phone',
    parent: document.selectedPage,
  })
  frameTemplate.isTemplate = true
  // eslint-disable-next-line
  const frameTemplateLayer = new ShapePath({
    name: 'frame template layer',
    shapeType: ShapePath.ShapeType.Oval,
    parent: frameTemplate,
  })

  const graphicTemplate = new Group.Graphic({
    name: 'Templates/Icon',
    parent: document.selectedPage,
  })
  graphicTemplate.isTemplate = true
  // eslint-disable-next-line
  const graphicTemplateLayer = new ShapePath({
    name: 'graphic template layer',
    shapeType: ShapePath.ShapeType.Rectangle,
    parent: graphicTemplate,
  })

  return new Promise((resolve, reject) => {
    document.save(
      `${testOutputPath}/sketch-api-unit-tests-importable-objects-templates.sketch`,
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
      `${testOutputPath}/sketch-api-unit-tests-importable-objects-templates.sketch`
    )

    const document2 = new Document()

    const frameTemplateRefs =
      lib.getImportableFrameTemplateReferencesForDocument(document2)
    const graphicTemplateRefs =
      lib.getImportableGraphicTemplateReferencesForDocument(document2)

    expect(frameTemplateRefs.length).toBe(1)
    expect(graphicTemplateRefs.length).toBe(1)

    const importedFrame = frameTemplateRefs[0].import()
    const importedGraphic = graphicTemplateRefs[0].import()

    expect(importedFrame.name).toBe('Phone')
    expect(importedFrame.isFrame).toBe(true)
    expect(importedFrame.isGraphicFrame).toBe(false)
    expect(importedFrame.isTemplate).toBe(false)
    expect(importedFrame.layers.length).toBe(1)
    expect(importedFrame.layers[0].name).toBe('frame template layer')

    expect(importedGraphic.name).toBe('Icon')
    expect(importedGraphic.isFrame).toBe(true)
    expect(importedGraphic.isGraphicFrame).toBe(true)
    expect(importedGraphic.isTemplate).toBe(false)
    expect(importedGraphic.layers.length).toBe(1)
    expect(importedGraphic.layers[0].name).toBe('graphic template layer')

    document2.close()
    lib.remove()
  })
})
