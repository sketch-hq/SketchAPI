import { WrappedObject, DefinedPropertiesKey } from './WrappedObject'

export const FillType = {
  color: 0, // A solid fill/border.
  gradient: 1, // A gradient fill/border.
  pattern: 4, // A pattern fill/border.
  noise: 5, // A noise fill/border.
}

/**
 * Represents a Sketch layer style.
 */

export class Style extends WrappedObject {
  /**
   * Make a new style object.
   *
   * @param {MSStyle} style The underlying model object from Sketch.
   */
  constructor(style = {}) {
    if (style.class && typeof style.class === 'function') {
      log(
        'using a constructor to box a native object is deprecated. Use `fromNative` instead'
      )
      return Style.fromNative(style)
    }

    if (!style.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      style.sketchObject = MSDefaultStyle.defaultStyle()
    }

    super(style)
  }

  /**
   * Given a string description of a color, return an MSColor.
   */
  static colorFromString(value) {
    const immutable = MSImmutableColor.colorWithSVGString_(value)
    return MSColor.alloc().initWithImmutableObject_(immutable)
  }

  /**
   * Set the borders to use for this style.
   *
   * The value provided is a list of items, with each one representing a style.
   *
   * Currently these values can only be strings with css-style color specifications
   * such as #ffee33 (alpha values are supported too, so #aabbccdd is valid).
   *
   * These strings are used to create simple borders.
   *
   * In the future the intention is to also support dictionaries allowing gradients
   * and other more complex border parameters to be specified.
   *
   * @param {array} values A list of colors - each one representing a border to create.
   *
   */
  set borders(values) {
    const objects = []
    values.forEach(value => {
      const color = Style.colorFromString(value)
      const border = MSStyleBorder.new()
      border.setColor_(color)
      border.setFillType_(FillType.color)
      border.enabled = true

      objects.push(border)
    })
    this.sketchObject.setBorders_(objects)
  }

  /**
   * Set the fills to use for this style.
   *
   * The value provided is a list of items, with each one representing a style.
   *
   * Currently these values can only be strings with css-style color specifications
   * such as #ffee33 (alpha values are supported too, so #aabbccdd is valid).
   *
   * These strings are used to create simple fills.
   *
   * In the future the intention is to also support dictionaries allowing gradients
   * and other more complex fill parameters to be specified.
   *
   * @param {array} values A list of colors - each one representing a fill to create.
   *
   */
  set fills(values) {
    const objects = []
    values.forEach(value => {
      const color = Style.colorFromString(value)
      const fill = MSStyleFill.new()
      fill.setColor_(color)
      fill.setFillType_(FillType.color)
      fill.enabled = true

      objects.push(fill)
    })
    this.sketchObject.setFills_(objects)
  }
}

Style.FillType = FillType
Style[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
