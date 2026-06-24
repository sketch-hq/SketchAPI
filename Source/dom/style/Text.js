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
  Style.define('_textLayer', {
    exportable: false,
    importable: false,
    enumerable: false,
    get() {
      const layer = wrapNativeObject(
        this._object.parentLayer?.() || this.__immutableParentLayer
      )
      if (!layer || layer.type !== Types.Text) {
        return undefined
      }
      return layer
    },
  })
  Style.define('alignment', {
    get() {
      const raw = Number(this._textLayer?.swiftBridge?.alignment())
      return TextAlignmentReverseMap[raw]
    },
    set(mode) {
      const alignment = parseEnumValue(mode, TextAlignmentMap, 'Text.alignment')
      if (alignment !== undefined) {
        this._textLayer?.swiftBridge?.setAlignment(alignment)
      }
    },
  })

  Style.define('verticalAlignment', {
    get() {
      const raw = Number(this._textLayer?.swiftBridge?.verticalAlignment())
      return VerticalTextAlignmentReverseMap[raw]
    },
    set(mode) {
      const translated = parseEnumValue(
        mode,
        VerticalTextAlignmentMap,
        'Text.verticalAlignment'
      )
      if (translated !== undefined) {
        this._textLayer?.swiftBridge?.setVerticalAlignment(translated)
      }
    },
  })

  Style.define('kerning', {
    get() {
      const raw = this._textLayer?.swiftBridge?.kerning()
      if (!raw) {
        return null
      }
      return FloatingPointNumber(raw)
    },

    set(kerning) {
      this._textLayer?.swiftBridge?.setKerning(kerning)
    },
  })

  Style.define('lineHeight', {
    get() {
      const raw = this._textLayer?.swiftBridge?.lineHeight()
      if (!raw || raw <= 0) {
        return null
      }
      return FloatingPointNumber(raw)
    },

    set(lineHeight) {
      this._textLayer?.swiftBridge?.setLineHeight(lineHeight)
    },
  })

  Style.define('paragraphSpacing', {
    get() {
      const raw = this._textLayer?.swiftBridge?.paragraphSpacing()
      if (!raw) {
        return null
      }
      return FloatingPointNumber(raw)
    },

    set(paragraphSpacing) {
      this._textLayer?.swiftBridge?.setParagraphSpacing(paragraphSpacing)
    },
  })

  Style.define('textColor', {
    get() {
      const raw = this._textLayer?.swiftBridge?.textColor()
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
      this._textLayer?.swiftBridge?.setTextColor(value.toMSImmutableColor())
    },
  })

  Style.define('textSwatch', {
    get() {
      const swatchID = this._textLayer?.swiftBridge?.textSwatchID()
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
      const raw = this._textLayer?.swiftBridge?.fontSize()
      if (!raw) {
        return undefined
      }
      return Number(raw)
    },

    set(fontSize) {
      this._textLayer?.swiftBridge?.setFontSize(Number(fontSize))
    },
  })

  Style.define('textTransform', {
    get() {
      return String(this._textLayer?.swiftBridge?.textTransform())
    },

    set(transform) {
      this._textLayer?.swiftBridge?.setTextTransform(String(transform))
    },
  })

  Style.define('fontFamily', {
    get() {
      const raw = this._textLayer?.swiftBridge?.fontFamily()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(fontFamily) {
      this._textLayer?.swiftBridge?.setFontFamily(String(fontFamily))
    },
  })

  Style.define('fontWeight', {
    get() {
      const raw = this._textLayer?.swiftBridge?.fontWeight()
      if (!raw) {
        return undefined
      }
      return Number(raw)
    },

    set(fontWeight) {
      this._textLayer?.swiftBridge?.setFontWeight(fontWeight)
    },
  })

  Style.define('fontStyle', {
    get() {
      const raw = this._textLayer?.swiftBridge?.fontStyle()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(fontStyle) {
      this._textLayer?.swiftBridge?.setFontStyle(fontStyle)
    },
  })

  Style.define('fontVariant', {
    get() {
      const raw = this._textLayer?.swiftBridge?.fontVariant()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(fontVariant) {
      this._textLayer?.swiftBridge?.setFontVariant(fontVariant)
    },
  })

  Style.define('fontStretch', {
    get() {
      const raw = this._textLayer?.swiftBridge?.fontStretch()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(fontStretch) {
      this._textLayer?.swiftBridge?.setFontStretch(fontStretch)
    },
  })

  Style.define('textUnderline', {
    get() {
      const raw = this._textLayer?.swiftBridge?.textUnderline()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(textUnderline) {
      this._textLayer?.swiftBridge?.setTextUnderline(textUnderline)
    },
  })

  Style.define('textStrikethrough', {
    get() {
      const raw = this._textLayer?.swiftBridge?.textStrikethrough()
      if (!raw) {
        return undefined
      }
      return String(raw)
    },

    set(textStrikethrough) {
      this._textLayer?.swiftBridge?.setTextStrikethrough(textStrikethrough)
    },
  })

  Style.define('fontAxes', {
    get() {
      const axes = this._textLayer?.swiftBridge?.fontAxes()
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
          this._textLayer?.swiftBridge?.setVariableFontAxisValue_forAxisID(
            fontAxes[name].value,
            fontAxes[name].id || current[name].id
          )
        }
      })
    },
  })
}
