// ********************************
// # Shape.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { Layer } from './Layer.js'
import { SHAPE } from './Constants'

export class Shape extends Layer {
    constructor(shape, document) {
      super(shape, document)
      this.type = SHAPE
    }
}
