/* globals expect, test */
import { isRunningOnJenkins } from '../../../test-utils'
import { Document } from '../Document'
import { Group } from '../Group'

test('should be able to log a document', (context, document) => {
  log(document)
  expect(true).toBe(true)
})

test('should return the pages', (context, document) => {
  const { pages } = document
  expect(pages.length).toBe(1)
  expect(pages[0]).toEqual(document.selectedPage)
})

test('should return the selected layers', (context, document) => {
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
})

test('should look for a layer by its id', (context, document) => {
  const page = document.selectedPage
  const group = new Group({
    name: 'Test',
    parent: page,
  })
  const { id } = group
  const found = document.getLayerWithID(id)
  expect(found).toEqual(group)
})

test('should look for a layer by its name', (context, document) => {
  const page = document.selectedPage
  const group = new Group({
    name: 'Test',
    parent: page,
  })
  const found = document.getLayersNamed('Test')
  expect(found).toEqual([group])
})

// some tests cannot really run on jenkins because it doesn't have access to MSDocument
if (!isRunningOnJenkins()) {
  let _document
  let documentId

  test('should create a new document', () => {
    _document = new Document()
    documentId = _document.id
    const documents = Document.getDocuments()
    expect(_document.type).toBe('Document')
    expect(documents.find(d => d.id === documentId)).toEqual(_document)
  })

  test('path should be undefined before saving it', () => {
    expect(_document.path).toBe(undefined)
  })

  test('should save a file', () =>
    new Promise((resolve, reject) => {
      _document.save(
        '~/Desktop/sketch-api-unit-tests.sketch',
        (err, result) => {
          if (err) {
            return reject(err)
          }
          return resolve(result)
        }
      )
    }).then(result => {
      expect(result).toBe(_document)
      expect(_document.path).toBe(
        String(
          NSString.stringWithString(
            '~/Desktop/sketch-api-unit-tests.sketch'
          ).stringByExpandingTildeInPath()
        )
      )
    }))

  test('should save a file without specifying the path', () =>
    new Promise((resolve, reject) => {
      _document.save((err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      })
    }).then(result => {
      expect(result).toBe(_document)
      expect(_document.path).toBe(
        String(
          NSString.stringWithString(
            '~/Desktop/sketch-api-unit-tests.sketch'
          ).stringByExpandingTildeInPath()
        )
      )
    }))

  test('should save a file to a specific path when setting the path', () => {
    _document.path = '~/Desktop/sketch-api-unit-tests-2.sketch'
    return new Promise((resolve, reject) => {
      _document.save((err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      })
    }).then(result => {
      expect(result).toBe(_document)
      expect(_document.path).toBe(
        String(
          NSString.stringWithString(
            '~/Desktop/sketch-api-unit-tests-2.sketch'
          ).stringByExpandingTildeInPath()
        )
      )
    })
  })

  test('should close a file', () => {
    _document.close()
    const documents = Document.getDocuments()
    expect(documents.find(d => d.id === documentId)).toBe(undefined)
  })

  test('should open a file', () => {
    const document = Document.open('~/Desktop/sketch-api-unit-tests.sketch')
    const documents = Document.getDocuments()
    expect(documents.find(d => d.id === document.id)).toEqual(document)
    // close it again because when watching the tests, it will open dozens of documents
    document.close()
  })

  test('should fail to open a non-existing file', () => {
    try {
      Document.open('~/Desktop/non-existing-sketch-api-unit-tests.sketch')
      expect(true).toBe(false)
    } catch (err) {
      expect(err.message).toMatch(
        'couldn’t be opened because there is no such file'
      )
    }
  })
}
