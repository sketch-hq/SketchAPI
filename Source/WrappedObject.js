// ********************************
// # WrappedObject.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

/**
  Base class for all objects that
  wrap Sketch classes.

*/
import { Application } from './Application.js';

export class WrappedObject {

    /**
      Return a new wrapped object for a given Sketch model object.

      @param {Object} object - The Sketch model object to wrap.
    */

    constructor(object) {
      /** @type {Object} The underlying Sketch model object that we are wrapping. */
      this._object = object;
    }


    /**
      Returns the wrapped Sketch object.
      */

    get sketchObject() {
        return this._object;
    }

    get sketchApplication() {
      return Application;
    }

    /**
      Returns the object ID of the wrapped Sketch model object.

      @return {string} The id.
    */

    get id() {
      return this._object.objectID();
    }


    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

    static tests() {
        return {
            "tests" : {
                "testSketchObject" : function(tester) {
                    var object = MSLayer.new();
                    var wrapped = new WrappedObject(object);
                    tester.assertEqual(wrapped.sketchObject, object);
                },

                "testID" : function(tester) {
                    var object = MSLayer.new();
                    var wrapped = new WrappedObject(object);
                    tester.assertEqual(wrapped.id, object.objectID());
                },

            }
        };
    }

}
