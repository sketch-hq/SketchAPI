import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Page } from '../layers/Page'
import { Selection } from './Selection'
import { toArray, getURLFromPath } from '../utils'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { SharedStyleType } from './SharedStyle'

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

    if (
      msdocument &&
      (String(msdocument.class()) === 'MSDocumentData' ||
        String(msdocument.class()) === 'MSImmutableDocumentData')
    ) {
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

  _getSharedStyleWithIdAndType(sharedId, type) {
    const documentData = this._getMSDocumentData()
    const sharedStyle = documentData[
      type === SharedStyleType.Layer ? 'layerStyleWithID' : 'textStyleWithID'
    ](sharedId)
    if (sharedStyle) {
      return wrapObject(sharedStyle)
    }
    return undefined
  }

  getSharedLayerStyleWithID(sharedId) {
    return this._getSharedStyleWithIdAndType(sharedId, SharedStyleType.Layer)
  }

  getSharedLayerStyles() {
    const documentData = this._getMSDocumentData()
    return toArray(documentData.allLayerStyles()).map(wrapObject)
  }

  getSharedTextStyleWithID(sharedId) {
    return this._getSharedStyleWithIdAndType(sharedId, SharedStyleType.Text)
  }

  getSharedTextStyles() {
    const documentData = this._getMSDocumentData()
    return toArray(documentData.allTextStyles()).map(wrapObject)
  }

  /**
   * Center the view of the document window on a given layer.
   *
   * @param {Layer} layer The layer to center on.
   */
  centerOnLayer(layer) {
    if (this.isImmutable()) {
      return
    }
    const wrappedLayer = wrapObject(layer)
    this._object.contentDrawView().centerRect_(wrappedLayer.sketchObject.rect())
  }

  static open(path, callback) {
    if (typeof path === 'function') {
      /* eslint-disable no-param-reassign */
      callback = path
      path = undefined
      /* eslint-enable */
    }

    const app = NSDocumentController.sharedDocumentController()

    if (!path) {
      const dialog = NSOpenPanel.openPanel()
      dialog.allowedFileTypes = ['sketch']
      dialog.canChooseFiles = true
      dialog.canChooseDirectories = false
      dialog.allowsMultipleSelection = false
      const buttonClicked = dialog.runModal()
      if (buttonClicked != NSOKButton) {
        if (callback) callback(null, undefined)
        return undefined
      }

      const url = dialog.URLs()[0]
      const fiber = coscript.createFiber()

      app.openDocumentWithContentsOfURL_display_context_callback(
        url,
        true,
        coscript,
        (_document, documentWasAlreadyOpen, err) => {
          try {
            if (callback) {
              if (err && !err.isEqual(NSNull.null())) {
                callback(new Error(err.description()))
              } else {
                callback(null, Document.fromNative(_document))
              }
            }
            fiber.cleanup()
          } catch (error) {
            fiber.cleanup()
            throw error
          }
        }
      )

      // return the current document to maintain backward compatibility
      // but that's not the right document...
      const document = app.currentDocument()
      return Document.fromNative(document)
    }

    let document
    const url = getURLFromPath(path)

    if (app.documentForURL(url)) {
      document = Document.fromNative(app.documentForURL(url))
      if (callback) callback(null, document)
      return document
    }

    const error = MOPointer.alloc().init()

    document = app.openDocumentWithContentsOfURL_display_error(url, true, error)

    if (error.value() !== null) {
      throw new Error(error.value())
    }

    document = Document.fromNative(document)

    if (callback) callback(null, document)
    return document
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
      if (callback) callback(new Error('Cannot save this document'), this)
      return
    }
    if (!path && !this._tempURL) {
      try {
        msdocument.saveDocument(null)
        if (callback) callback(null, this)
      } catch (err) {
        if (callback) callback(err, this)
      }
      return
    }

    const url = getURLFromPath(path) || this._tempURL
    const { saveMode, iKnowThatImOverwritingAFolder } = options || {}

    if (
      (!url.pathExtension() || !String(url.pathExtension())) &&
      !iKnowThatImOverwritingAFolder
    ) {
      throw new Error(
        'Attempting to overwrite a folder! If you really mean to do that, set the `iKnowThatImOverwritingAFolder` option to `true`'
      )
    }

    const fiber = coscript.createFiber()

    const nativeSaveMode =
      SaveModeType[saveMode] || saveMode || NSSaveAsOperation
    const that = this
    msdocument.saveDocumentToURL_saveMode_context_callback(
      url,
      nativeSaveMode,
      coscript,
      err => {
        try {
          if (callback) {
            if (err && !err.isEqual(NSNull.null())) {
              callback(new Error(err.description()), that)
            } else {
              callback(null, that)
            }
          }
          fiber.cleanup()
        } catch (error) {
          fiber.cleanup()
          throw error
        }
      }
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
Factory.registerClass(Document, MSImmutableDocumentData)

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
    if (this.isImmutable()) {
      return
    }
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
    const url =
      this._tempURL || (this._getMSDocument() || { fileURL() {} }).fileURL()
    if (url) {
      return String(url.absoluteString()).replace('file://', '')
    }
    return undefined
  },

  set(path) {
    if (this.isImmutable()) {
      return
    }
    const url = getURLFromPath(path)
    Object.defineProperty(this, '_tempURL', {
      enumerable: false,
      value: url,
    })
  },
})
