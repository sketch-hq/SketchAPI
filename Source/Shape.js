// ********************************
// # Shape.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

/**
  Represents a shape layer (a rectangle, oval, path, etc).
 */

export class Shape extends Layer {
    constructor(shape, document) {
      super(shape, document)
    }

    get isShape() {
      return true;
    }

}
