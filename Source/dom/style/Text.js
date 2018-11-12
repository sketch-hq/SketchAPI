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
    textStyle = MSTextStyle.styleWithAttributes({})
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
}
