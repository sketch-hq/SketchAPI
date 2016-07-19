// ********************************
// # Text.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

// ## Constants

const BCTextBehaviourFlexibleWidth = 0
const BCTextBehaviourFixedWidth = 1

/**
  Represents a text layer.
 */

export class Text extends Layer {

    /**
      Make a new text object.

      @param text {MSTextLayer} The underlying model object from Sketch.
      @param document The document that the text layer belongs to.
    */

    constructor(text, document) {
      super(text, document)
    }

    /**
        Is this a text layer?

        All Layer objects respond to this method, but only text layers return true.

        @return true {bool} for instances of Group, false for any other layer type.
    */

    get isText() {
      return true
    }

    /**
      The text of the layer.
    */

    get text() {
      return this.object.stringValue
    }

    /**
      Set the text of the layer.

      @param value {string} The text to use.
    */

    set text(value) {
      this.object.stringValue = value
    }


    /**
      Set the font of the layer to an NSFont object.

      @param value {NSFont} The font to use.
    */

    set font(value) {
      this.object.font = value
    }

    /**
       Set the font of the layer to the system font at a given size.

       @param size {number} The system font size to use.
    */

    set systemFontSize(size) {
      this.object.font = NSFont.systemFontOfSize_(size)
    }

    /**
       Set the alignment of the layer.

       @param mode {number} The alignment mode to use.
    */

    set alignment(mode) {
      this.object.textAlignment = mode
    }

    /**
     Set the layer to be fixed width or variable width.

     @param value {bool} Whether the layer should be fixed width (true) or variable width (false).
    */

    set fixedWidth(value) {
      if (value) {
        this.object.textBehaviour = BCTextBehaviourFixedWidth
      } else {
        this.object.textBehaviour = BCTextBehaviourFlexibleWidth
      }
    }
}
