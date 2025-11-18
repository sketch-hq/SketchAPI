/* globals expect, test */
import {
  Swatch,
  ShapePath,
  Library,
  Document,
  SymbolMaster,
  Artboard,
  Group,
  Text,
} from '../..'
import { outputPath } from '../../../test-utils'

test('should create swatch from hex string', () => {
  const swatch = Swatch.from('#FFFFFF')
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#FFFFFF')
})

test('should create swatch from object', () => {
  const swatch = Swatch.from({
    color: '#ffffff',
  })
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create swatch from object with name', () => {
  const swatch = Swatch.from({
    name: 'White',
    color: '#ffffff',
  })
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('White')
})

test('should create swatch from MSImmutableColor', () => {
  const color = MSImmutableColor.colorWithSVGString('#FFFFFF')
  const swatch = Swatch.from(color)
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create swatch from MSColor', () => {
  const color = MSImmutableColor.colorWithSVGString(
    '#FFFFFF'
  ).newMutableCounterpart()
  const swatch = Swatch.from(color)
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create swatch from NSColor', () => {
  const white = NSColor.whiteColor()
  const swatch = Swatch.from(white)
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create swatch from MSSwatch', () => {
  const color = MSImmutableColor.colorWithSVGString(
    '#FFFFFF'
  ).newMutableCounterpart()
  const nativeSwatch = MSSwatch.alloc().initWithName_color('#ffffff', color)
  const swatch = Swatch.from(nativeSwatch)
  expect(swatch.color).toBe('#ffffffff')
  expect(swatch.name).toBe('#ffffff')
})

test('should create referencing color', () => {
  const swatch = Swatch.from({
    name: 'Safety Orange',
    color: '#ff6600',
  })
  expect(swatch.referencingColor.isKindOfClass(MSColor)).toBeTruthy()
})

test('should update color', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600ff',
    },
  ]
  let swatch = document.swatches[0]

  let layer = new ShapePath({
    parent: document.selectedPage,
    style: {
      fills: [
        {
          swatch,
        },
      ],
    },
  })

  expect(layer.style.fills[0].color).toBe('#ff6600ff')

  swatch.color = '#aabbccff'

  expect(swatch.color).toBe('#aabbccff')
  // the referenced color on the layer should also update automatically
  expect(layer.style.fills[0].color).toBe('#aabbccff')
})

test('should instantiate local swatch by id', (_context, document) => {
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]
  let swatch = document.swatches[0]
  let expectedSwatchID = swatch.id

  let hostLayer = new ShapePath({
    parent: document.selectedPage,
    style: {
      fills: [
        {
          fillType: 'Color',
          color: swatch.referencingColor,
        },
      ],
    },
  })
  let resolvedSwatch = Swatch.instantiate(expectedSwatchID, hostLayer)

  expect(resolvedSwatch).toBeDefined()
  expect(resolvedSwatch.id).toBe(expectedSwatchID)
  expect(resolvedSwatch.name).toBe(swatch.name)
  expect(resolvedSwatch.color).toBe(swatch.color)
  expect(resolvedSwatch.getLibrary()).toBeUndefined()
})

test('should instantiate library swatch by id', () => {
  let testOutputPath = outputPath()
  let testLibraryName = 'sketch-api-unit-tests-instantiate-library-swatch'

  const document = new Document()
  document.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]

  return new Promise((resolve, reject) => {
    document.save(`${testOutputPath}/${testLibraryName}.sketch`, (err) => {
      document.close()
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  }).then(() => {
    const lib = Library.getLibraryForDocumentAtPath(
      `${testOutputPath}/${testLibraryName}.sketch`
    )
    const document2 = new Document()

    const swatchRefs = lib.getImportableSwatchReferencesForDocument(document2)
    const importedSwatch = swatchRefs[0].import()

    let hostLayer = new ShapePath({
      parent: document2.selectedPage,
      style: {
        fills: [
          {
            fillType: 'Color',
            color: importedSwatch.referencingColor,
          },
        ],
      },
    })
    let resolvedSwatch = Swatch.instantiate(importedSwatch.id, hostLayer)

    expect(resolvedSwatch).toBeDefined()
    expect(resolvedSwatch.id).toBe(importedSwatch.id)
    expect(resolvedSwatch.name).toBe(importedSwatch.name)
    expect(resolvedSwatch.color).toBe(importedSwatch.color)
    expect(resolvedSwatch.getLibrary()?.id).toBe(lib.id)

    document2.close()
    lib.remove()
  })
})

test('should instantiate swatches referenced by immutable layer', () => {
  // the document we can get from the test context is not a proper MSDocument,
  // and we need one for Swatch.instantiate to work in this case
  const document = new Document({
    swatches: [
      {
        name: 'Safety Orange',
        color: '#ff6600ff',
      },
      {
        name: 'Maximum Blue',
        color: '#47abffff',
      },
      {
        name: 'Lightish Green',
        color: '#66ff99ff',
      },
    ],
  })
  const swatch1 = document.swatches[0]
  const swatch2 = document.swatches[1]
  const swatch3 = document.swatches[2]

  const artboard = new Artboard({
    name: 'Test',
    parent: document.selectedPage,
  })
  const shape = new ShapePath({
    style: {
      fills: [
        {
          swatch: swatch1,
        },
      ],
      tint: {
        swatch: swatch2,
      },
    },
    parent: artboard,
  })
  const text = new Text({
    text: 'Hello',
    parent: artboard,
    style: {
      textSwatch: swatch3,
    },
  })
  // build the symbol master
  const master = SymbolMaster.fromFrame(artboard)
  const instance = master.createNewInstance()
  // add the instance to the page
  document.selectedPage.layers.push(instance)

  // find the immutable children referencing the swatches
  const immutableShape = instance.expandedLayers.find((l) => l.id === shape.id)
  const immutableText = instance.expandedLayers.find((l) => l.id === text.id)

  expect(immutableShape).toBeDefined()
  expect(immutableShape.isImmutable()).toBe(true)
  expect(immutableText).toBeDefined()
  expect(immutableText.isImmutable()).toBe(true)

  expect(immutableShape.style.fills[0].swatch).toBeDefined()
  expect(immutableShape.style.fills[0].swatch.isImmutable()).toBe(true)
  expect(immutableShape.style.fills[0].swatch.id).toBe(swatch1.id)
  expect(immutableShape.style.fills[0].swatch.name).toBe(swatch1.name)
  expect(immutableShape.style.fills[0].swatch.color).toBe(swatch1.color)

  expect(immutableShape.style.tint.swatch).toBeDefined()
  expect(immutableShape.style.tint.swatch.isImmutable()).toBe(true)
  expect(immutableShape.style.tint.swatch.id).toBe(swatch2.id)
  expect(immutableShape.style.tint.swatch.name).toBe(swatch2.name)
  expect(immutableShape.style.tint.swatch.color).toBe(swatch2.color)

  expect(immutableText.style.textSwatch).toBeDefined()
  expect(immutableText.style.textSwatch.isImmutable()).toBe(true)
  expect(immutableText.style.textSwatch.id).toBe(swatch3.id)
  expect(immutableText.style.textSwatch.name).toBe(swatch3.name)
  expect(immutableText.style.textSwatch.color).toBe(swatch3.color)
})

test('should access source library for foreign swatches referenced by immutable layers', () => {
  let testOutputPath = outputPath()
  let testLibraryName =
    'sketch-api-unit-tests-library-swatch-from-expandedLayers-source'

  const libraryDocument = new Document()
  libraryDocument.swatches = [
    {
      name: 'Safety Orange',
      color: '#ff6600',
    },
  ]

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
    const document2 = new Document()

    const swatchRefs = lib.getImportableSwatchReferencesForDocument(document2)
    const importedSwatch = swatchRefs[0].import()

    const frame = new Group.Frame({
      name: 'Test',
      parent: document2.selectedPage,
    })
    const shape = new ShapePath({
      style: {
        fills: [
          {
            swatch: importedSwatch,
          },
        ],
      },
      parent: frame,
    })
    const master = SymbolMaster.fromFrame(frame)
    const instance = master.createNewInstance()
    document2.selectedPage.layers.push(instance)

    const immutableShape = instance.expandedLayers.find(
      (l) => l.id === shape.id
    )
    expect(immutableShape).toBeDefined()
    expect(immutableShape.isImmutable()).toBe(true)

    const library = immutableShape.style.fills[0].swatch.getLibrary()
    expect(library).toBeDefined()
    expect(library.id).toBe(lib.id)
    expect(library.name).toBe(lib.name)
    // Make sure it's a live library and not a stub
    expect(library.valid).toBe(true)
    expect(library.enabled).toBe(true)

    document2.close()
    lib.remove()
  })
})
