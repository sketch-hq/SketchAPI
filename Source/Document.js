// ********************************
// # Document.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject, DefinedPropertiesKey } from './WrappedObject'
import { Layer } from './Layer'
import { Page } from './Page'
import { Selection } from './Selection'
import { toArray } from './utils'
import { wrapNativeObject } from './wrapNativeObject'
import { Types } from './enums'
import { Factory } from './Factory'

/**
 * A Sketch document.
 */
export class Document extends WrappedObject {
  /**
   * Make a new document object.
   *
   * @param {MSDocument} document The underlying MSDocument object.
   * @param {Application} application The application object.
   *
   * Note that constructing one of these doesn't actually create
   * a Sketch document. Instead you pass in the underlying MSDocument
   * that this object represents.
   *
   * If you do want to create a new document, you can do so with Application#newDocument.
   */
  constructor(document = {}, application) {
    if (application) {
      log(
        'using a constructor to box a native object is deprecated. Use `fromNative` instead'
      )
      return Document.fromNative(document)
    }

    if (!document.sketchObject) {
      const app = NSDocumentController.sharedDocumentController()
      app.newDocument(Document)
      // eslint-disable-next-line no-param-reassign
      document.sketchObject = app.currentDocument()
    }

    super(document)
  }

  /**
   * Return a wrapped version of a Sketch object.
   * We don't know about *all* Sketch object types, but
   * for some we will return a special subclass.
   * The fallback position is just to return an instance of WrappedObject.
   *
   * @param {object} sketchObject The underlying sketch object that we're wrapping.
   * @return {WrappedObject} A javascript object (subclass of WrappedObject), which represents the Sketch object we were given.
   */
  wrapObject(sketchObject) {
    log('`document.wrapObject` is deprecated. Use `api.fromNative` instead')
    return wrapNativeObject(sketchObject)
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
  layerWithID(layerId) {
    const layer = this._object.documentData().layerWithID_(layerId)
    if (layer) {
      return Layer.fromNative(layer)
    }
    return undefined
  }

  /**
   * Find the first layer in this document which has the given name.
   *
   * @return {Layer} A layer object, if one was found.
   */
  layerNamed(layerName) {
    // As it happens, layerWithID also matches names, so we can implement
    // this method in the same way as layerWithID.
    // That might not always be true though, which is why the JS API splits
    // them into separate functions.

    const layer = this._object.documentData().layerWithID_(layerName)
    if (layer) {
      return Layer.fromNative(layer)
    }
    return undefined
  }

  /**
   * Iterate through a bunch of native Sketch layers, executing a block.
   * Used internally by Group and Selection.
   *
   * @param {array} layers The layers to iterate over.
   * @param {function(layer: Layer)} filter A filter function to call for each layer. If it returns false, the layer is skipped.
   * @param {function(layer: Layer)} block The function to execute for each layer.
   */
  iterateWithNativeLayers(layers, filter, block) {
    log(
      '`iterateWithNativeLayers` is deprecated, use `.layers.forEach` instead'
    )
    // if we're given a string as a filter, treat it as a function
    // to call on the layer
    let loopBlock = block
    if (typeof filter === 'string' || filter instanceof String) {
      loopBlock = layer => {
        if (layer[filter]) {
          block(layer)
        }
      }
    } else if (filter) {
      loopBlock = layer => {
        if (filter(layer)) {
          block(layer)
        }
      }
    }

    toArray(layers).forEach(item => {
      const layer = this.wrapObject(item)
      loopBlock(layer)
    })
  }

  /**
   * Center the view of the document window on a given layer.
   *
   * @param {Layer} layer The layer to center on.
   */
  centerOnLayer(layer) {
    this._object.contentDrawView().centerRect_(layer._object.rect())
  }
}

Document.type = Types.Document
Document[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Document, MSDocument)
