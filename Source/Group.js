// ********************************
// # Group.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { Layer } from './Layer.js'

/**
  Represents a group of layers.
 */

export class Group extends Layer {
    constructor(group, document) {
      super(group, document)
    }

    /**
        Is this an group?

        All Layer objects respond to this method, but only Groups or things that inherit from groups return true.

        @return true for instances of Group, false for any other layer type.
    */

    is_group() {
      return true;
    }

}
