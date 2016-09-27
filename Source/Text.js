// ********************************
// # Text.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'
import { Rectangle } from './Rectangle.js'

// ## Constants

const BCTextBehaviourFlexibleWidth = 0
const BCTextBehaviourFixedWidth = 1

const BCTextLineSpacingBehaviourV2 = 1         // Uses min & max line height on paragraph style
const BCTextLineSpacingBehaviourV3 = 2         // Uses MSConstantBaselineTypesetter for fixed line height

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

    /**
      Return a list of the text fragments for the text.
      */

    get fragments() {
      var textLayer = this.sketchObject
      var storage = textLayer.createTextStorage()
      var layout = storage.layoutManagers().firstObject()
      var actualCharacterRangePtr = MOPointer.new()
      var charRange = NSMakeRange(0, storage.length())
      var origin = textLayer.rect().origin

      layout.glyphRangeForCharacterRange_actualCharacterRange_(charRange, actualCharacterRangePtr)
      var glyphRange = actualCharacterRangePtr.value()

      var fragments = []
      var currentLocation = 0
      while (currentLocation < NSMaxRange(glyphRange)) {
        var effectiveRangePtr = MOPointer.new()
        var localRect = layout.lineFragmentRectForGlyphAtIndex_effectiveRange_(currentLocation, effectiveRangePtr)
        var rect = new Rectangle(localRect.origin.x, localRect.origin.y, localRect.size.width, localRect.size.height)
        var effectiveRange = effectiveRangePtr.value()
        var baselineOffset = layout.typesetter().baselineOffsetInLayoutManager_glyphIndex_(layout, currentLocation)

        fragments.push({"rect": rect, "baselineOffset": baselineOffset, range: effectiveRange})
        currentLocation = NSMaxRange(effectiveRange) + 1
      }

      return fragments;
    }

    /**
      Set whether to use constant baseline line spacing mode.

      @param {bool} value If true, we use constant baseline spacing mode. This is the default for new text layers in Sketch. If false, we use the legacy line spacing mode.
      */

    set useConstantBaselines(value) {
      var lineSpacingBehaviour = value ? BCTextLineSpacingBehaviourV3 : BCTextLineSpacingBehaviourV2
      var textLayer = this.sketchObject
      var initialBaselineOffset = textLayer.firstBaselineOffset()
      textLayer.lineSpacingBehaviour = lineSpacingBehaviour
      var baselineOffset = textLayer.firstBaselineOffset()
      var rect = this.frame
      rect.y -= (baselineOffset - initialBaselineOffset)
      this.frame = rect
    }


    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

    static tests() {
        return {
            "tests" : {
                "test something" : function(tester) {
                    tester.assert(true);
                },
            }
        };
    }

}
