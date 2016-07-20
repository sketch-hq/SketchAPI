// ********************************
// # Document.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { Layer } from './Layer.js'
import { Page } from './Page.js'
import { Selection } from './Selection.js'

/**
    A Sketch document.
*/

export class Document extends WrappedObject {
    /**
        Make a new document object.

        @param {MSDocument} document The underlying MSDocument object.
        @param {Application} application The application object.

        Note that constructing one of these doesn't actually create
        a Sketch document. Instead you pass in the underlying MSDocument
        that this object represents.

        If you do want to create a new document, you can do so with Application#newDocument.
    */

    constructor(document, application) {
      super(document)

      /**
        The application that this document belongs to.

        @type {Application}
      */

      this._application = application
    }

    /**
        The layers that the user has selected.

        @return {Selection} A selection object representing the layers that the user has selected.
    */

    get selectedLayers() {
      return new Selection(this._object);
    }

    /**
      The current page that the user has selected.

      @return {Page} A page object representing the page that the user is currently viewing.
    */

    get selectedPage() {
      print(this._object)
      return new Page(this._object.currentPage(), this)
    }

    /**
      Returns a list of the pages in this document.

      @return {list} The pages.
    */

    get pages() {
      var result = [];
      var loop = this._object.pages().objectEnumerator()
      var item;
      while (item = loop.nextObject()) {
        result.push(new Page(item, this));
      }
      return result;
    }

    /**
      Find the first layer in this document which has the given id.

      @return {Layer} A layer object, if one was found.
    */

    layerWithID(layer_id) {
      var layer = this._object._documentData().layerWithID_(layer_id);
      if (layer)
        return new Layer(layer, this);
    }

    /**
      Find the first layer in this document which has the given name.

      @return {Layer} A layer object, if one was found.
    */

    layerNamed(layer_name) {
      // As it happens, layerWithID also matches names, so we can implement
      // this method in the same way as layerWithID.
      // That might not always be true though, which is why the JS API splits
      // them into separate functions.

      var layer = this._object._documentData().layerWithID_(layer_name);
      if (layer)
        return new Layer(layer, this);
    }
}
