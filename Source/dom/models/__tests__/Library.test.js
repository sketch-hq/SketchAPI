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

function createLibrary(testOutputPath = outputPath()) {
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
  return createLibrary().then((lib) => {
    try {
      expect(lib.type).toBe('Library')
      expect(getLibraries().find((d) => d.id === lib.id)).toEqual(lib)
    } finally {
      lib.remove()
    }
  })
})

test('should list the libraries', () => {
  const libraries = getLibraries()

  expect(libraries.length).toBeGreaterThan(0)
  expect(libraries[0].type).toBe('Library')
})

test('should be able to get the list of symbols to be imported', (_context, documentData) => {
  return createLibrary().then((lib) => {
    try {
      // Library.getImportableSymbolReferencesForDocument() and its sibling methods all expect
      // an actual Document as an argument, not a DocumentData we get from the test environment
      const document = new Document()
      const importableSymbols = lib.getImportableSymbolReferencesForDocument(
        document
      )
      expect(importableSymbols[0].type).toBe('ImportableObject')
      expect(importableSymbols[0].name).toBe('Test')
      expect(importableSymbols[0].objectType).toBe(
        Library.ImportableObjectType.Symbol
      )
    } finally {
      lib.remove()
    }
  })
})

test('should return references to already imported local copies of symbols if they exist', (_context, _) => {
  return createLibrary().then((lib) => {
    try {
      const document = new Document()
      const refBeforeImport = lib.getImportableSymbolReferencesForDocument(
        document
      )[0]
      expect(refBeforeImport.sketchObject.remoteReference()).toBeNull()

      refBeforeImport.import()

      const refAfterImport = lib.getImportableSymbolReferencesForDocument(
        document
      )[0]
      expect(refAfterImport.sketchObject.remoteReference()).not.toBeNull()
    } finally {
      lib.remove()
    }
  })
})

test('should disable a library', () => {
  return createLibrary().then((lib) => {
    try {
      expect(lib.enabled).toBe(true)
      lib.enabled = false
      expect(lib.enabled).toBe(false)
      lib.enabled = true
      expect(lib.enabled).toBe(true)
    } finally {
      lib.remove()
    }
  })
})

test('should get the lastModifiedAt date', () => {
  return createLibrary().then((lib) => {
    try {
      expect(lib.lastModifiedAt instanceof Date).toBe(true)
    } finally {
      lib.remove()
    }
  })
})

test('should get the document of the library', () => {
  const testOutputPath = outputPath()

  return createLibrary(testOutputPath).then((lib) => {
    try {
      const libDocument = lib.getDocument()

      expect(libDocument.type).toBe('Document')
      expect(libDocument.path).toBe(
        String(
          NSString.stringWithString(
            `${testOutputPath}/sketch-api-unit-tests-library.sketch`
          )
        )
      )
    } finally {
      lib.remove()
    }
  })
})

test('should remove a library', () => {
  return createLibrary().then((lib) => {
    lib.remove()

    expect(getLibraries().find((d) => d.id === lib.id)).toBe(undefined)
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
