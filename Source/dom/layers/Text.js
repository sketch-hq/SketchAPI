import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { parseEnumValue } from '../utils'

const TextLineSpacingBehaviour = {
  variable: 'variable', // Uses min & max line height on paragraph style
  constantBaseline: 'constantBaseline', // Uses MSConstantBaselineTypesetter for fixed line height
  natural: 'natural', // Uses MSConstantBaselineTypesetter for fixed line heights, and MSEmojiAwareLayoutManagerDelegate for natural line heights
  system: 'system', // Natural, but uses MSConstantBaselineTypesetter with Apple-supplied baseline values instead of calculating our own
}

export const TextLineSpacingBehaviourMap = {
  variable: 1, // Uses min & max line height on paragraph style
  constantBaseline: 2, // Uses MSConstantBaselineTypesetter for fixed line height
  natural: 3, // Uses MSConstantBaselineTypesetter for fixed line heights, and MSEmojiAwareLayoutManagerDelegate for natural line heights
  system: 4, // Natural, but uses MSConstantBaselineTypesetter with Apple-supplied baseline values instead of calculating our own
}

// Mapping between text alignment names and values.
const TextAlignment = {
  left: 'left', // Visually left aligned
  right: 'right', // Visually right aligned
  center: 'center', // Visually centered
  justified: 'justified', // Fully-justified. The last line in a paragraph is natural-aligned.
  natural: 'natural', // Indicates the default alignment for script
}

// Mapping between vertical text alignment names and values.
const VerticalTextAlignment = {
  top: 'top', // Visually top aligned
  center: 'center', // Visually center aligned
  bottom: 'bottom', // Visually bottom aligned
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

    if (!text.frame) {
      this.adjustToFit()
    }
  }

  get swiftBridge() {
    if (!this._object) {
      return null
    }
    return MSSketchAPITextBridge.alloc().initWithTextLayer(this._object)
  }

  /**
   * Set the font of the layer to an NSFont object.
   *
   * @param {NSFont} value The font to use.
   */
  set font(value) {
    console.warn(
      '`Text.font` is deprecated. Use `Text.style.fontFamily` instead'
    )
    this.swiftBridge?.setFont(value)
  }

  /**
   * Set the font of the layer to the system font at a given size.
   *
   * @param {number} size The system font size to use.
   */
  set systemFontSize(size) {
    console.warn(
      '`Text.systemFontSize = size` is deprecated. Use `Text.style.fontFamily = "system"; Text.style.fontSize = size` instead.'
    )
    this.swiftBridge?.setSystemFontSize(size)
  }

  /**
   * Adjust the frame of the layer to fit its contents.
   */
  adjustToFit() {
    this.swiftBridge?.adjustFrameToFit()
  }

  /**
   * Return a list of the text fragments for the text.
   *
   * @return {array} The line fragments. Each one is a dictionary containing a rectangle, and a baseline offset.
   */
  get fragments() {
    const { text } = this
    const textLayer = this._object
    const storage = this.isImmutable()
      ? textLayer.createTextStorage()
      : textLayer.immutableModelObject().createTextStorage()

    const layout = storage.layoutManagers().firstObject()
    const textContainer = layout.textContainers().firstObject()

    const numberOfGlyphs = layout.numberOfGlyphs()
    const drawingPoint = textLayer.drawingPointForText()

    const fragments = []
    let currentLocation = 0
    while (currentLocation < numberOfGlyphs) {
      // Get end of line index
      const lineRangeStorage = NSMakeRange(0, 0)
      const lineRangePtr = MOPointer.alloc().initWithValue(lineRangeStorage)

      layout.lineFragmentRectForGlyphAtIndex_effectiveRange(
        currentLocation,
        lineRangePtr
      )

      const range = lineRangePtr.value()
      const endOfLineIndex = NSMaxRange(range)

      //	Get bounding rect
      //	Also ignore empty line ends and hard line breaks
      let rangeLength =
        Math.min(endOfLineIndex, numberOfGlyphs) - currentLocation

      const lineText = text.substr(currentLocation, rangeLength)
      const trimmedLineText = lineText.trimRight()

      rangeLength -= lineText.length - trimmedLineText.length

      const glyphRange = NSMakeRange(currentLocation, rangeLength)
      const lineRect = layout.boundingRectForGlyphRange_inTextContainer(
        glyphRange,
        textContainer
      )

      const rect = new Rectangle(
        lineRect.origin.x + drawingPoint.x,
        lineRect.origin.y + drawingPoint.y,
        lineRect.size.width,
        lineRect.size.height
      )

      // get baseline offset
      const baselineOffset = layout
        .typesetter()
        .baselineOffsetInLayoutManager_glyphIndex(layout, currentLocation)

      fragments.push({
        rect,
        baselineOffset,
        range,
        text: String(lineText),
      })

      // move to the next line
      currentLocation = endOfLineIndex
    }

    return fragments
  }
}

Text.type = Types.Text
Text[DefinedPropertiesKey] = { ...StyledLayer[DefinedPropertiesKey] }
Factory.registerClass(Text, MSTextLayer)
Factory.registerClass(Text, MSImmutableTextLayer)

Text.define('text', {
  get() {
    return String(this.swiftBridge?.text())
  },
  /**
   * Set the text of the layer.
   * If the layer hasn't explicitly been given a name, this will also change
   * the layer's name to the text value.
   *
   * @param {string} value The text to use.
   */
  set(value) {
    this.swiftBridge?.setText(String(value))
  },
})

Text.Alignment = TextAlignment
Text.VerticalAlignment = VerticalTextAlignment

Text.define('alignment', {
  enumerable: false,
  exportable: false,
  get() {
    console.warn(
      '`Text.alignment` is deprecated. Use `Text.style.alignment` instead'
    )
    return this.style.alignment
  },
  set(mode) {
    console.warn(
      '`Text.alignment` is deprecated. Use `Text.style.alignment` instead'
    )
    this.style.alignment = mode
  },
})

Text.LineSpacing = TextLineSpacingBehaviour
Text.define('lineSpacing', {
  get() {
    const raw = Number(this.swiftBridge?.lineSpacing())
    return (
      Object.keys(TextLineSpacingBehaviourMap).find(
        (key) => TextLineSpacingBehaviourMap[key] === raw
      ) || raw
    )
  },
  set(mode) {
    const lineSpacingBehaviour = parseEnumValue(
      mode,
      TextLineSpacingBehaviourMap,
      'Text.lineSpacing'
    )
    if (lineSpacingBehaviour !== undefined) {
      this.swiftBridge?.setLineSpacing(lineSpacingBehaviour)
    }
  },
})

Text.define('fixedWidth', {
  get() {
    return Boolean(this.swiftBridge?.fixedWidth())
  },
  set(fixed) {
    this.swiftBridge?.setFixedWidth(Boolean(fixed))
  },
})
