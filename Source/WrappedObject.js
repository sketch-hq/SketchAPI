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

export class WrappedObject {

    /**
      Return a new wrapped object for a given Sketch model object.

      @param object The Sketch model object to wrap.
      @return The new wrapped object.
    */

    constructor(object) {
      this.object = object
    }

    /**
      Returns the object ID of the wrapped Sketch model object.

      @return {string} The id.
    */

    get id() {
      return this.object.objectID();
    }
}
