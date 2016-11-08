// ********************************
// # Text.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'
import { Rectangle } from './Rectangle.js'

// / Width is adjusted to fit the content.
const BCTextBehaviourFlexibleWidth = 0

// / Width is fixed.
const BCTextBehaviourFixedWidth = 1

// / Uses min & max line height on paragraph style
const BCTextLineSpacingBehaviourV2 = 1

// / Uses MSConstantBaselineTypesetter for fixed line height
const BCTextLineSpacingBehaviourV3 = 2

// / Mapping between text alignment names and values.
const NSTextAlignment = {
  // / Visually left aligned
  'left': 0,

  // / Visually right aligned
  'right': 1,

  // / Visually centered
  'center': 2,

  // / Fully-justified. The last line in a paragraph is natural-aligned.
  'justified': 3,

  // / Indicates the default alignment for script
  'natural': 4
}

/**
Represents a text layer.
*/

export class Text extends Layer {

  /**
   * get - Is this a {Text} layer?
   *
   * All Layer objects respond to this method, but only {Text} layers return true.
   *
   * @return {boolean}  for instances of {Text}, false for any other layer type.
   */
  get isText () {
    return true
  }

  /**
  The text of the layer.

  @return {string} The layer text.
  */

  get text () {
    return this.sketchObject.stringValue()
  }

  /**
  Set the text of the layer.
  If the layer hasn't explicitly been given a name, this will also change
  the layer's name to the text value.

  @param {string} value The text to use.
  */

  set text (value) {
    var object = this.sketchObject
    object.stringValue = value
    if (!object.nameIsFixed()) {
      object.name = value
    }
  }

  /**
  Set the font of the layer to an NSFont object.

  @param {NSFont} value The font to use.
  */

  set font (value) {
    this.sketchObject.font = value
  }

  get font () {
    return this.sketchObject.font()
  }

  /**
  Set the font of the layer to the system font at a given size.

  @param {number} size The system font size to use.
  */

  set systemFontSize (size) {
    this.sketchObject.font = NSFont.systemFontOfSize_(size)
  }
  get systemFontSize () {
    return this.sketchObject.systemFontOfSize()
  }
  /**
  The alignment of the layer.
  This will be one of the values: "left", "center", "right", "justified", "natural".

  @return {string} The alignment mode.
  */

  get alignment () {
    var raw = this.sketchObject.textAlignment()
    var result = raw
    for (var key in NSTextAlignment) {
      if (NSTextAlignment[key] === raw) {
        result = key
        break
      }
    }
    return result
  }

  /**
  Set the alignment of the layer.

  The mode supplied can be a string or a number.
  If it's a string, it should be one of the values: "left", "center", "right", "justified", "natural".

  @param {string} mode The alignment mode to use.
  */

  set alignment (mode) {
    var translated = NSTextAlignment[mode]
    this.sketchObject.textAlignment = translated ? translated : mode //eslint-disable-line
  }

  /**
  Set the layer to be fixed width or variable width.

  @param {bool} value Whether the layer should be fixed width (true) or variable width (false).
  */

  set fixedWidth (value) {
    if (value) {
      this.sketchObject.textBehaviour = BCTextBehaviourFixedWidth
    } else {
      this.sketchObject.textBehaviour = BCTextBehaviourFlexibleWidth
    }
  }
  get fixedWidth () {
    return this.sketchObject.textBehaviour()
  }

  /**
  Adjust the frame of the layer to fit its contents.
  */

  adjustToFit () {
    this.sketchObject.adjustFrameToFit()
  }

  /**
  Return a list of the text fragments for the text.

  @return {array} The line fragments. Each one is a dictionary containing a rectangle, and a baseline offset.
  */

  get fragments () {
    var textLayer = this.sketchObject
    var storage = textLayer.createTextStorage()
    var layout = storage.layoutManagers().firstObject()
    var actualCharacterRangePtr = MOPointer.new()
    var charRange = NSMakeRange(0, storage.length())
    //  var origin = textLayer.rect().origin

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

      fragments.push({
        'rect': rect,
        'baselineOffset': baselineOffset,
        range: effectiveRange
      })
      currentLocation = NSMaxRange(effectiveRange) + 1
    }

    return fragments
  }

  /**
  Set whether to use constant baseline line spacing mode.

  @param {bool} value If true, we use constant baseline spacing mode. This is the default for new text layers in Sketch. If false, we use the legacy line spacing mode.
  */

  set useConstantBaselines (value) {
    var lineSpacingBehaviour = value ? BCTextLineSpacingBehaviourV3 : BCTextLineSpacingBehaviourV2
    var textLayer = this.sketchObject
    var initialBaselineOffset = textLayer.firstBaselineOffset()
    textLayer.lineSpacingBehaviour = lineSpacingBehaviour
    var baselineOffset = textLayer.firstBaselineOffset()
    var rect = this.frame
    rect.y -= (baselineOffset - initialBaselineOffset)
    this.frame = rect
    this._useConstantBaseLines = value
  }
  get useConstantBaselines () {
    return this._useConstantBaseLines
  }

  /**
  Return a list of tests to run for this class.

  @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  static tests () {
    return {
      'tests': {
        'testIsText': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var text = page.newText()
          tester.assertTrue(text.isText)
          tester.assertFalse(page.isText)
        },

        'testText': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var text = page.newText({
            'text': 'blah'
          })
          tester.assertEqual(text.text, 'blah')
          text.text = 'doodah'
          tester.assertEqual(text.text, 'doodah')
        },

        'testAdjustToFit': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var text = page.newText({
            'text': 'blah',
            'frame': new Rectangle(10, 10, 1000, 1000)
          })
          text.adjustToFit()
          tester.assertEqual(text.frame, new Rectangle(10, 10, 23, 14))
        },

        'testAlignment': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var text = page.newText({
            'text': 'blah',
            'frame': new Rectangle(10, 10, 1000, 1000)
          })
          for (var key in NSTextAlignment) {
            // test setting by name
            text.alignment = key
            tester.assertEqual(text.alignment, key)

            // test setting by value
            text.alignment = NSTextAlignment[key]
            tester.assertEqual(text.alignment, key)
          }
        }

      }
    }
  }

}
