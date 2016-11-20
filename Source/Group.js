// ********************************
// # Group.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { Layer } from './Layer.js'
import { GROUP } from './Constants'

export class Group extends Layer {
    constructor(group, document) {
      super(group, document)
      this.type = GROUP
    }
}
