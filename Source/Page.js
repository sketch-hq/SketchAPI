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
    var frame = this._frameForLayerWithProperties(properties)
    var newLayer = MSArtboardGroup.alloc().initWithFrame_(frame.asCGRect());
    return this._addWrappedLayerWithProperties(newLayer, properties, "Artboard");
  }

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

    static tests() {
        return {
            "tests" : {
                "test something" : function(tester) {
                    tester.assert(true);
                },
            }
        };
    }

}
