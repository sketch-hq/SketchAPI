// ********************************
// # Artboard.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

/**
    A Sketch artboard.
*/

export class Artboard extends Layer {

    /**
        Make a new artboard.

        @param artboard {MSArtboardGroup} The underlying MSArtboardGroup model object from Sketch.
        @param document The document that the artboard belongs to.
    */

    constructor(artboard, document) {
      super(artboard, document)
    }

    /**
        Is this an artboard?

        All Layer objects respond to this method, but only Artboard objects return true.

        @return true for instances of Artboard, false for any other layer type.
    */

    get isArtboard() {
      return true;
    }

}
