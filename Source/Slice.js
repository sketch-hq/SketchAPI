// ********************************
// # Slice.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

/**
  Represents a slice layer (a rectangle, oval, path, etc).
 */

export class Slice extends Layer {


    /**
      Make a new slice object.

      @param {MSSliceLayer} slice The underlying model object from Sketch.
      @param {Document} document The document that the slice belongs to.
    */

    constructor(slice, document) {
      super(slice, document)
    }


    /**
        Is this a slice layer?

        All Layer objects respond to this method, but only slice layers (rectangles, ovals, paths etc) return true.

        @return {bool} true for instances of Group, false for any other layer type.
    */

    get isSlice() {
      return true;
    }


    /**
     Return the style of the layer.

     @return {Style} The style of the layer.
     */

     get style() {
         return new Style(this.sketchObject.style())
     }


     /**
     Set the style of the layer.

     @param {Style} value The style settings to use for the layer.
     */

     set style(value) {
         this.sketchObject.style = value.sketchObject
     }


    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

    static tests() {
        return {
            "tests" : {
              "testSliceProperties" : function(tester) {
                var name = "Test Slice";
                var frame = new Rectangle(5, 10, 100, 44);
                var document = tester.newTestDocument()
                var page = document.selectedPage;
                var slice = page.newSlice({"name": name, frame: frame});
                tester.assertEqual(slice.name, name);
                tester.assertEqual(slice.frame, frame);
              },              
              "testIsSlice" : function(tester) {
                var document = tester.newTestDocument()
                var page = document.selectedPage;
                var slice = page.newSlice();
                tester.assertTrue(slice.isSlice)
                tester.assertFalse(page.isSlice)
              },
            }
        };
    }

}
