/* globals expect, test */
import { outputPath } from '../../../test-utils'
import {
  Artboard,
  Text,
  SymbolMaster,
  Library,
  getLibraries,
  Document,
} from '../..'

const testOutputPath = outputPath()

function createLibrary() {
  const document = new Document()

  return new Promise((resolve, reject) => {
    const artboard = new Artboard({
      name: 'Test',
      parent: document.selectedPage,
    })
    new Text({
      text: 'Test value',
      parent: artboard,
    })
    SymbolMaster.fromArtboard(artboard)

    document.save(
      `${testOutputPath}/sketch-api-unit-tests-library.sketch`,
      (err) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      }
    )
  }).then(() => {
    document.close()

    return Library.getLibraryForDocumentAtPath(
      `${testOutputPath}/sketch-api-unit-tests-library.sketch`
    )
  })
}

test('should create a library from a document', () => {
  createLibrary().then((lib) => {
    expect(lib.type).toBe('Library')
    expect(getLibraries().find((d) => d.id === lib.id)).toEqual(lib)
  })
})

test('should list the libraries', () => {
  const libraries = getLibraries()

  expect(libraries.length).toBeGreaterThan(0)
  expect(libraries[0].type).toBe('Library')
})

test('should be able to get the list of symbols to be imported', () => {
  createLibrary().then((lib) => {
    expect(lib.getImportableSymbolReferencesForDocument(document)[0].type).toBe(
      'ImportableObject'
    )
  })
})

test('should disable a library', () => {
  createLibrary().then((lib) => {
    expect(lib.enabled).toBe(true)
    lib.enabled = false
    expect(lib.enabled).toBe(false)
    lib.enabled = true
    expect(lib.enabled).toBe(true)
  })
})

test('should get the lastModifiedAt date', () => {
  createLibrary().then((lib) => {
    expect(lib.lastModifiedAt instanceof Date).toBe(true)
  })
})

test('should get the document of the library', () => {
  createLibrary().then((lib) => {
    const libDocument = lib.getDocument()

    expect(libDocument.type).toBe('Document')
    expect(libDocument.path).toBe(
      String(
        NSString.stringWithString(
          `${testOutputPath}/sketch-api-unit-tests-library.sketch`
        )
      )
    )
  })
})

test('should remove a library', () => {
  createLibrary().then((lib) => {
    lib.remove()

    expect(getLibraries().find((d) => d.id === libId)).toBe(undefined)
  })
})

/*
test('should add a remote library', () =>
  new Promise((resolve, reject) => {
    Library.getRemoteLibraryWithRSS(
      'https://client.sketch.cloud/v1/shares/PR8z1/rss',
      (err, result) => {
        if (err) {
          return reject(err)
        }
        return resolve(result)
      }
    )
  }).then((result) => {
    expect(result.libraryType).toBe(Library.LibraryType.RemoteThirdParty)
    result.remove()
  }))
*/
