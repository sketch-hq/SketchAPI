// ********************************
// # Text.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer'
import { Rectangle } from './Rectangle'

const TextBehaviour = {
  flexibleWidth: 0, // Width is adjusted to fit the content.
  fixedWidth: 1, // Width is fixed.
}

const TextLineSpacingBehaviour = {
  variable: 1, // Uses min & max line height on paragraph style
  constantBaseline: 2, // Uses MSConstantBaselineTypesetter for fixed line height
}

// Mapping between text alignment names and values.
const TextAlignment = {
  left: 0, // Visually left aligned
  right: 1, // Visually right aligned
  center: 2, // Visually centered
  justified: 3, // Fully-justified. The last line in a paragraph is natural-aligned.
  natural: 4, // Indicates the default alignment for script
}

/**
 * Represents a text layer.
 */
export class Text extends Layer {
  /**
   * Make a new text object.
   *
   * @param {MSTextLayer} text The underlying model object from Sketch.
   * @param {Document} document The document that the text layer belongs to.
   */
  constructor(text, document) {
    super(text, document)
  }

  /**
   * Is this a text layer?
   *
   * All Layer objects respond to this method, but only text layers return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isText() {
    return true
  }

  /**
   * The text of the layer.
   *
   * @return {string} The layer text.
   */
  get text() {
    return this._object.stringValue()
  }

  /**
   * Set the text of the layer.
   * If the layer hasn't explicitly been given a name, this will also change
   * the layer's name to the text value.
   *
   * @param {string} value The text to use.
   */
  set text(value) {
    const object = this.sketchObject
    object.stringValue = value
    if (!object.nameIsFixed()) {
      object.name = value
    }
  }

  /**
   * Set the font of the layer to an NSFont object.
   *
   * @param {NSFont} value The font to use.
   */
  set font(value) {
    this._object.font = value
  }

  /**
   * Set the font of the layer to the system font at a given size.
   *
   * @param {number} size The system font size to use.
   */
  set systemFontSize(size) {
    this._object.font = NSFont.systemFontOfSize_(size)
  }

  /**
   * The alignment of the layer.
   * This will be one of the values: "left", "center", "right", "justified", "natural".
   *
   * @return {string} The alignment mode.
   */
  get alignment() {
    const raw = this._object.textAlignment()
    return (
      Object.keys(TextAlignment).find(key => TextAlignment[key] === raw) || raw
    )
  }

  /**
   * Set the alignment of the layer.
   *
   * The mode supplied can be a string or a number.
   * If it's a string, it should be one of the values: "left", "center", "right", "justified", "natural".
   *
   * @param {string} mode The alignment mode to use.
   */
  set alignment(mode) {
    const translated = TextAlignment[mode]
    this._object.textAlignment = translated || mode
  }

  /**
   * Set the layer to be fixed width or variable width.
   *
   * @param {bool} value Whether the layer should be fixed width (true) or variable width (false).
   */
  set fixedWidth(value) {
    if (value) {
      this._object.textBehaviour = TextBehaviour.fixedWidth
    } else {
      this._object.textBehaviour = TextBehaviour.flexibleWidth
    }
  }

  /**
   * Adjust the frame of the layer to fit its contents.
   */
  adjustToFit() {
    this._object.adjustFrameToFit()
  }

  /**
   * Return a list of the text fragments for the text.
   *
   * @return {array} The line fragments. Each one is a dictionary containing a rectangle, and a baseline offset.
   */
  get fragments() {
    const textLayer = this.sketchObject
    const storage = textLayer.immutableModelObject().createTextStorage()
    const layout = storage.layoutManagers().firstObject()
    const actualCharacterRangePtr = MOPointer.new()
    const charRange = NSMakeRange(0, storage.length())
    const drawingPoint = textLayer.drawingPointForText()

    layout.glyphRangeForCharacterRange_actualCharacterRange_(
      charRange,
      actualCharacterRangePtr
    )
    const glyphRange = actualCharacterRangePtr.value()

    const fragments = []
    let currentLocation = 0
    while (currentLocation < NSMaxRange(glyphRange)) {
      const effectiveRangePtr = MOPointer.new()
      const localRect = layout.lineFragmentRectForGlyphAtIndex_effectiveRange_(
        currentLocation,
        effectiveRangePtr
      )
      const rect = new Rectangle(
        localRect.origin.x + drawingPoint.x,
        localRect.origin.y + drawingPoint.y,
        localRect.size.width,
        localRect.size.height
      )
      const effectiveRange = effectiveRangePtr.value()
      const baselineOffset = layout
        .typesetter()
        .baselineOffsetInLayoutManager_glyphIndex_(layout, currentLocation)

      fragments.push({
        rect,
        baselineOffset,
        range: effectiveRange,
      })
      currentLocation = NSMaxRange(effectiveRange) + 1
    }

    return fragments
  }

  /**
   * Set whether to use constant baseline line spacing mode.
   *
   * @param {bool} value If true, we use constant baseline spacing mode. This is the default for new text layers in Sketch. If false, we use the legacy line spacing mode.
   */
  set useConstantBaselines(value) {
    const lineSpacingBehaviour = value
      ? TextLineSpacingBehaviour.constantBaseline
      : TextLineSpacingBehaviour.variable
    const textLayer = this.sketchObject
    const initialBaselineOffset = textLayer.firstBaselineOffset()
    textLayer.lineSpacingBehaviour = lineSpacingBehaviour
    const baselineOffset = textLayer.firstBaselineOffset()
    const rect = this.frame
    rect.y -= baselineOffset - initialBaselineOffset
    this.frame = rect
  }

  /**
   * Return a list of tests to run for this class.
   *
   * @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
   */
  static tests() {
    return {
      tests: {
        testIsText(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const text = page.newText()
          tester.assertTrue(text.isText)
          tester.assertFalse(page.isText)
        },

        testText(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const text = page.newText({ text: 'blah' })
          tester.assertEqual(text.text, 'blah')
          text.text = 'doodah'
          tester.assertEqual(text.text, 'doodah')
        },

        testAdjustToFit(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const text = page.newText({
            text: 'blah',
            frame: new Rectangle(10, 10, 1000, 1000),
          })
          text.adjustToFit()
          tester.assertEqual(text.frame, new Rectangle(10, 10, 23, 14))
        },

        testAlignment(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const text = page.newText({
            text: 'blah',
            frame: new Rectangle(10, 10, 1000, 1000),
          })

          // eslint-disable-next-line guard-for-in
          for (const key in TextAlignment) {
            // test setting by name
            text.alignment = key
            tester.assertEqual(text.alignment, key)

            // test setting by value
            text.alignment = TextAlignment[key]
            tester.assertEqual(text.alignment, key)
          }
        },
      },
    }
  }
}
