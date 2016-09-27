// ********************************
// # Style.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'

/**
  Represents a Sketch layer style.
 */

export class Style extends WrappedObject {

    /**
      Make a new style object.

      @param {MSStyle} style The underlying model object from Sketch.
    */

    constructor(style) {
      if (!style) {
        style = MSDefaultStyle.defaultStyle()
      }

      super(style)
    }


    get fillEnabled() {
        return this.sketchObject.fill().enabled
    }

    set fillEnabled(value) {
      var fill = this.sketchObject.fill()
      if (fill) {
        fill.enabled = value
      }
    }

    get borderEnabled() {
        return this.sketchObject.border().enabled
    }

    set borderEnabled(value) {
      var border = this.sketchObject.border()
      if (border) {
        border.enabled = value
      }
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
