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

        @return {bool} true for instances of Group, false for any other layer type.
    */

    get isShape() {
      return true;
    }

    /**
     Return the style of the layer.

     @return {Style} The style of the layer.
     */

     get style() {
         return new Style(this.sketchObject.style())
     }

     set style(value) {
         this.sketchObject.style = value
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
