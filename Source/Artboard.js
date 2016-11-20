// ********************************
// # Artboard.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { Layer } from './Layer.js'
import { ARTBOARD } from './Constants'

/**
    A Sketch artboard.
*/

export class Artboard extends Layer {

    /**
        Make a new artboard.

        @param artboard The underlying MSArtboardGroup model object from Sketch.
        @param document The document that the artboard belongs to.
    */

    constructor(artboard, document) {
      super(artboard, document)
      this.type = ARTBOARD
    }
}
