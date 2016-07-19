// ********************************
// # Page.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

/**
  Represents a Page in a Sketch document.
 */

export class Page extends Layer {

  /**
    Make a new page object.

    @param page {MSPage} The underlying model object from Sketch.
    @param document The document that the page belongs to.
  */


  constructor(page, document) {
    super(page)
    this.document = document
  }

  /**
      Is this a page?

      All Layer objects respond to this method, but only pages return true.

      @return true {bool} for instances of Group, false for any other layer type.
  */

  get isPage() {
    return true;
  }
}
