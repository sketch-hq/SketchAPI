import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Page } from './Page'
import { Selection } from '../Selection'
import { toArray } from '../utils'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Factory } from '../Factory'

/**
 * A Sketch document.
 */
export class Document extends WrappedObject {
  /**
   * Make a new document object.
   *
   * @param {MSDocument} document The underlying MSDocument object.
   *
   * Note that constructing one of these doesn't actually create
   * a Sketch document. Instead you pass in the underlying MSDocument
   * that this object represents.
   *
   * If you do want to create a new document, you can do so with Application#newDocument.
   */
  constructor(document = {}) {
    if (!document.sketchObject) {
      const app = NSDocumentController.sharedDocumentController()
      app.newDocument(Document)
      // eslint-disable-next-line no-param-reassign
      document.sketchObject = app.currentDocument()
    }

    super(document)
  }

  /**
   * The layers that the user has selected in the currently selected page.
   *
   * @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
   */
  get selectedLayers() {
    return new Selection(this.selectedPage)
  }

  /**
   * The current page that the user has selected.
   *
   * @return {Page} A page object representing the page that the user is currently viewing.
   */
  get selectedPage() {
    return Page.fromNative(this._object.currentPage())
  }

  /**
   * Returns a list of the pages in this document.
   *
   * @return {list} The pages.
   */
  get pages() {
    const pages = toArray(this._object.pages())
    return pages.map(page => Page.fromNative(page))
  }

  /**
   * Find the first layer in this document which has the given id.
   *
   * @return {Layer} A layer object, if one was found.
   */
  getLayerWithID(layerId) {
    const layer = this._object.documentData().layerWithID(layerId)
    if (layer) {
      return wrapObject(layer)
    }
    return undefined
  }

  /**
   * Find the first layer in this document which has the given name.
   *
   * @return {Layer} A layer object, if one was found.
   */
  getLayerNamed(layerName) {
    // As it happens, layerWithID also matches names, so we can implement
    // this method in the same way as layerWithID.
    // That might not always be true though, which is why the JS API splits
    // them into separate functions.

    const layer = this._object.documentData().layerWithID(layerName)
    if (layer) {
      return wrapObject(layer)
    }
    return undefined
  }

  /**
   * Find the first symbol master in this document which has the given id.
   *
   * @return {SymbolMaster} A symbol master object, if one was found.
   */
  getSymbolMasterWithID(symbolId) {
    const symbol = this._object.documentData().symbolWithID(symbolId)
    if (symbol) {
      return wrapObject(symbol)
    }
    return undefined
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
}

Document.type = Types.Document
Document[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Document, MSDocumentData)
