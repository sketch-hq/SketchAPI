// ********************************
// # Shape.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { Layer } from './Layer.js'

export class Shape extends Layer {
    constructor(shape, document) {
      super(shape, document)
    }

    get isShape() {
      return true;
    }

}
