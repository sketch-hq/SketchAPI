// ********************************
// # Document.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { Rectangle } from './Rectangle.js'
import { Group } from './Group.js'
import { Text } from './Text.js'
import { Image } from './Image.js'
import { Shape } from './Shape.js'
import { Artboard } from './Artboard.js'
import { Page } from './Page.js'

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
      this.application = application
    }

    /**
        The layers that the user has selected.

        @return {Selection} A selection object representing the layers that the user has selected.
    */

    get selectedLayers() {
      return new Selection(this.object);
    }

    get selectedPage() {
      print(this.object)
      return new Page(this.object.currentPage(), this)
    }

    get pages() {
      var result = [];
      var loop = this.object.pages().objectEnumerator()
      var item;
      while (item = loop.nextObject()) {
        result.push(new Page(item, this));
      }
      return result;
    }

    layerWithID(layer_id) {
      return new Layer(this.object.documentData().layerWithID_(layer_id), this);
    }

    layerNamed(layer_id) {
      // as it happens, layerWithID also matches names
      var layer = this.object.documentData().layerWithID_(layer_id);

      if(layer) {
        // I think the wrapper needs to have a better key/value pair lookup table
        // that takes Native objects and routes them to their intended descriptor
        var wrapperToMake = this.application.factory["Layer"]

        if(layer instanceof MSPage) {
          wrapperToMake = this.application.factory["Page"]
        } else if(layer instanceof MSArtboardGroup) {
          wrapperToMake = this.application.factory["Artboard"]
        } else if(layer instanceof MSLayerGroup) {
          wrapperToMake = this.application.factory["Group"]
        } else if(layer instanceof MSShapeGroup) {
          wrapperToMake = this.application.factory["Shape"]
        } else if(layer instanceof MSTextLayer) {
          wrapperToMake = this.application.factory["Text"]
        } else if(layer instanceof MSBitmapLayer) {
          wrapperToMake = this.application.factory["Image"]
        }
        return new wrapperToMake(layer, this)
      }
    }
}
