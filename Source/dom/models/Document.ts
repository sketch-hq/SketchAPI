import { WrappedObject, define } from '../WrappedObject'
import { Page } from '../layers/Page'
import { Selection } from './Selection'
import { toArray, getURLFromPath } from '../utils'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { SharedStyleType, SharedStyle } from './SharedStyle'
import { Layer } from '../layers/Layer'

export enum SaveModeType {
  Save = NSSaveOperationType.NSSaveOperation,
  SaveTo = NSSaveOperationType.NSSaveToOperation,
  SaveAs = NSSaveOperationType.NSSaveAsOperation,
}

/**
 * A Sketch document.
 */
export class Document extends WrappedObject<MSDocument | MSDocumentData> {
  static type = Types.Document
  static SaveMode = SaveModeType

  // override getting the id to make sure it's fine if we have an MSDocument
  @define<Document>({
    exportable: true,
    importable: false,
    get() {
      return String(this._getMSDocumentData().objectID())
    },
  })
  readonly id!: string

  @define<Document>({
    get() {
      if (!this.sketchObject) {
        return []
      }
      const pages = toArray<MSPage>(this.sketchObject.pages())
      return pages.map(page => Page.fromNative(page))
    },
    set(pages: Page[]) {
      // remove the existing pages
      this._getMSDocumentData().removePages_detachInstances(
        this.sketchObject.pages(),
        true
      )

      toArray(pages)
        .map(wrapObject)
        .forEach(page => {
          page.parent = this // eslint-disable-line
        })
    },
  })
  pages!: Page[]

  /**
   * The layers that the user has selected in the currently selected page.
   *
   * @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
   */
  @define<Document>({
    enumerable: false,
    exportable: false,
    importable: false,
    get() {
      return new Selection(this.selectedPage)
    },
  })
  readonly selectedLayers!: Selection

  /**
   * The current page that the user has selected.
   *
   * @return {Page} A page object representing the page that the user is currently viewing.
   */
  @define<Document>({
    enumerable: false,
    exportable: false,
    importable: false,
    get() {
      return Page.fromNative(this.sketchObject.currentPage())
    },
  })
  readonly selectedPage!: Page

  @define<Document>({
    get() {
      const url =
        this._tempURL || (this._getMSDocument() || { fileURL() {} }).fileURL()
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
  path!: string

  private _tempURL?: NSURL

  /**
   * Make a new document object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(document: { sketchObject?: MSDocument | MSDocumentData } = {}) {
    if (!document.sketchObject) {
      const app = NSDocumentController.sharedDocumentController()

      const error = MOPointer.alloc().init()

      // eslint-disable-next-line no-param-reassign
      document.sketchObject = app.openUntitledDocumentAndDisplay_error(
        true,
        error
      ) as MSDocument

      if (error.value() !== null) {
        throw new Error(error.value())
      }

      if (!document.sketchObject) {
        throw new Error('could not create a new Document')
      }
    }

    super(document)
  }

  _getMSDocument(): MSDocument {
    let msdocument = this.sketchObject
    if (msdocument && msdocument instanceof MSDocumentData) {
      // we only have an MSDocumentData instead of a MSDocument
      // let's try to get back to the MSDocument
      msdocument = msdocument.delegate() as MSDocument
    }

    return msdocument
  }

  _getMSDocumentData(): MSDocumentData {
    const msdocument = this.sketchObject

    if (msdocument && msdocument instanceof MSDocumentData) {
      return msdocument
    }

    return msdocument.documentData()
  }

  static getDocuments() {
    const app = NSDocumentController.sharedDocumentController()
    return toArray<MSDocument | MSDocumentData>(app.documents()).map(doc =>
      Document.fromNative(doc)
    )
  }

  static getSelectedDocument() {
    const app = NSDocumentController.sharedDocumentController()
    const nativeDocument = app.currentDocument()
    if (!nativeDocument) {
      return undefined
    }
    return Document.fromNative(nativeDocument as MSDocument | MSDocumentData)
  }

  /**
   * Find the first layer in this document which has the given id.
   */
  getLayerWithID(layerId: string) {
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
  getLayersNamed(layerName: string) {
    // search all pages
    let filteredArray = NSArray.array()
    const loopPages = this.sketchObject.pages().objectEnumerator()
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
   */
  getSymbolMasterWithID(symbolId: string) {
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

  _getSharedStyleWithIdAndType(
    sharedId: string,
    type: SharedStyleType
  ): SharedStyle | undefined {
    const documentData = this._getMSDocumentData()
    const sharedStyle = documentData[
      type === SharedStyleType.Layer ? 'layerStyleWithID' : 'textStyleWithID'
    ](sharedId)
    if (sharedStyle) {
      return wrapObject(sharedStyle)
    }
    return undefined
  }

  getSharedLayerStyleWithID(sharedId: string) {
    return this._getSharedStyleWithIdAndType(sharedId, SharedStyleType.Layer)
  }

  getSharedLayerStyles(): SharedStyle[] {
    const documentData = this._getMSDocumentData()
    return toArray(documentData.allLayerStyles()).map(wrapObject)
  }

  getSharedTextStyleWithID(sharedId: string) {
    return this._getSharedStyleWithIdAndType(sharedId, SharedStyleType.Text)
  }

  getSharedTextStyles(): SharedStyle[] {
    const documentData = this._getMSDocumentData()
    return toArray(documentData.allTextStyles()).map(wrapObject)
  }

  /**
   * Center the view of the document window on a given layer.
   *
   * @param {Layer} layer The layer to center on.
   */
  centerOnLayer(layer: Layer) {
    const wrappedLayer = wrapObject(layer)
    this._getMSDocument()
      .contentDrawView()
      .centerRect(wrappedLayer.sketchObject.rect())
  }

  static open(
    path?: string,
    callback?: (err: Error | null, document?: Document) => void
  ) {
    if (typeof path === 'function') {
      /* eslint-disable no-param-reassign */
      callback = path
      path = undefined
      /* eslint-enable */
    }

    const app = MSDocumentController.sharedDocumentController() as MSDocumentController

    if (!path) {
      const dialog = NSOpenPanel.openPanel()
      dialog.setAllowedFileTypes(['sketch'])
      dialog.setCanChooseFiles(true)
      dialog.setCanChooseDirectories(false)
      dialog.setAllowsMultipleSelection(false)
      const buttonClicked = dialog.runModal()
      if (buttonClicked != NSOKButton) {
        if (callback) {
          callback(null, undefined)
        }
        return undefined
      }

      const url = dialog.URLs()[0]
      const fiber = coscript.createFiber()

      app.openDocumentWithContentsOfURL_display_context_callback(
        url,
        true,
        coscript,
        (
          _document: MSDocument | MSDocumentData,
          documentWasAlreadyOpen: boolean,
          err?: NSException
        ) => {
          try {
            if (callback) {
              if (err && !err.isEqualTo(NSNull.null())) {
                callback(new Error(String(err.description())))
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
      return Document.fromNative(document as MSDocument | MSDocumentData)
    }

    let document
    const url = getURLFromPath(path)

    if (app.documentForURL(url)) {
      document = Document.fromNative(app.documentForURL(url) as
        | MSDocument
        | MSDocumentData)
      if (callback) {
        callback(null, document)
      }
      return document
    }

    const error = MOPointer.alloc().init()

    document = app.openDocumentWithContentsOfURL_display_error(url, true, error)

    if (error.value() !== null) {
      throw new Error(error.value())
    }

    document = Document.fromNative(document)

    if (callback) {
      callback(null, document)
    }
    return document
  }

  save(
    path?: string,
    options?: { saveMode?: SaveModeType },
    callback?: (err: Error | null, document: Document) => void
  ) {
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
      if (callback) {
        callback(new Error('Cannot save this document'), this)
      }
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
    const fiber = coscript.createFiber()
    const url = path ? getURLFromPath(path) : this._tempURL
    const { saveMode } = options || { saveMode: SaveModeType.SaveAs }
    const nativeSaveMode =
      (saveMode && SaveModeType[saveMode]) || saveMode || SaveModeType.SaveAs
    const that = this
    msdocument.saveDocumentToURL_saveMode_context_callback(
      url!,
      nativeSaveMode,
      coscript,
      (err: NSException) => {
        try {
          if (callback) {
            if (err && !err.isEqualTo(NSNull.null())) {
              callback(new Error(String(err.description())), that)
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

Factory.registerClass(Document, MSDocumentData)

// also register MSDocument if it exists
if (typeof MSDocument !== 'undefined') {
  Factory.registerClass(Document, MSDocument)
}
