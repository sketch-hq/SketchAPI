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

      @param {MSTextLayer} text The underlying model object from Sketch.
      @param {Document} document The document that the text layer belongs to.
    */

    constructor(text, document) {
      super(text, document)
    }

    /**
        Is this a text layer?

        All Layer objects respond to this method, but only text layers return true.

        @return {bool} true for instances of Group, false for any other layer type.
    */

    get isText() {
      return true
    }

    /**
      The text of the layer.
    */

    get text() {
      return this._object.stringValue
    }

    /**
      Set the text of the layer.

      @param {string} value The text to use.
    */

    set text(value) {
      this._object.stringValue = value
    }


    /**
      Set the font of the layer to an NSFont object.

      @param {NSFont} value The font to use.
    */

    set font(value) {
      this._object.font = value
    }

    /**
       Set the font of the layer to the system font at a given size.

       @param {number} size The system font size to use.
    */

    set systemFontSize(size) {
      this._object.font = NSFont.systemFontOfSize_(size)
    }

    /**
       Set the alignment of the layer.

       @param {number} mode The alignment mode to use.
    */

    set alignment(mode) {
      this._object.textAlignment = mode
    }

    /**
     Set the layer to be fixed width or variable width.

     @param {bool} value Whether the layer should be fixed width (true) or variable width (false).
    */

    set fixedWidth(value) {
      if (value) {
        this._object.textBehaviour = BCTextBehaviourFixedWidth
      } else {
        this._object.textBehaviour = BCTextBehaviourFlexibleWidth
      }
    }

    /**
      Adjust the frame of the layer to fit its contents.
    */

    resizeToFitContents() {
      this._object.adjustFrameToFit()
    }


}
