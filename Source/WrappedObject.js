// ********************************
// # WrappedObject.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// Base class for all objects that
// wrap Sketch classes.

export class WrappedObject {
    constructor(object) {
      this.object = object
    }

    get id() {
      return this.object.objectID();
    }
}
