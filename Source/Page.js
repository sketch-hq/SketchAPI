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

    @param {MSPage} page The underlying model object from Sketch.
    @param document The document that the page belongs to.
  */

  constructor(page, document) {
    super(page)
    this._document = document
  }

  /**
      Is this a page?

      All Layer objects respond to this method, but only pages return true.

      @return {bool} true for instances of Group, false for any other layer type.
  */

  get isPage() {
    return true;
  }

  /**
      Returns a newly created artboard, which has been added to this page,
      and sets it up using the supplied properties.

      @param properties {dictionary} Properties to apply to the artboard.
      @return {Artboard} the new artboard.
  */

  newArtboard(properties) {
    var frame = this.frameForLayerWithProperties(properties)
    var newLayer = MSArtboardGroup.alloc().initWithFrame_(frame.asCGRect());
    return this.addWrappedLayerWithProperties(newLayer, properties, "Artboard");
  }

}
