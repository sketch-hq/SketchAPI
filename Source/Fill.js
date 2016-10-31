// ********************************
// # Application.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { Style } from './Style.js'
import { ColorHelper } from './ColorHelper.js'
import { Border } from './Border.js'
/**
 Gives you access to Sketch, and provides access to:
 - the document model and the layer tree
 - metadata abound sketch itself
 - utilities for interacting with the user
 - access to the running plugin, it's resources and settings
 */
export class Fill extends WrappedObject {
    /**
      Make a new fill object.
      @param {MSStyleFill} border The underlying model object from Sketch.
    */
    constructor(style) {

        if (!style || style == null) {
            style = MSDefaultStyle.defaultStyle().fill();

            // Automatically unpacks the current fill style and enables a pointer
            // to the setting(s). If there are multiple fills it will simply only
            // choose border at the bottom of the stack.
        } else if (style.isShape) {
            style = style.sketchObject.style().fills().firstObject(); // Not without firstObject it will pick first Enabled;
        }
        super(style)
    }

    get opacity() {
      return this.sketchObject.interfaceOpacity();
    }

    /**
    Return a list of tests to run for this class.

    @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
    */

    static tests() {
        return {
            "tests": {
                "testFillOpacity": function(tester) {
                    var fill = new Fill()
                    tester.assertEqual(fill.opacity, 1);
                },


            }
        };
    }
}
