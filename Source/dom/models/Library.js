import { toArray } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Document } from './Document'
import { getURLFromPath } from '../utils'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { ImportableObject, ImportableObjectType } from './ImportableObject'

const AddStatus = {
  0: 'ok',
  1: 'the library has already been added',
  2: 'the document is not in the new JSON format',
  3: 'there was a problem reading the asset library file',
}

const LibraryTypeMap = {
  0: 'Internal',
  1: 'LocalUser', // Previously `User`, is this a library added by a user.
  2: 'RemoteUser', // Previously `Remote`, is this a library that can be updated using an appcast.
  3: 'RemoteTeam', // Is this a library hosted on Sketch for Teams
  4: 'RemoteThirdParty', // Remote 3rd Party
}

const LibraryType = {
  Internal: 'Internal',
  LocalUser: 'LocalUser', // Previously `User`
  Remote: 'RemoteUser',
  RemoteTeam: 'RemoteTeam',
  RemoteThirdParty: 'RemoteThirdParty',
}

/* eslint-disable no-use-before-define, typescript/no-use-before-define */
export function getLibraries() {
  const libraryController = AppController.sharedInstance().librariesController()
  return toArray(libraryController.libraries()).map(
    Library.fromNative.bind(Library)
  )
}
/* eslint-enable */

/**
 * A Sketch Library.
 */
export class Library extends WrappedObject {
  constructor(library = {}) {
    if (!library.sketchObject) {
      throw new Error('Cannot create a new Library directly')
    }

    super(library)
  }

  static getLibraries() {
    return getLibraries()
  }

  static getLibraryForDocumentAtPath(path) {
    const libUrl = getURLFromPath(path)

    const libraryController = AppController.sharedInstance().librariesController()

    // check if we already imported the library
    const existingLibraries = libraryController.libraries()
    for (let i = 0; i < existingLibraries.count(); i += 1) {
      const existingLibrary = existingLibraries.objectAtIndex(i)
      const location = existingLibrary.locationOnDisk()
      if (location && location.isEqual(libUrl)) {
        return Library.fromNative(existingLibrary)
      }
    }

    // otherwise, let's add it
    const status = libraryController.addAssetLibraryAtURL(libUrl)

    if (status !== 0) {
      throw new Error(`Error while adding the library: ${AddStatus[status]}.`)
    }

    const lib = libraryController.userLibraries().firstObject()

    if (!lib) {
      throw new Error('could not find the added library')
    }

    // refresh the UI
    libraryController.notifyLibraryChange(lib)

    return Library.fromNative(lib)
  }

  static getRemoteLibraryWithRSS(appcast, callback) {
    const libUrl = NSURL.URLWithString(appcast)

    const libraryController = AppController.sharedInstance().librariesController()

    // check if we already imported the library
    const existingLibrary = libraryController.remoteLibraryWithAppcast(libUrl)
    if (existingLibrary) {
      callback(null, Library.fromNative(existingLibrary))
      return
    }

    const fiber = coscript.createFiber()

    // otherwise, let's add it
    libraryController.addRemoteLibraryFromAppcastURL_context_callback(
      libUrl,
      coscript,
      (lib, err) => {
        try {
          if (err && !err.isEqual(NSNull.null())) {
            callback(new Error(err.description()))
          } else {
            callback(null, Library.fromNative(lib))
          }
          fiber.cleanup()
        } catch (error) {
          fiber.cleanup()
          throw error
        }
      }
    )
  }

  getDocument() {
    if (!this._object.document() && !this._object.loadSynchronously()) {
      throw new Error(`could not get the document: ${this._object.status}`)
    }
    const document = Document.fromNative(this._object.document())
    if (this._object.appcastURL) {
      document._tempURL = this._object.appcastURL()
    } else if (this._object.locationOnDisk) {
      document._tempURL = this._object.locationOnDisk()
    }
    return document
  }

  getImportableReferencesForDocument(_document, objectType) {
    const document = wrapObject(_document)
    let provider
    switch (objectType) {
      case ImportableObjectType.Symbol:
        provider = MSForeignSymbolProvider.alloc().initWithDocument(
          document._getMSDocument()
        )
        break
      case ImportableObjectType.LayerStyle:
        provider = MSSharedLayerStyleProvider.alloc().initWithDocument(
          document._getMSDocument()
        )
        break
      case ImportableObjectType.TextStyle:
        provider = MSSharedTextStyleProvider.alloc().initWithDocument(
          document._getMSDocument()
        )
        break
      default:
        throw new Error('Unknown object type')
    }

    const collector = MSForeignObjectCollector.alloc().initWithProvider(
      provider
    )
    const shareableObjectRefsMap = collector.buildCollectionWithFilter(null)

    const currentId = this.id
    const currentName = this.name

    const shareableObjectRefsForCurrentLib = toArray(
      shareableObjectRefsMap
    ).find(
      o =>
        o.library &&
        String(o.library.libraryID()) === currentId &&
        String(o.library.name()) === currentName
    )

    if (!shareableObjectRefsForCurrentLib) {
      return []
    }
    const documentData = document._getMSDocumentData()
    return toArray(shareableObjectRefsForCurrentLib.objectRefs).map(ref => {
      const obj = ImportableObject.fromNative(ref)
      obj._documentData = documentData
      return obj
    })
  }

  getImportableSymbolReferencesForDocument(document) {
    return this.getImportableReferencesForDocument(
      document,
      ImportableObjectType.Symbol
    )
  }

  getImportableLayerStyleReferencesForDocument(document) {
    return this.getImportableReferencesForDocument(
      document,
      ImportableObjectType.LayerStyle
    )
  }

  getImportableTextStyleReferencesForDocument(document) {
    return this.getImportableReferencesForDocument(
      document,
      ImportableObjectType.TextStyle
    )
  }

  remove() {
    const libraryController = AppController.sharedInstance().librariesController()
    libraryController.removeAssetLibrary(this._object)
  }
}

Library.type = Types.Library
Library[DefinedPropertiesKey] = {
  ...WrappedObject[DefinedPropertiesKey],
}

// need to check if we have MSAssetLibrary because it won't be available on jenkins
if (typeof MSAssetLibrary !== 'undefined') {
  Factory.registerClass(Library, MSAssetLibrary)
  Factory.registerClass(Library, MSUserAssetLibrary)
  Factory.registerClass(Library, MSRemoteAssetLibrary)
}

Library.ImportableObjectType = ImportableObjectType

Library.define('id', {
  exportable: true,
  importable: false,
  get() {
    const id = this._object.libraryID()
    if (!id) {
      return undefined
    }
    return String(id)
  },
})

Library.define('name', {
  exportable: true,
  importable: false,
  get() {
    return String(this._object.name())
  },
})

Library.define('valid', {
  exportable: true,
  importable: false,
  get() {
    return !!this._object.valid()
  },
})

Library.define('enabled', {
  get() {
    return !!this._object.enabled()
  },

  set(enabled) {
    this._object.setEnabled(enabled)
  },
})

Library.define('lastModifiedAt', {
  exportable: true,
  importable: false,
  get() {
    const date = this._object.dateLastModified()
    if (!date) {
      return undefined
    }
    return new Date(date.timeIntervalSince1970() * 1000)
  },
})

Library.LibraryType = LibraryType
Library.define('libraryType', {
  exportable: true,
  importable: false,
  get() {
    const type = this._object.libraryType()
    return LibraryTypeMap[type] || type
  },
})
