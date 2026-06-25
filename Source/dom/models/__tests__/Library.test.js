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
    SymbolMaster.fromFrame(artboard)

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

function createDocument(testOutputPath = outputPath()) {
  const document = new Document()

  return new Promise((resolve, reject) => {
    document.save(
      `${testOutputPath}/sketch-api-unit-tests-document.sketch`,
      (err) => {
        if (err) {
          return reject(err)
        }
        return resolve()
      }
    )
  }).then(() => {
    return document
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
  return createLibrary().then((lib) => {
    try {
      const libraries = getLibraries()

      expect(libraries.length).toBeGreaterThan(0)
      expect(libraries[0].type).toBe('Library')
    } finally {
      lib.remove()
    }
  })
})

test('should only list available libraries by default', () => {
  return createLibrary().then((library) => {
    try {
      // We shouldn't see this library in the list because it's not available to use
      library.enabled = false
      expect(getLibraries().find((l) => l.id === library.id)).toBe(undefined)
      expect(Library.getLibraries().find((l) => l.id === library.id)).toBe(
        undefined
      )
    } finally {
      library.remove()
    }
  })
})

test('should list all libraries including unavailable when requested', () => {
  return createLibrary().then((library) => {
    try {
      // We should still see this library in the list even though it's disabled
      library.enabled = false

      const match = getLibraries({ includeUnavailable: true }).find(
        (l) => l.id === library.id
      )
      const matchWithStaticMethod = Library.getLibraries({
        includeUnavailable: true,
      }).find((l) => l.id === library.id)

      expect(match).toEqual(library)
      expect(matchWithStaticMethod).toEqual(library)
    } finally {
      library.remove()
    }
  })
})

test('should be able to get the list of symbols to be imported', () => {
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

test('should return references to already imported local copies of symbols if they exist', () => {
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

test('should support per-document libraries', () => {
  return Promise.all([createDocument(), createLibrary()]).then(
    ([document, library]) => {
      try {
        // (1)
        // Disable the library globally so we can test adding it to the document
        // without it being available by default
        library.enabled = false
        expect(
          Library.getLibraries().find((l) => l.id === library.id)
        ).toBeUndefined()
        expect(
          Library.getLibraries(document).find((l) => l.id === library.id)
        ).toBeUndefined()
        expect(
          document.getLibraries().find((l) => l.id === library.id)
        ).toBeUndefined()
        expect(
          document
            .getLibraries({ includeUnavailable: true })
            .find((l) => l.id === library.id)
        ).toBeDefined()

        // (2) Register this library as a document library
        document.addLibrary(library)
        // HACK: Libraries are normally loaded asynchronously when activated,
        // but we need it to happen immediately here so that Library.getLibraries()
        // will be able to pick it up as an available library on the next line
        {
          library.sketchObject.loadSynchronouslyAndEnableOnLoad(false)
        }
        expect(
          Library.getLibraries(document).find((l) => l.id === library.id)
        ).toBeDefined()
        expect(
          document.getLibraries().find((l) => l.id === library.id)
        ).toBeDefined()

        // (3) Remove the library from the document and check it's no longer listed
        document.removeLibrary(library)
        expect(
          Library.getLibraries(document).find((l) => l.id === library.id)
        ).toBeUndefined()
        expect(
          document.getLibraries().find((l) => l.id === library.id)
        ).toBeUndefined()
      } finally {
        library.remove()
        document.close()
      }
    }
  )
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
