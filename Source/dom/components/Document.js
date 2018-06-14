import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Page } from './Page'
import { Selection } from '../Selection'
import { toArray, getURLFromPath } from '../utils'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Factory } from '../Factory'

export const SaveModeType = {
  Save: NSSaveOperation,
  SaveTo: NSSaveToOperation,
  SaveAs: NSSaveAsOperation,
}

/**
 * A Sketch document.
 */
export class Document extends WrappedObject {
  /**
   * Make a new document object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(document = {}) {
    if (!document.sketchObject) {
      const app = NSDocumentController.sharedDocumentController()

      const error = MOPointer.alloc().init()

      // eslint-disable-next-line no-param-reassign
      document.sketchObject = app.openUntitledDocumentAndDisplay_error(
        true,
        error
      )

      if (error.value() !== null) {
        throw new Error(error.value())
      }

      if (!document.sketchObject) {
        throw new Error('could not create a new Document')
      }
    }

    super(document)
  }

  _getMSDocument() {
    let msdocument = this._object
    if (msdocument && String(msdocument.class()) === 'MSDocumentData') {
      // we only have an MSDocumentData instead of a MSDocument
      // let's try to get back to the MSDocument
      msdocument = msdocument.delegate()
    }

    return msdocument
  }

  _getMSDocumentData() {
    const msdocument = this._object

    if (msdocument && String(msdocument.class()) === 'MSDocumentData') {
      return msdocument
    }

    return msdocument.documentData()
  }

  static getDocuments() {
    const app = NSDocumentController.sharedDocumentController()
    return toArray(app.documents()).map(doc => Document.fromNative(doc))
  }

  static getSelectedDocument() {
    const app = NSDocumentController.sharedDocumentController()
    const nativeDocument = app.currentDocument()
    if (!nativeDocument) {
      return undefined
    }
    return Document.fromNative(nativeDocument)
  }

  /**
   * Find the first layer in this document which has the given id.
   *
   * @return {Layer} A layer object, if one was found.
   */
  getLayerWithID(layerId) {
    const documentData = this._getMSDocumentData()
    const layer = documentData.layerWithID(layerId)
    if (layer) {
      return wrapObject(layer)
    }
    return undefined
  }

  /**
   * Find all the layers in this document which has the given name.
   */
  getLayersNamed(layerName) {
    // search all pages
    let filteredArray = NSArray.array()
    const loopPages = this._object.pages().objectEnumerator()
    let page = loopPages.nextObject()
    const predicate = NSPredicate.predicateWithFormat('name == %@', layerName)
    while (page) {
      const scope = page.children()
      filteredArray = filteredArray.arrayByAddingObjectsFromArray(
        scope.filteredArrayUsingPredicate(predicate)
      )
      page = loopPages.nextObject()
    }
    return toArray(filteredArray).map(wrapObject)
  }

  /**
   * Find the first symbol master in this document which has the given id.
   *
   * @return {SymbolMaster} A symbol master object, if one was found.
   */
  getSymbolMasterWithID(symbolId) {
    const documentData = this._getMSDocumentData()
    const symbol = documentData.symbolWithID(symbolId)
    if (symbol) {
      return wrapObject(symbol)
    }
    return undefined
  }

  getSymbols() {
    const documentData = this._getMSDocumentData()
    return toArray(documentData.allSymbols()).map(wrapObject)
  }

  /**
   * Center the view of the document window on a given layer.
   *
   * @param {Layer} layer The layer to center on.
   */
  centerOnLayer(layer) {
    const wrappedLayer = wrapObject(layer)
    this._object.contentDrawView().centerRect_(wrappedLayer.sketchObject.rect())
  }

  static open(path) {
    const app = NSDocumentController.sharedDocumentController()

    let document

    if (!path) {
      document = app.openUntitledDocumentAndDisplay_error(true,null)
    } else {
      const url = getURLFromPath(path)

      if (app.documentForURL(url)) {
        return Document.fromNative(app.documentForURL(url))
      }

      const error = MOPointer.alloc().init()

      document = app.openDocumentWithContentsOfURL_display_error(
        url,
        true,
        error
      )

      if (error.value() !== null) {
        throw new Error(error.value())
      }
    }

    return Document.fromNative(document)
  }

  save(path, options, callback) {
    /* eslint-disable no-param-reassign */
    if (typeof options === 'function') {
      callback = options
      options = {}
    } else if (typeof path === 'function') {
      callback = path
      options = {}
      path = undefined
    }
    /* eslint-enable */
    const msdocument = this._getMSDocument()
    const saveMethod = 'saveToURL_ofType_forSaveOperation_completionHandler'
    if (!msdocument || !msdocument[saveMethod]) {
      callback(new Error('Cannot save this document'), this)
      return
    }
    if (!path && !this._tempURL) {
      try {
        msdocument.saveDocument(null)
        callback(null, this)
      } catch (err) {
        callback(err, this)
      }
      return
    }
    const fiber = coscript.createFiber()
    const url = getURLFromPath(path) || this._tempURL
    const { saveMode } = options || {}
    const nativeSaveMode =
      SaveModeType[saveMode] || saveMode || NSSaveAsOperation
    const that = this
    msdocument[saveMethod](
      url,
      'com.bohemiancoding.sketch.drawing.single',
      nativeSaveMode,
      // eslint-disable-next-line
      __mocha__.createBlock_function('v16@?0@"NSError"8', function(err) {
        callback(err, that)
        fiber.cleanup()
      })
    )
  }

  close() {
    const msdocument = this._getMSDocument()

    if (!msdocument || !msdocument.close) {
      throw new Error('Cannot close this document')
    }

    msdocument.close()
  }
}

Document.type = Types.Document
Document[DefinedPropertiesKey] = {
  ...WrappedObject[DefinedPropertiesKey],
}
Factory.registerClass(Document, MSDocumentData)

// also register MSDocument if it exists
if (typeof MSDocument !== 'undefined') {
  Factory.registerClass(Document, MSDocument)
}

Document.SaveMode = SaveModeType

// override getting the id to make sure it's fine if we have an MSDocument
Document.define('id', {
  exportable: true,
  importable: false,
  get() {
    if (!this._object) {
      return undefined
    }
    if (!this._object.objectID) {
      return String(this._object.documentData().objectID())
    }
    return String(this._object.objectID())
  },
})

Document.define('pages', {
  get() {
    if (!this._object) {
      return []
    }
    const pages = toArray(this._object.pages())
    return pages.map(page => Page.fromNative(page))
  },
  set(pages) {
    // remove the existing pages
    this._object.removePages_detachInstances(this._object.pages(), true)

    toArray(pages)
      .map(wrapObject)
      .forEach(page => {
        page.parent = this // eslint-disable-line
      })
  },
})

/**
 * The layers that the user has selected in the currently selected page.
 *
 * @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
 */
Document.define('selectedLayers', {
  enumerable: false,
  exportable: false,
  importable: false,
  get() {
    return new Selection(this.selectedPage)
  },
})

/**
 * The current page that the user has selected.
 *
 * @return {Page} A page object representing the page that the user is currently viewing.
 */
Document.define('selectedPage', {
  enumerable: false,
  exportable: false,
  importable: false,
  get() {
    return Page.fromNative(this._object.currentPage())
  },
})

Document.define('path', {
  get() {
    const url = this._tempURL || this._getMSDocument().fileURL()
    if (url) {
      return String(url.absoluteString()).replace('file://', '')
    }
    return undefined
  },

  set(path) {
    const url = getURLFromPath(path)
    Object.defineProperty(this, '_tempURL', {
      enumerable: false,
      value: url,
    })
  },
})
