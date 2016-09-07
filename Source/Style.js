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
      super(style)
    }


    /**
     Return the default style object.
     */

    static default() {
        return new Style(MSDefaultStyle.defaultStyle())
    }

    get fillEnabled() {
        return self.sketchObject.fill().enabled
    }

    set fillEnabled(value) {
        self.sketchObject.fill().enabled = value
    }

    get borderEnabled() {
        return self.sketchObject.border().enabled
    }

    set borderEnabled(value) {
        self.sketchObject.border().enabled = value
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
