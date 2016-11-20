// ********************************
// # Group.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import Layer from './Layer'

export default class Group extends Layer {
    constructor(group, document) {
      super(group, document)
    }

    is_group() {
      return true;
    }

}
