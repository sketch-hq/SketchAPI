import { Color } from './Color'
import { FloatingPointNumber, parseEnumValue } from '../utils'
import { Swatch } from '../assets'
import { wrapNativeObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { toArray } from 'util'

export const TextAlignmentMap = {
  left: 0, // Visually left aligned
  right: 1, // Visually right aligned
  center: 2, // Visually centered
  justified: 3, // Fully-justified. The last line in a paragraph is natural-aligned.
  natural: 4, // Indicates the default alignment for script
}

const TextAlignmentReverseMap = {
  0: 'left', // Visually left aligned
  1: 'right', // Visually right aligned
  2: 'center', // Visually centered
  3: 'justified', // Fully-justified. The last line in a paragraph is natural-aligned.
  4: 'left', // Indicates the default alignment for script
}

export const VerticalTextAlignmentMap = {
  top: 0, // Visually top aligned
  center: 1, // Visually centered
  bottom: 2, // Visually bottom aligned
}

const VerticalTextAlignmentReverseMap = {
  0: 'top', // Visually top aligned
  1: 'center', // Visually centered
  2: 'bottom', // Visually bottom aligned
}

export function defineTextStyleProperties(Style) {
  Style.define('_textStyleSwiftBridge', {
    exportable: false,
    importable: false,
    enumerable: false,
    get() {
      if (this.styleType !== Style.StyleType.Text) {
        return undefined
      }
      // We might be dealing with either:
      // a) a text style directly attached to a text layer, in which case we
      // grab this layer's text style bridge object
      const layer = wrapNativeObject(
        this._object.parentLayer?.() || this.__immutableParentLayer
      )
      if (layer?.type === Types.Text) {
        return layer.swiftBridge?.textStyleBridge()
      }
      // b) a text style that exists independently of any text layer (e.g. a shared
      // text style), in which case it a standalone bridge object
      return MSSketchAPITextStyleBridge.alloc().initWithTextStyle(
        this._object?.textStyle()
      )
    },
  })

  Style.define('alignment', {
    get() {
      const raw = Number(this._textStyleSwiftBridge?.alignment())
      return TextAlignmentReverseMap[raw]
    },
    set(mode) {
      const alignment = parseEnumValue(mode, TextAlignmentMap, 'Text.alignment')
      if (alignment !== undefined) {
        this._textStyleSwiftBridge?.setAlignment(alignment)
      }
    },
  })

  Style.define('verticalAlignment', {
    get() {
      const raw = Number(this._textStyleSwiftBridge?.verticalAlignment())
      return VerticalTextAlignmentReverseMap[raw]
    },
    set(mode) {
      const translated = parseEnumValue(
        mode,
        VerticalTextAlignmentMap,
        'Text.verticalAlignment'
      )
      if (translated !== undefined) {
        this._textStyleSwiftBridge?.setVerticalAlignment(translated)
      }
    },
  })

  Style.define('kerning', {
    get() {
      const raw = this._textStyleSwiftBridge?.kerning()
      if (!raw) {
        return null
      }
      return FloatingPointNumber(raw)
    },

    set(kerning) {
      this._textStyleSwiftBridge?.setKerning(kerning)
    },
  })

  Style.define('lineHeight', {
    get() {
      const raw = this._textStyleSwiftBridge?.lineHeight()
      if (!raw || raw <= 0) {
        return null
      }
      return FloatingPointNumber(raw)
    },

    set(lineHeight) {
      this._textStyleSwiftBridge?.setLineHeight(lineHeight)
    },
  })

  Style.define('paragraphSpacing', {
    get() {
      const raw = this._textStyleSwiftBridge?.paragraphSpacing()
      if (!raw) {
        return null
      }
      return FloatingPointNumber(raw)
    },

    set(paragraphSpacing) {
      this._textStyleSwiftBridge?.setParagraphSpacing(paragraphSpacing)
    },
  })

  Style.define('textColor', {
    get() {
      const raw = this._textStyleSwiftBridge?.textColor()
      if (!raw) {
        return undefined
      }
      return Color.from(raw).toString()
    },

    set(color) {
      let value = Color.from(color)
      if (!value) {
        return
      }
      this._textStyleSwiftBridge?.setTextColor(value.toMSImmutableColor())
    },
  })

  Style.define('textSwatch', {
    get() {
      const swatchID = this._textStyleSwiftBridge?.textSwatchID()
      if (!swatchID) {
        return undefined
      }
      return Swatch.instantiate(swatchID, this)
    },
    set(newSwatch) {
      if (this.isImmutable()) {
        return
      }
      this.textColor = Swatch.from(newSwatch).referencingColor
    },
  })

  Style.define('fontSize', {
    get() {
      const raw = this._textStyleSwiftBridge?.fontSize()
      if (!raw) {
        return undefined
      }
      return Number(raw)
    },

    set(fontSize) {
      this._textStyleSwiftBridge?.setFontSize(Number(fontSize))
    },
  })

  Style.define('textTransform', {
    get() {
      return String(this._textStyleSwiftBridge?.textTransform())
    },

    set(transform) {
      this._textStyleSwiftBridge?.setTextTransform(String(transform))
    },
  })

  Style.define('fontFamily', {
    get() {
      const raw = this._textStyleSwiftBridge?.fontFamily()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(fontFamily) {
      this._textStyleSwiftBridge?.setFontFamily(String(fontFamily))
    },
  })

  Style.define('fontWeight', {
    get() {
      const raw = this._textStyleSwiftBridge?.fontWeight()
      if (!raw) {
        return undefined
      }
      return Number(raw)
    },

    set(fontWeight) {
      this._textStyleSwiftBridge?.setFontWeight(fontWeight)
    },
  })

  Style.define('fontStyle', {
    get() {
      const raw = this._textStyleSwiftBridge?.fontStyle()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(fontStyle) {
      this._textStyleSwiftBridge?.setFontStyle(fontStyle)
    },
  })

  Style.define('fontVariant', {
    get() {
      const raw = this._textStyleSwiftBridge?.fontVariant()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(fontVariant) {
      this._textStyleSwiftBridge?.setFontVariant(fontVariant)
    },
  })

  Style.define('fontStretch', {
    get() {
      const raw = this._textStyleSwiftBridge?.fontStretch()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(fontStretch) {
      this._textStyleSwiftBridge?.setFontStretch(fontStretch)
    },
  })

  Style.define('textUnderline', {
    get() {
      const raw = this._textStyleSwiftBridge?.textUnderline()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(textUnderline) {
      this._textStyleSwiftBridge?.setTextUnderline(textUnderline)
    },
  })

  Style.define('textStrikethrough', {
    get() {
      const raw = this._textStyleSwiftBridge?.textStrikethrough()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(textStrikethrough) {
      this._textStyleSwiftBridge?.setTextStrikethrough(textStrikethrough)
    },
  })

  Style.define('fontAxes', {
    get() {
      const axes = this._textStyleSwiftBridge?.fontAxes()
      if (!axes) {
        return null
      }

      // Normalize the native information about the font axes into a JS object
      const axesObj = {}
      toArray(axes).forEach((axis) => {
        axesObj[String(axis.name())] = {
          id: Number(axis.identifier()),
          min: Number(axis.minValue()),
          max: Number(axis.maxValue()),
          value: Number(axis.currentValue()),
        }
      })

      return axesObj
    },
    set(fontAxes) {
      if (this.isImmutable()) {
        return
      }
      const current = this.fontAxes
      // Return early if the current font doesn't have any axes
      if (!current) {
        return
      }
      Object.keys(fontAxes).forEach((name) => {
        // Only set an axis if it's available on the current font, and
        // different to the current value
        if (current[name] && fontAxes[name].value !== current[name].value) {
          this._textStyleSwiftBridge?.setVariableFontAxisValue_forAxisID(
            fontAxes[name].value,
            fontAxes[name].id || current[name].id
          )
        }
      })
    },
  })
}
