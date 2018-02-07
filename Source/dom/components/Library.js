import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Document } from './Document'
import { toArray } from '../utils'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'

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
    const libraryController = AppController.sharedInstance().librariesController()
    return toArray(libraryController.libraries()).map(
      Library.fromNative.bind(Library)
    )
  }

  static createLibraryFromDocument(document, path) {
    if (typeof document === 'string' && !path) {
      /* eslint-disable no-param-reassign */
      path = document
      document = undefined
      /* eslint-enable */
    }

    const libUrl = NSURL.fileURLWithPath(path)

    if (document) {
      const wrappedDocument = wrapObject(document)
      wrappedDocument.save(libUrl)
    }

    const libraryController = AppController.sharedInstance().librariesController()
    const status = libraryController.addAssetLibraryAtURL(libUrl)

    if (status !== MSAssetLibraryControllerAddStatusOK) {
      throw new Error(`could not add the library: ${status}`)
    }

    const lib = toArray(libraryController.userLibraries()).find(l =>
      l.locationOnDisk.isEqual(libUrl)
    )

    if (!lib) {
      throw new Error('could not find the added library')
    }

    return Library.fromNative(lib)
  }

  get document() {
    if (!this._object.document() && !this._object.loadSynchronously()) {
      throw new Error(`could not get the document: ${this._object.status}`)
    }
    return Document.fromNative(this._object.document())
  }
}

Library.type = Types.Library
Library[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Library, MSAssetLibrary)

Library.define('id', {
  exportable: true,
  importable: false,
  get() {
    return String(this._object.libraryID())
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
  exportable: true,
  importable: false,
  get() {
    return !!this._object.enabled()
  },
})
