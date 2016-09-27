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

         @param {function(layer: Layer)} block The function to execute for each layer.
     */

     iterate(block) {
       var layers = this._object().layers()
       this._document.iterateWithNativeLayers(layers, null, block)
     }

     /**
         Perform a function for every sub-layer inside this one that passes a filter.
         The function will be passed a single argument each time it is
         invoked - which will be an object representing the sub-layer.

         @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
         @param {function(layer: Layer)} block The function to execute for each layer.
     */

     iterateWithFilter(filter, block) {
       var layers = this._object().layers()
       this._document.iterateWithNativeLayers(layers, filter, block)
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
