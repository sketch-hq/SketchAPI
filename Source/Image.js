// ********************************
// # Image.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

/**
  Represents an image layer.
 */

export class Image extends Layer {

  /**
    Make a new image layer object.

    @param {MSBitmapLayer} layer The underlying model object from Sketch.
    @param {Document} document The document that the bitmap layer belongs to.
  */

  constructor(layer, document) {
    super(layer, document)
  }

  /**
      Is this an image layer?

      All Layer objects respond to this method, but only image layers return true.

      @return {bool} true for instances of Group, false for any other layer type.
  */

  get isImage() {
    return true;
  }

  set imageURL(url) {
    var image = NSImage.alloc().initWithContentsOfURL_(url)
    var imageData = MSImageData.alloc().initWithImage_convertColorSpace_(image, true)
    this._object.setImage_(imageData)
  }
}
