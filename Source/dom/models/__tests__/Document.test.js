/* globals expect, test */
import {
  createSymbolMaster,
  createSharedStyle,
  canBeLogged,
  outputPath,
} from '../../../test-utils'
import { Document, Group, Shape, Text, Swatch, getDocuments } from '../..'

const testOutputPath = outputPath()

test('should be able to log a document', (_context, document) => {
  expect(true).toBe(true)
  canBeLogged(document, Document)
})

test('should return the pages', (_context, document) => {
  const { pages } = document
  expect(pages.length).toBe(1)
  expect(pages[0]).toEqual(document.selectedPage)
})

test('should return the selected layers', (_context, document) => {
  const selection = document.selectedLayers
  expect(selection.isEmpty).toBe(true)

  const page = document.selectedPage
  const group = new Group({
    name: 'Test',
    parent: page,
    selected: true,
  })

  expect(group.selected).not.toBe(false)
  expect(selection.isEmpty).toBe(false)

  document.selectedLayers = [] // eslint-disable-line
  expect(selection.isEmpty).toBe(true)
})

test('should look for a layer by its id', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    name: 'Test',
    parent: page,
  })
  const { id } = group
  const found = document.getLayerWithID(id)
  expect(found).toEqual(group)
})

test('should look for a layer by its name', (_context, document) => {
  const page = document.selectedPage
  const group = new Group({
    name: 'Test',
    parent: page,
  })
  const found = document.getLayersNamed('Test')
  expect(found).toEqual([group])
})

test('should look for a symbol by its symbolId', (_context, document) => {
  const { master } = createSymbolMaster(document)

  expect(document.getSymbolMasterWithID(master.symbolId)).toEqual(master)
})

test('should list all the symbols', (_context, document) => {
  const { master } = createSymbolMaster(document)

  expect(document.getSymbols()).toEqual([master])
})

test('should look for a shared layer style by its id', (_context, document) => {
  const { sharedStyle } = createSharedStyle(document, Shape)

  expect(document.getSharedLayerStyleWithID(sharedStyle.id)).toEqual(
    sharedStyle
  )
})

test('should list all the shared layer styles', (_context, document) => {
  const { sharedStyle } = createSharedStyle(document, Shape)

  expect(document.sharedLayerStyles.length).toBe(1)
  expect(document.sharedLayerStyles[0]).toEqual(sharedStyle)

  document.sharedLayerStyles.push({
    name: 'test2',
    style: { fills: ['#000'] },
  })

  expect(document.sharedLayerStyles.length).toBe(2)

  document.sharedLayerStyles.pop()

  expect(document.sharedLayerStyles.length).toBe(1)
})

test('should look for a shared text style by its id', (_context, document) => {
  const { sharedStyle } = createSharedStyle(document, Text)

  expect(document.getSharedTextStyleWithID(sharedStyle.id)).toEqual(sharedStyle)
})

test('should list all the shared text styles', (_context, document) => {
  const { sharedStyle } = createSharedStyle(document, Text)

  expect(document.sharedTextStyles.length).toBe(1)
  expect(document.sharedTextStyles[0]).toEqual(sharedStyle)
})

test('should reset document colors', (_context, document) => {
  const doc = document
  doc.colors = ['#FFFFFF', '#AAAAAA']
  expect(document.colors[0].color).toEqual('#ffffffff')
  expect(document.colors[1].color).toEqual('#aaaaaaff')
})

test('should append document colors', (_context, document) => {
  const doc = document
  doc.colors = ['000000']
  doc.colors.push('#FFFFFF')
  expect(document.colors.length).toEqual(2)
  expect(document.colors[1].color).toEqual('#ffffffff')
})

test('should remove document color', (_context, document) => {
  const doc = document
  doc.colors = ['#FFFFFF', '#000000']
  expect(document.colors.length).toEqual(2)
  doc.colors.splice(1, 1)
  expect(document.colors.length).toEqual(1)
  expect(document.colors[0].color).toEqual('#ffffffff')
})

test('should reset document gradients', (_context, document) => {
  const doc = document
  doc.gradients = [
    {
      gradient: {},
      name: 'Gradient 1',
    },
    {
      gradient: {},
      name: 'Gradient 2',
    },
  ]
  expect(document.gradients[0].name).toEqual('Gradient 1')
  expect(document.gradients[1].name).toEqual('Gradient 2')
})

test('should append document gradients', (_context, document) => {
  const doc = document
  doc.gradients = [{ gradient: {}, name: 'Gradient 1' }]
  doc.gradients.push({ gradient: {}, name: 'Gradient 2' })
  expect(document.gradients.length).toEqual(2)
  expect(document.gradients[0].name).toEqual('Gradient 1')
  expect(document.gradients[1].name).toEqual('Gradient 2')
})

test('should remove document gradients', (_context, document) => {
  const doc = document
  doc.gradients = [
    {
      gradient: {},
      name: 'Gradient 1',
    },
    {
      gradient: {},
      name: 'Gradient 2',
    },
  ]
  expect(document.gradients.length).toEqual(2)
  doc.gradients.splice(0, 1)
  expect(document.gradients.length).toEqual(1)
  expect(document.gradients[0].name).toEqual('Gradient 2')
})

test('should create a new document', () => {
  const document = new Document()
  const documentId = document.id

  expect(document.type).toBe('Document')
  expect(getDocuments().find((d) => d.id === documentId)).toEqual(document)
  document.close()
})

test('path should be undefined before saving it', () => {
  const document = new Document()
  expect(document.path).toBe(undefined)
  document.close()
})

test('should save a file', () => {
  const document = new Document()

  new Promise((resolve, reject) => {
    document.save(
      `${testOutputPath}/sketch-api-unit-tests.sketch`,
      (err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      }
    )
  }).then((result) => {
    expect(result).toBe(document)
    expect(document.path).toBe(
      String(
        NSString.stringWithString(
          `${testOutputPath}/sketch-api-unit-tests.sketch`
        )
      )
    )
    document.close()
  })
})

test('should save a file without specifying the path', () => {
  const document = new Document()

  new Promise((resolve, reject) => {
    document.save((err, result) => {
      if (err) {
        return reject(err)
      }
      return resolve(result)
    })
  }).then((result) => {
    expect(result).toBe(document)
    expect(document.path).toBe(
      String(
        NSString.stringWithString(
          `${testOutputPath}/sketch-api-unit-tests.sketch`
        )
      )
    )
    document.close()
  })
})

test('should save a file to a specific path when setting the path', () => {
  const document = new Document()

  document.path = `${testOutputPath}/sketch-api-unit-tests-2.sketch`
  return new Promise((resolve, reject) => {
    document.save((err, result) => {
      if (err) {
        return reject(err)
      }
      return resolve(result)
    })
  }).then((result) => {
    expect(result).toBe(document)
    expect(document.path).toBe(
      String(
        NSString.stringWithString(
          `${testOutputPath}/sketch-api-unit-tests-2.sketch`
        )
      )
    )
    document.close()
  })
})

test('should close a file', () => {
  const document = new Document()
  const { id } = document

  document.close()

  expect(getDocuments().find((d) => d.id === id)).toBe(undefined)
})

test('should open a file', () => {
  const document = new Document()
  const filepath = `${testOutputPath}/should-open-a-file.sketch` 

  document.path = filepath
  return new Promise((resolve, reject) => {
    document.save((err, result) => {
      if (err) { return reject(err) }
      return resolve(result)
    })
  }).then(() => {
    document.close()

    const openedDocument = Document.open(filepath)
    expect(getDocuments().find((d) => d.id === openedDocument.id)).toEqual(openedDocument)

    openedDocument.close()
  })
})

test('should fail to open a non-existing file', () => {
  try {
    Document.open(`${testOutputPath}/non-existing-sketch-api-unit-tests.sketch`)
    expect(true).toBe(false) // open should not fail and throw an error, hence this expectation should never be met
  } catch (err) {
    expect(err.message).toMatch(
      'couldn’t be opened because there is no such file'
    )
  }
})

test('should have defined colorSpace enums', () => {
  expect(Document.ColorSpace.Unmanaged).toBe('Unmanaged')
  expect(Document.ColorSpace.sRGB).toBe('sRGB')
  expect(Document.ColorSpace.P3).toBe('P3')
})

test('should have a colorSpace getter', (_context, document) => {
  expect(document.colorSpace).toBe(Document.ColorSpace.Unmanaged)
})

test('colorSpace setter should assign color profiles', (_context, document) => {
  // eslint-disable-next-line no-param-reassign
  document.colorSpace = Document.ColorSpace.sRGB
  expect(document.colorSpace).toBe(Document.ColorSpace.sRGB)
  // eslint-disable-next-line no-param-reassign
  document.colorSpace = Document.ColorSpace.P3
  expect(document.colorSpace).toBe(Document.ColorSpace.P3)
})

test('throws when setting an invalid colorSpace', (_context, document) => {
  try {
    // eslint-disable-next-line no-param-reassign
    document.colorSpace = 'foo'
    expect(true).toBe(false)
  } catch (err) {
    expect(err instanceof Error).toBe(true)
  }
})

test('throws when changing to an invalid color space', (_context, document) => {
  try {
    document.changeColorSpace('foo')
    expect(true).toBe(false)
  } catch (err) {
    expect(err instanceof Error).toBe(true)
  }
})

test('can assign the sRGB color space', (_context, document) => {
  document.changeColorSpace(Document.ColorSpace.sRGB)
  expect(document.colorSpace).toBe(Document.ColorSpace.sRGB)
})

test('can convert to the sRGB color space', (_context, document) => {
  document.changeColorSpace(Document.ColorSpace.sRGB, true)
  expect(document.colorSpace).toBe(Document.ColorSpace.sRGB)
})

test('can assign the P3 color space', (_context, document) => {
  document.changeColorSpace(Document.ColorSpace.P3)
  expect(document.colorSpace).toBe(Document.ColorSpace.P3)
})

test('can convert to the P3 color space', (_context, document) => {
  document.changeColorSpace(Document.ColorSpace.P3, true)
  expect(document.colorSpace).toBe(Document.ColorSpace.P3)
})

// Swatches
test('can list swatches in Document', (_context, document) => {
  expect(Array.isArray(document.swatches)).toBe(true)
})

test('can add a swatch to Document', (_context, document) => {
  let newSwatch = Swatch.from('#ff6600')
  document.swatches.push(newSwatch)
  expect(document.swatches.length).toBe(1)
  document.swatches.push(newSwatch)
  expect(document.swatches.length).toBe(2)
})

test('can remove a swatch from Document', (_context, document) => {
  const swatchOne = Swatch.from('#ffffff')
  const swatchTwo = Swatch.from('#000000')
  document.swatches = [swatchOne, swatchTwo]
  expect(document.swatches.length).toBe(2)
  document.swatches.pop()
  expect(document.swatches.length).toBe(1)
  document.swatches.pop()
  expect(document.swatches.length).toBe(0)
})

test('can replace all swatches in Document', (_context, document) => {
  const swatchOne = Swatch.from('#ffffff')
  const swatchTwo = Swatch.from('#000000')
  document.swatches = [swatchOne, swatchTwo]
  expect(document.swatches.length).toBe(2)
  document.swatches = [swatchOne]
  expect(document.swatches.length).toBe(1)
})

test('can remove all swatches in Document', (_context, document) => {
  const swatchOne = Swatch.from('#ffffff')
  const swatchTwo = Swatch.from('#000000')
  document.swatches = [swatchOne, swatchTwo]
  expect(document.swatches.length).toBe(2)
  document.swatches = []
  expect(document.swatches.length).toBe(0)
})
