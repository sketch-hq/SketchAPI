import { Color } from './Color'

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

function getAttributes(_object) {
  const textStyle = _object.textStyle()
  if (!textStyle) {
    return undefined
  }
  const attributes = textStyle.attributes()
  return attributes
}

function getParagraphStyle(_object) {
  const attributes = getAttributes(_object)
  if (!attributes) {
    return undefined
  }

  let paragraphStyle = attributes[NSParagraphStyleAttributeName]
  if (!paragraphStyle) {
    paragraphStyle = NSParagraphStyle.defaultParagraphStyle()
  }

  return paragraphStyle
}

function updateAttributes(_object, fn) {
  let textStyle = _object.textStyle()

  if (!textStyle) {
    textStyle = MSTextStyle.styleWithAttributes(
      MSDefaultTextStyle.defaultTextStyle()
    )
    _object.setTextStyle(textStyle)
  }

  let attributes = getAttributes(_object)

  attributes = fn(attributes.mutableCopy())

  textStyle.setAttributes(attributes)
}

function updateParagraphStyle(_object, fn) {
  updateAttributes(_object, attributes => {
    let paragraphStyle = attributes[NSParagraphStyleAttributeName]
    if (!paragraphStyle) {
      paragraphStyle = NSParagraphStyle.defaultParagraphStyle()
    }

    paragraphStyle = fn(paragraphStyle.mutableCopy())

    // eslint-disable-next-line
    attributes[NSParagraphStyleAttributeName] = paragraphStyle

    return attributes
  })
}

export function defineTextStyleProperties(Style) {
  Style.define('alignment', {
    /**
     * The alignment of the layer.
     * This will be one of the values: "left", "center", "right", "justified", "natural".
     *
     * @return {string} The alignment mode.
     */
    get() {
      const paragraphStyle = getParagraphStyle(this._object)

      if (!paragraphStyle) {
        return undefined
      }

      const raw = paragraphStyle.alignment()
      return TextAlignmentReverseMap[raw] || raw
    },
    set(mode) {
      if (this.isImmutable()) {
        return
      }

      updateParagraphStyle(this._object, paragraphStyle => {
        const translated = TextAlignmentMap[mode]
        paragraphStyle.setAlignment(
          typeof translated !== 'undefined' ? translated : mode
        )
        return paragraphStyle
      })
    },
  })

  Style.define('verticalAlignment', {
    get() {
      const textStyle = this._object.textStyle()
      if (!textStyle) {
        return undefined
      }
      const raw = textStyle.verticalAlignment()
      return VerticalTextAlignmentReverseMap[raw] || raw
    },
    set(mode) {
      if (this.isImmutable()) {
        return
      }

      let textStyle = this._object.textStyle()

      if (!textStyle) {
        textStyle = MSTextStyle.styleWithAttributes({})
        this._object.setTextStyle(textStyle)
      }

      const translated = VerticalTextAlignmentMap[mode]
      textStyle.verticalAlignment =
        typeof translated !== 'undefined' ? translated : mode
    },
  })

  Style.define('kerning', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const raw = attributes[NSKernAttributeName]

      if (raw === null) {
        return null
      }

      return Number(raw)
    },

    set(kerning) {
      if (this.isImmutable()) {
        return
      }

      updateAttributes(this._object, attributes => {
        // eslint-disable-next-line
        attributes[NSKernAttributeName] = kerning
        return attributes
      })
    },
  })

  Style.define('lineHeight', {
    get() {
      const paragraphStyle = getParagraphStyle(this._object)

      if (!paragraphStyle) {
        return undefined
      }

      const fixedLineHeight = paragraphStyle.minimumLineHeight()

      if (
        fixedLineHeight > 0 &&
        fixedLineHeight == paragraphStyle.maximumLineHeight()
      ) {
        return Number(fixedLineHeight)
      }
      return null
    },

    set(lineHeight) {
      if (this.isImmutable()) {
        return
      }

      updateParagraphStyle(this._object, paragraphStyle => {
        // eslint-disable-next-line
        paragraphStyle.minimumLineHeight = lineHeight
        // eslint-disable-next-line
        paragraphStyle.maximumLineHeight = lineHeight
        // eslint-disable-next-line
        paragraphStyle.lineSpacing = 0
        return paragraphStyle
      })
    },
  })

  Style.define('paragraphSpacing', {
    get() {
      const paragraphStyle = getParagraphStyle(this._object)

      if (!paragraphStyle) {
        return undefined
      }

      return Number(paragraphStyle.paragraphSpacing())
    },

    set(paragraphSpacing) {
      if (this.isImmutable()) {
        return
      }

      updateParagraphStyle(this._object, paragraphStyle => {
        // eslint-disable-next-line
        paragraphStyle.paragraphSpacing = paragraphSpacing
        // eslint-disable-next-line
        paragraphStyle.lineSpacing = paragraphSpacing
        return paragraphStyle
      })
    },
  })

  Style.define('textColor', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const raw = attributes.MSAttributedStringColorAttribute

      return Color.from(raw || '#000000FF').toString()
    },

    set(color) {
      if (this.isImmutable()) {
        return
      }

      const _color = Color.from(color)

      updateAttributes(this._object, attributes => {
        // eslint-disable-next-line
        attributes.MSAttributedStringColorAttribute = _color._object
        return attributes
      })
    },
  })

  Style.define('fontSize', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const font = attributes[NSFontAttributeName]

      if (!font) {
        return undefined
      }

      return Number(font.pointSize())
    },

    set(fontSize) {
      if (this.isImmutable()) {
        return
      }

      updateAttributes(this._object, attributes => {
        const font = attributes[NSFontAttributeName]
        const newFont = NSFontManager.sharedFontManager().convertFont_toSize(
          font,
          fontSize
        )

        if (!newFont) {
          return attributes
        }

        // eslint-disable-next-line
        attributes[NSFontAttributeName] = newFont
        return attributes
      })
    },
  })

  Style.define('textTransform', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const transform = attributes.MSAttributedStringTextTransformAttribute

      if (!transform) {
        return 'none'
      }
      if (transform == 1) {
        return 'uppercase'
      }
      if (transform == 2) {
        return 'lowercase'
      }

      return undefined
    },

    set(transform) {
      if (this.isImmutable()) {
        return
      }

      const _transform = String(transform)
      let attribute = null
      if (_transform === 'uppercase') {
        attribute = 1
      } else if (_transform === 'lowercase') {
        attribute = 2
      } else if (_transform !== 'none' && transform) {
        attribute = transform
      }

      updateAttributes(this._object, attributes => {
        // eslint-disable-next-line
        attributes.MSAttributedStringTextTransformAttribute = attribute
        return attributes
      })
    },
  })

  Style.define('fontFamily', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const font = attributes[NSFontAttributeName]

      if (!font) {
        return undefined
      }

      return String(font.familyName())
    },

    set(fontFamily) {
      if (this.isImmutable()) {
        return
      }

      updateAttributes(this._object, attributes => {
        const font = attributes[NSFontAttributeName]
        const newFont = NSFontManager.sharedFontManager().convertFont_toFamily(
          font,
          fontFamily
        )

        if (!newFont) {
          return attributes
        }

        // eslint-disable-next-line
        attributes[NSFontAttributeName] = newFont

        return attributes
      })
    },
  })

  Style.define('fontWeight', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const font = attributes[NSFontAttributeName]

      if (!font) {
        return undefined
      }

      return Number(NSFontManager.sharedFontManager().weightOfFont(font))
    },

    set(fontWeight) {
      if (this.isImmutable()) {
        return
      }

      updateAttributes(this._object, attributes => {
        let font = attributes[NSFontAttributeName]
        const manager = NSFontManager.sharedFontManager()

        // remove the bold trait so that we can actually change the weight
        font = manager.convertFont_toNotHaveTrait(font, NSBoldFontMask)

        const newFont = manager.fontWithFamily_traits_weight_size(
          font.familyName(),
          manager.traitsOfFont(font),
          fontWeight,
          font.pointSize()
        )

        if (!newFont) {
          return attributes
        }

        // eslint-disable-next-line
        attributes[NSFontAttributeName] = newFont

        return attributes
      })
    },
  })

  Style.define('fontStyle', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const font = attributes[NSFontAttributeName]

      if (!font) {
        return undefined
      }

      return NSFontManager.sharedFontManager().fontNamed_hasTraits(
        font.fontName(),
        NSItalicFontMask
      )
        ? 'italic'
        : undefined
    },

    set(fontStyle) {
      if (this.isImmutable()) {
        return
      }

      updateAttributes(this._object, attributes => {
        const font = attributes[NSFontAttributeName]
        const manager = NSFontManager.sharedFontManager()

        let newFont

        if (fontStyle === 'normal' || !fontStyle) {
          newFont = manager.convertFont_toNotHaveTrait(font, NSItalicFontMask)
        } else if (fontStyle === 'italic' || fontStyle === 'oblique') {
          newFont = manager.convertFont_toHaveTrait(font, NSItalicFontMask)
        } else {
          throw new Error('Unknown font style')
        }

        if (!newFont) {
          return attributes
        }

        // eslint-disable-next-line
        attributes[NSFontAttributeName] = newFont

        return attributes
      })
    },
  })

  Style.define('fontVariant', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const font = attributes[NSFontAttributeName]

      if (!font) {
        return undefined
      }

      return NSFontManager.sharedFontManager().fontNamed_hasTraits(
        font.fontName(),
        NSSmallCapsFontMask
      )
        ? 'small-caps'
        : undefined
    },

    set(fontVariant) {
      if (this.isImmutable()) {
        return
      }

      updateAttributes(this._object, attributes => {
        const font = attributes[NSFontAttributeName]
        const manager = NSFontManager.sharedFontManager()

        let newFont

        if (fontVariant === 'normal' || !fontVariant) {
          newFont = manager.convertFont_toNotHaveTrait(
            font,
            NSSmallCapsFontMask
          )
        } else if (fontVariant === 'small-caps') {
          newFont = manager.convertFont_toHaveTrait(font, NSSmallCapsFontMask)
        } else {
          throw new Error('Unknown font variant')
        }

        if (!newFont) {
          return attributes
        }

        // eslint-disable-next-line
        attributes[NSFontAttributeName] = newFont

        return attributes
      })
    },
  })

  /* eslint-disable no-bitwise */
  Style.define('fontStretch', {
    get() {
      const attributes = getAttributes(this._object)
      if (!attributes) {
        return undefined
      }

      const font = attributes[NSFontAttributeName]

      if (!font) {
        return undefined
      }

      const traits = NSFontManager.sharedFontManager().traitsOfFont(font)

      if ((traits & NSCompressedFontMask) == NSCompressedFontMask) {
        return 'compressed'
      }
      if ((traits & NSCondensedFontMask) == NSCondensedFontMask) {
        return 'condensed'
      }
      if ((traits & NSExpandedFontMask) == NSExpandedFontMask) {
        return 'expanded'
      }
      if ((traits & NSNarrowFontMask) == NSNarrowFontMask) {
        return 'narrow'
      }
      if ((traits & NSPosterFontMask) == NSPosterFontMask) {
        return 'poster'
      }
      return undefined
    },

    set(fontVariant) {
      if (this.isImmutable()) {
        return
      }

      updateAttributes(this._object, attributes => {
        const font = attributes[NSFontAttributeName]
        const manager = NSFontManager.sharedFontManager()

        let newFont

        if (fontVariant === 'normal' || !fontVariant) {
          newFont = manager.convertFont_toNotHaveTrait(
            font,
            NSCompressedFontMask |
              NSCondensedFontMask |
              NSExpandedFontMask |
              NSNarrowFontMask |
              NSPosterFontMask
          )
        } else if (fontVariant === 'compressed') {
          newFont = manager.convertFont_toHaveTrait(font, NSCompressedFontMask)
        } else if (fontVariant === 'condensed') {
          newFont = manager.convertFont_toHaveTrait(font, NSCondensedFontMask)
        } else if (fontVariant === 'expanded') {
          newFont = manager.convertFont_toHaveTrait(font, NSExpandedFontMask)
        } else if (fontVariant === 'narrow') {
          newFont = manager.convertFont_toHaveTrait(font, NSNarrowFontMask)
        } else if (fontVariant === 'poster') {
          newFont = manager.convertFont_toHaveTrait(font, NSPosterFontMask)
        } else {
          throw new Error('Unknown font stretch')
        }

        if (!newFont) {
          return attributes
        }

        // eslint-disable-next-line
        attributes[NSFontAttributeName] = newFont

        return attributes
      })
    },
  })
  /* eslint-enable */

  // TODO: text-decoration
}
