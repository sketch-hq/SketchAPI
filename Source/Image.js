// ********************************
// # Image.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { Layer } from './Layer.js'

export class Image extends Layer {
  constructor(page, document) {
    super(page, document)
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
