// ********************************
// # Group.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'
import { Rectangle } from './Rectangle.js'
/**
  Represents a group of layers.
 */

export class Group extends Layer {

    /**
      Make a new group object.

      @param group {MSLayerGroup} The underlying model object from Sketch.
      @param document The document that the group belongs to.
    */

    constructor(group, document) {
      super(group, document)
    }

    /**
        Is this an group?

        All Layer objects respond to this method, but only Groups or things that inherit from groups return true.

        @return {bool} true for instances of Group, false for any other layer type.
    */

    is_group() {
      return true;
    }

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

     /**
         Perform a function for every sub-layer inside this one.
         The function will be passed a single argument each time it is
         invoked - which will be an object representing the sub-layer.

         @param block {function} The function to execute for each layer.
     */

     iterate(block, filter = null) {
       var layers = this._object().layers()
       this._document.iterateWithRawLayers(layers, filter, block)
     }

     /**
       Convert a rectangle in page coordinates to one relative to this container's coordinates.
      */

     pageRectToLocalRect(rect) {
         var origin = this._object.convertPoint_fromLayer_(NSMakePoint(rect.x, rect.y), null)
         return new Rectangle(origin.x, origin.y, rect.width, rect.height)
     }

     /**
      Adjust the group to fit its children.
      */

      adjustToFit() {
          this._object.resizeToFitChildrenWithOption_(0)
      }

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
