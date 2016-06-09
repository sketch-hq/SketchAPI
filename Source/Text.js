// ********************************
// # Text.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

// ## Imports

import { Layer } from './Layer.js'

// ## Constants

const BCTextBehaviourFlexibleWidth = 0
const BCTextBehaviourFixedWidth = 1

export class Text extends Layer {
    constructor(text, document) {
      super(text, document)
    }

    get isText() {
      return true
    }

    // Get/set the text of the layer.

    get text() {
      return this.object.stringValue
    }

    set text(value) {
      this.object.stringValue = value
    }


    // Set the font of the layer to an NSFont object.

    set font(value) {
      this.object.font = value
    }

    // Set the font of the layer to the system font at a given size.

    set systemFontSize(size) {
      this.object.font = NSFont.systemFontOfSize_(size)
    }

    // Set the alignment of the layer.

    set alignment(mode) {
      this.object.textAlignment = mode
    }

    // Set the layer to be fixed width or variable width.

    set fixedWidth(value) {
      if (value) {
        this.object.textBehaviour = BCTextBehaviourFixedWidth
      } else {
        this.object.textBehaviour = BCTextBehaviourFlexibleWidth
      }
    }
}
