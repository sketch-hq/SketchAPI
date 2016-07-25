// ********************************
// # Group.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

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

}
