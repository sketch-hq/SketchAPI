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

    @param layer {MSBitmapLayer} The underlying model object from Sketch.
    @param document The document that the bitmap layer belongs to.
  */

  constructor(layer, document) {
    super(layer, document)
  }

  get isImage() {
    return true;
  }

  set imageURL(url) {
    var image = NSImage.alloc().initWithContentsOfURL_(url)
    var imageData = MSImageData.alloc().initWithImage_convertColorSpace_(image, true)
    this.object.setImage_(imageData)
  }
}
