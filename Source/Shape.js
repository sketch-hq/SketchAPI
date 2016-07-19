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

    /**
      Make a new shape object.

      @param shape {MSShapeGroup} The underlying model object from Sketch.
      @param document The document that the shape belongs to.
    */

    constructor(shape, document) {
      super(shape, document)
    }

    /**
        Is this a shape layer?

        All Layer objects respond to this method, but only shape layers (rectangles, ovals, paths etc) return true.

        @return true {bool} for instances of Group, false for any other layer type.
    */

    get isShape() {
      return true;
    }

}
