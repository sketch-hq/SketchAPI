/* globals expect, test */
import { Shape, Group, SymbolMaster, Document, Text, Library } from '../..'
import { createSharedStyle, outputPath } from '../../../test-utils'

test('should get a style', () => {
  const shape = new Shape()
  expect(shape.style.type).toBe('Style')
})

test('should handle resetting a style', () => {
  const text = new Text({
    style: {
      borders: [{ color: '#112233ff' }],
    },
  })
  expect(text.style.borders.length).toEqual(1)

  text.style = null
  expect(text.style.borders.length).toEqual(0)
})

test('should create a Layer with a style property', () => {
  const shape = new Shape({
    style: {
      fills: [],
    },
  })
  expect(shape.style.type).toBe('Style')
})

test('should set a shared style', (_context, document) => {
  const shape = new Shape()
  const { sharedStyle } = createSharedStyle(document, Shape, {
    fills: ['#111'],
  })
  shape.sharedStyleId = sharedStyle.id
  expect(shape.sharedStyleId).toBe(sharedStyle.id)

  const { sharedStyle: sharedStyle2 } = createSharedStyle(document, Shape, {
    fills: ['#222'],
  })

  shape.sharedStyle = sharedStyle2
  expect(shape.sharedStyleId).toBe(sharedStyle2.id)
})

test('should access library for a shared style', () => {
  let testOutputPath = outputPath()
  let testLibraryName = 'sketch-api-unit-tests-library-shared-style'

  const libraryDocument = new Document()
  const { sharedStyle: layerStyle } = createSharedStyle(
    libraryDocument,
    Shape,
    {
      fills: ['#0000bbff'],
    }
  )
  layerStyle.name = 'Shared Style with Blue Fill'
  const { sharedStyle: textStyle } = createSharedStyle(libraryDocument, Text, {
    fontSize: 20,
  })
  textStyle.name = 'Shared Text Style with Big Text'

  return new Promise((resolve, reject) => {
    libraryDocument.save(
      `${testOutputPath}/${testLibraryName}.sketch`,
      (err) => {
        libraryDocument.close()
        if (err) {
          return reject(err)
        }
        return resolve()
      }
    )
  }).then(() => {
    const lib = Library.getLibraryForDocumentAtPath(
      `${testOutputPath}/${testLibraryName}.sketch`
    )
    const document = new Document()
    const layerStyleRefs = lib.getImportableLayerStyleReferencesForDocument(
      document
    )
    const textStyleRefs = lib.getImportableTextStyleReferencesForDocument(
      document
    )
    const importedLayerStyle = layerStyleRefs[0].import()
    const importedTextStyle = textStyleRefs[0].import()

    const shape = new Shape({
      sharedStyle: importedLayerStyle,
      parent: document.selectedPage,
    })
    const text = new Text({
      text: 'Hello',
      sharedStyle: importedTextStyle,
      parent: document.selectedPage,
    })

    expect(shape.sharedStyle.getLibrary()).toBeDefined()
    expect(shape.sharedStyle.getLibrary()).not.toBe(null)
    expect(shape.sharedStyle.getLibrary().id).toBe(lib.id)
    expect(shape.sharedStyle.getLibrary().name).toBe(lib.name)
    expect(shape.sharedStyle.getLibrary().valid).toBe(true)
    expect(shape.sharedStyle.getLibrary().enabled).toBe(true)

    expect(text.sharedStyle.getLibrary()).toBeDefined()
    expect(text.sharedStyle.getLibrary()).not.toBe(null)
    expect(text.sharedStyle.getLibrary().id).toBe(lib.id)
    expect(text.sharedStyle.getLibrary().name).toBe(lib.name)
    expect(text.sharedStyle.getLibrary().valid).toBe(true)
    expect(text.sharedStyle.getLibrary().enabled).toBe(true)

    document.close()
    lib.remove()
  })
})

test('should access a shared layer style for immutable layers', () => {
  // the document we can get from the test context is not a proper MSDocument,
  // and we need one for StyledLayer.sharedStyle to work in this case
  const document = new Document()
  const { sharedStyle } = createSharedStyle(document, Shape, {
    fills: ['#0000bbff'],
  })
  sharedStyle.name = 'Shared Style with Blue Fill'

  const frame = new Group.Frame({
    name: 'Test',
    parent: document.selectedPage,
  })
  const shape = new Shape({
    sharedStyle,
    parent: frame,
  })
  const master = SymbolMaster.fromFrame(frame)
  const instance = master.createNewInstance()
  document.selectedPage.layers.push(instance)

  const immutableShape = instance.expandedLayers.find((l) => l.id === shape.id)
  expect(immutableShape).toBeDefined()
  expect(immutableShape.isImmutable()).toBe(true)
  expect(immutableShape.sharedStyle).not.toBe(null)
  expect(immutableShape.sharedStyle.isImmutable()).toBe(true)
  expect(immutableShape.sharedStyle.id).toBe(sharedStyle.id)
  expect(immutableShape.sharedStyle.name).toBe(sharedStyle.name)
  // make sure it can be logged
  log(immutableShape.sharedStyle)
})

test('should access a shared text style for immutable layers', () => {
  // the document we can get from the test context is not a proper MSDocument,
  // and we need one for StyledLayer.sharedStyle to work in this case
  const document = new Document()
  const { sharedStyle } = createSharedStyle(document, Text, {
    fontSize: 20,
  })
  sharedStyle.name = 'Shared Style with Big Text'

  const frame = new Group.Frame({
    name: 'Test',
    parent: document.selectedPage,
  })
  const text = new Text({
    text: 'Hello',
    sharedStyle,
    parent: frame,
  })
  const master = SymbolMaster.fromFrame(frame)
  const instance = master.createNewInstance()
  document.selectedPage.layers.push(instance)

  const immutableText = instance.expandedLayers.find((l) => l.id === text.id)
  expect(immutableText).toBeDefined()
  expect(immutableText.isImmutable()).toBe(true)
  expect(immutableText.sharedStyle).not.toBe(null)
  expect(immutableText.sharedStyle.isImmutable()).toBe(true)
  expect(immutableText.sharedStyle.id).toBe(sharedStyle.id)
  expect(immutableText.sharedStyle.name).toBe(sharedStyle.name)
  // make sure it can be logged
  log(immutableText.sharedStyle)
})

test('should access source library for foreign layer styles referenced by immutable layers', () => {
  let testOutputPath = outputPath()
  let testLibraryName =
    'sketch-api-unit-tests-library-layer-style-from-immutables-source'

  const libraryDocument = new Document()
  const { sharedStyle } = createSharedStyle(libraryDocument, Shape, {
    fills: ['#0000bbff'],
  })
  sharedStyle.name = 'Shared Style with Blue Fill'

  return new Promise((resolve, reject) => {
    libraryDocument.save(
      `${testOutputPath}/${testLibraryName}.sketch`,
      (err) => {
        libraryDocument.close()
        if (err) {
          return reject(err)
        }
        return resolve()
      }
    )
  }).then(() => {
    const lib = Library.getLibraryForDocumentAtPath(
      `${testOutputPath}/${testLibraryName}.sketch`
    )
    const document = new Document()
    const styleRefs = lib.getImportableLayerStyleReferencesForDocument(document)
    const importedStyle = styleRefs[0].import()

    const frame = new Group.Frame({
      name: 'Test',
      parent: document.selectedPage,
    })
    const shape = new Shape({
      sharedStyle: importedStyle,
      parent: frame,
    })
    const master = SymbolMaster.fromFrame(frame)
    const instance = master.createNewInstance()
    document.selectedPage.layers.push(instance)

    const immutableShape = instance.expandedLayers.find(
      (l) => l.id === shape.id
    )
    expect(immutableShape.sharedStyle).toBeDefined()
    expect(immutableShape.sharedStyle.getLibrary()).not.toBe(null)
    expect(immutableShape.sharedStyle.getLibrary()?.id).toBe(lib.id)
    expect(immutableShape.sharedStyle.getLibrary()?.name).toBe(lib.name)
    // Make sure it's a live library and not a stub
    expect(immutableShape.sharedStyle.getLibrary()?.valid).toBe(true)
    expect(immutableShape.sharedStyle.getLibrary()?.enabled).toBe(true)

    document.close()
    lib.remove()
  })
})

test('should access source library for foreign text styles referenced by immutable layers', () => {
  let testOutputPath = outputPath()
  let testLibraryName =
    'sketch-api-unit-tests-library-text-style-from-immutables-source'

  const libraryDocument = new Document()
  const { sharedStyle } = createSharedStyle(libraryDocument, Text, {
    fontSize: 20,
  })
  sharedStyle.name = 'Shared Style with Big Text'

  return new Promise((resolve, reject) => {
    libraryDocument.save(
      `${testOutputPath}/${testLibraryName}.sketch`,
      (err) => {
        libraryDocument.close()
        if (err) {
          return reject(err)
        }
        return resolve()
      }
    )
  }).then(() => {
    const lib = Library.getLibraryForDocumentAtPath(
      `${testOutputPath}/${testLibraryName}.sketch`
    )
    const document = new Document()
    const styleRefs = lib.getImportableTextStyleReferencesForDocument(document)
    const importedStyle = styleRefs[0].import()

    const frame = new Group.Frame({
      name: 'Test',
      parent: document.selectedPage,
    })
    const text = new Text({
      text: 'Hello',
      sharedStyle: importedStyle,
      parent: frame,
    })
    const master = SymbolMaster.fromFrame(frame)
    const instance = master.createNewInstance()
    document.selectedPage.layers.push(instance)

    const immutableText = instance.expandedLayers.find((l) => l.id === text.id)
    expect(immutableText.sharedStyle).toBeDefined()
    expect(immutableText.sharedStyle.getLibrary()).toBeDefined()
    expect(immutableText.sharedStyle.getLibrary()).not.toBe(null)
    expect(immutableText.sharedStyle.getLibrary()?.id).toBe(lib.id)
    expect(immutableText.sharedStyle.getLibrary()?.name).toBe(lib.name)
    // Make sure it's a live library and not a stub
    expect(immutableText.sharedStyle.getLibrary()?.valid).toBe(true)
    expect(immutableText.sharedStyle.getLibrary()?.enabled).toBe(true)

    document.close()
    lib.remove()
  })
})
