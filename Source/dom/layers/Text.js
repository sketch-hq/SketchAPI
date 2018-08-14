import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'

const TextBehaviour = {
  flexibleWidth: 0, // Width is adjusted to fit the content.
  fixedWidth: 1, // Width is fixed.
}

const TextLineSpacingBehaviour = {
  variable: 'variable', // Uses min & max line height on paragraph style
  constantBaseline: 'constantBaseline', // Uses MSConstantBaselineTypesetter for fixed line height
}

export const TextLineSpacingBehaviourMap = {
  variable: 1, // Uses min & max line height on paragraph style
  constantBaseline: 2, // Uses MSConstantBaselineTypesetter for fixed line height
}

// Mapping between text alignment names and values.
const TextAlignment = {
  left: 'left', // Visually left aligned
  right: 'right', // Visually right aligned
  center: 'center', // Visually centered
  justified: 'justified', // Fully-justified. The last line in a paragraph is natural-aligned.
  natural: 'natural', // Indicates the default alignment for script
}

export const TextAlignmentMap = {
  left: 0, // Visually left aligned
  right: 1, // Visually right aligned
  center: 2, // Visually centered
  justified: 3, // Fully-justified. The last line in a paragraph is natural-aligned.
  natural: 4, // Indicates the default alignment for script
}

/**
 * Represents a text layer.
 */
export class Text extends StyledLayer {
  /**
   * Make a new text object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(text = {}) {
    if (!text.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      text.sketchObject = Factory.createNative(Text)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(text)

    this.adjustToFit()
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
    this._object.setFont(NSFont.systemFontOfSize_(size))
  }

  /**
   * Adjust the frame of the layer to fit its contents.
   */
  adjustToFit() {
    this._object.adjustFrameToFit()
    return this
  }

  /**
   * Return a list of the text fragments for the text.
   *
   * @return {array} The line fragments. Each one is a dictionary containing a rectangle, and a baseline offset.
   */
  get fragments() {
    const textLayer = this._object
    const storage = textLayer.immutableModelObject().createTextStorage()
    const layout = storage.layoutManagers().firstObject()
    const glpyhRangeStorage = NSMakeRange(0, 0)
    const actualCharacterRangePtr = MOPointer.new(glpyhRangeStorage)
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
}

Text.type = Types.Text
Text[DefinedPropertiesKey] = { ...StyledLayer[DefinedPropertiesKey] }
Factory.registerClass(Text, MSTextLayer)

Text.define('text', {
  get() {
    return String(this._object.stringValue())
  },
  /**
   * Set the text of the layer.
   * If the layer hasn't explicitly been given a name, this will also change
   * the layer's name to the text value.
   *
   * @param {string} value The text to use.
   */
  set(value) {
    const object = this._object
    object.stringValue = value
    if (!object.nameIsFixed()) {
      object.name = value
    }
  },
})

Text.Alignment = TextAlignment
Text.define('alignment', {
  /**
   * The alignment of the layer.
   * This will be one of the values: "left", "center", "right", "justified", "natural".
   *
   * @return {string} The alignment mode.
   */
  get() {
    const raw = this._object.textAlignment()
    return (
      Object.keys(TextAlignmentMap).find(
        key => TextAlignmentMap[key] === raw
      ) || raw
    )
  },

  /**
   * Set the alignment of the layer.
   *
   * The mode supplied can be a string or a number.
   * If it's a string, it should be one of the values: "left", "center", "right", "justified", "natural".
   *
   * @param {string} mode The alignment mode to use.
   */
  set(mode) {
    const translated = TextAlignmentMap[mode]
    this._object.textAlignment =
      typeof translated !== 'undefined' ? translated : mode
  },
})

Text.LineSpacing = TextLineSpacingBehaviour
Text.define('lineSpacing', {
  get() {
    const raw = this._object.lineSpacingBehaviour()
    return (
      Object.keys(TextLineSpacingBehaviourMap).find(
        key => TextLineSpacingBehaviourMap[key] === raw
      ) || raw
    )
  },
  set(mode) {
    const translated = TextLineSpacingBehaviourMap[mode]
    const lineSpacingBehaviour =
      typeof translated !== 'undefined' ? translated : mode

    const textLayer = this._object
    const layout = textLayer.immutableModelObject().textLayout()
    const initialBaselineOffset = layout.firstBaselineOffset()
    textLayer.lineSpacingBehaviour = lineSpacingBehaviour
    const baselineOffset = layout.firstBaselineOffset()
    const rect = this.frame
    rect.y -= baselineOffset - initialBaselineOffset
    this.frame = rect
  },
})

Text.define('fixedWidth', {
  get() {
    return this._object.textBehaviour() === TextBehaviour.fixedWidth
  },
  set(fixed) {
    if (fixed) {
      this._object.textBehaviour = TextBehaviour.fixedWidth
    } else {
      this._object.textBehaviour = TextBehaviour.flexibleWidth
    }
  },
})
