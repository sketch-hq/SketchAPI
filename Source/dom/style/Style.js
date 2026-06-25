import { toArray } from 'util'
import { WrappedObject, DefinedPropertiesKey } from '../WrappedObject'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Gradient, GradientType, GradientColorInterpolation } from './Gradient'
import { colorFromString, colorToString } from './Color'
import { Shadow } from './Shadow'
import { BorderOptions, Arrowhead, LineEnd, LineJoin } from './BorderOptions'
import { Blur, BlurType } from './Blur'
import { Fill, FillType, PatternFillType } from './Fill'
import { Border, BorderPosition } from './Border'
import { defineTextStyleProperties } from './Text'
import { BlendingMode, BlendingModeMap } from '../models/BlendingMode'
import { Corners } from './Corners'
import { StylePartType } from './StylePartType'
import { parseEnumValue } from '../utils'

const DEFAULT_STYLE = {
  fills: [],
}

export const StyleTypeMap = {
  1: 'Layer',
  2: 'Text',
  3: 'Unknown',
}
export const StyleType = {
  Layer: 'Layer',
  Text: 'Text',
  Unknown: 'Unknown',
}

/**
 * Represents a Sketch layer style.
 */

export class Style extends WrappedObject {
  /**
   * Make a new style object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(style = {}, parentType) {
    if (!style.sketchObject) {
      /* eslint-disable no-param-reassign */
      style = Object.assign({}, DEFAULT_STYLE, style)

      if (parentType === Types.Text) {
        // It's a bit backwards that we have to create an entire text layer here
        // just to access the default style. But the fact is, we _are_ doing
        // things backwards here by creating a brand new style object instead of
        // modifying the one on the parent text layer
        style.sketchObject = MSTextLayer.alloc().init().style()
        style.sketchObject.textStyle = MSTextStyle.alloc().init()
        style.sketchObject.textStyle().attributes = MSDefaultTextStyle.defaultTextStyle()
      } else {
        style.sketchObject = MSDefaultStyle.defaultStyle() // implicitly copied
      }
      /* eslint-enable no-param-reassign */
    }

    super(style)
  }

  static colorFromString(color) {
    return colorFromString(color)
  }

  static colorToString(value) {
    return colorToString(value)
  }

  isOutOfSyncWithSharedStyle(sharedStyle) {
    return !!wrapObject(sharedStyle).sketchObject.isOutOfSyncWithInstance(
      this._object
    )
  }

  syncWithSharedStyle(sharedStyle) {
    this._object.syncWithTemplateInstance(
      wrapObject(sharedStyle).style.sketchObject
    )
  }

  getParentLayer() {
    if (this._object.parentLayer) {
      return wrapObject(this._object.parentLayer())
    }
    return null
  }

  getDefaultLineHeight() {
    const raw = this._textLayer?.swiftBridge?.defaultLineHeight()
    if (!raw) {
      return undefined
    }
    return Number(raw)
  }
}

Style.type = Types.Style
Style[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Style, MSStyle)
Factory.registerClass(Style, MSImmutableStyle)

Style.GradientType = GradientType
Style.GradientColorInterpolation = GradientColorInterpolation

Style.define('opacity', {
  get() {
    return this._object.contextSettings().opacity()
  },
  set(opacity) {
    this._object.contextSettings().setOpacity(Math.min(Math.max(opacity, 0), 1))
  },
})

Style.define('progressiveAlpha', {
  get() {
    if (!this._object.contextSettings().isProgressive()) {
      return undefined
    }
    let nativeGradient = this._object.contextSettings().gradient()
    if (!nativeGradient) {
      return undefined
    }
    return Gradient.from(nativeGradient)
  },
  set(newGradient) {
    if (newGradient) {
      this._object.contextSettings().setIsProgressive(true)
      this._object
        .contextSettings()
        .setGradient(Gradient.from(newGradient).sketchObject)
    } else {
      this._object.contextSettings().setIsProgressive(false)
      this._object.contextSettings().setGradient(null)
    }
  },
})

Style.BlendingMode = BlendingMode
Style.define('blendingMode', {
  get() {
    const mode = this._object.contextSettings().blendMode()
    return (
      Object.keys(BlendingModeMap).find(
        (key) => BlendingModeMap[key] === mode
      ) || mode
    )
  },
  set(mode) {
    const blendingMode = parseEnumValue(
      mode,
      BlendingModeMap,
      'Style.blendingMode'
    )
    if (blendingMode !== undefined) {
      this._object.contextSettings().setBlendMode(blendingMode)
    }
  },
})

Style.Arrowhead = Arrowhead
Style.LineEnd = LineEnd
Style.LineJoin = LineJoin
Style.define('borderOptions', {
  get() {
    return BorderOptions.fromNative(this._object)
  },
  set(borderOptions) {
    BorderOptions.updateNative(this._object, borderOptions)
  },
})

Style.BlurType = BlurType
Style.define('blurs', {
  array: true,
  get() {
    const blurs = toArray(this._object.blurs())
    return blurs.map(Blur.fromNative.bind(Blur))
  },
  set(values) {
    const objects = values.map((item) => Blur.toNative(item, this))
    this._object.setBlurs(objects)
  },
  insertItem(item, index) {
    const arr = toArray(this._object.blurs())
    arr.splice(index, 0, item)
    this.blurs = arr
    return Blur.fromNative(Blur.toNative(item, this))
  },
  removeItem(index) {
    const arr = toArray(this._object.blurs())
    const removed = arr.splice(index, 1)
    this.blurs = arr
    return Blur.fromNative(removed[0])
  },
})

const FillLayeringType = Object.freeze({
  // Shape fills, text color and group/artboard backgrounds
  Regular: 0,
  // Group tints specifically
  Tint: 1,
  // Frames as overlay can draw a backdrop _around_ themselves
  Backdrop: 2,
})

Style.define('tint', {
  get() {
    const fills = toArray(this._object.fills())
    // There could be at most one group tint fill
    return fills.map(Fill.fromNative.bind(Fill)).find((fill) => {
      return fill.sketchObject.layeringType() === FillLayeringType.Tint
    })
  },
  set(newTint) {
    if (this.isImmutable()) {
      return
    }
    // See if we have a tint fill we can update or remove
    const existingTint = this.tint
    if (existingTint) {
      if (newTint) {
        existingTint.update(newTint)
      } else {
        const nativeFillsWithoutTint = toArray(
          this._object.fills() ?? []
        ).filter((nativeFill) => {
          return nativeFill !== existingTint.sketchObject
        })
        this._object.setFills(nativeFillsWithoutTint)
      }
      return
    }

    const tint = Fill.fromNative(
      Fill.toNative(
        {
          ...newTint,
          fillType: FillType.Color,
        },
        this
      )
    )
    tint.sketchObject.setLayeringType(FillLayeringType.Tint)
    this.fills.push(tint)
  },
})

Style.FillType = FillType
Style.PatternFillType = PatternFillType
Style.define('fills', {
  array: true,
  get() {
    const fills = toArray(this._object.fills())
    return fills.map(Fill.fromNative.bind(Fill)).filter((fill) => {
      // Only return items that are regular fills. See `Style.tint`
      return fill.sketchObject.layeringType() === FillLayeringType.Regular
    })
  },
  set(values) {
    const objects = values.map((item) => Fill.toNative(item, this))
    this._object.setFills(objects)
  },
  insertItem(item, index) {
    const arr = toArray(this._object.fills())
    arr.splice(index, 0, item)
    this.fills = arr
    return Fill.fromNative(Fill.toNative(item, this))
  },
  removeItem(index) {
    const arr = toArray(this._object.fills())
    const removed = arr.splice(index, 1)
    this.fills = arr
    return Fill.fromNative(removed[0])
  },
})

Style.BorderPosition = BorderPosition
Style.define('borders', {
  array: true,
  get() {
    const borders = toArray(this._object.borders())
    return borders.map(Border.fromNative.bind(Border))
  },
  set(values) {
    const objects = values.map((item) => Border.toNative(item, this))
    this._object.setBorders(objects)
  },
  insertItem(item, index) {
    const arr = toArray(this._object.borders())
    arr.splice(index, 0, item)
    this.borders = arr
    return Border.fromNative(Border.toNative(item, this))
  },
  removeItem(index) {
    const arr = toArray(this._object.borders())
    const removed = arr.splice(index, 1)
    this.borders = arr
    return Border.fromNative(removed[0])
  },
})

Style.define('shadows', {
  array: true,
  get() {
    return toArray(this._object.dropShadows()).map(
      Shadow.fromNative.bind(Shadow)
    )
  },
  set(values) {
    // remove all existing drop shadows
    toArray(this._object.dropShadows()).forEach((shadow) =>
      this._object.removeStyleShadow(shadow)
    )
    // create native counterparts and add each as a new shadow style part
    const objects = values.map((item) => Shadow.toNativeDropShadow(item, this))
    objects.forEach((shadow) => this._object.addStylePart(shadow))
  },
  insertItem(item, index) {
    item.isInnerShadow = false // force the provide item to be a drop shadow
    const arr = toArray(this._object.dropShadows())
    arr.splice(index, 0, item)
    this.shadows = arr
    return Shadow.fromNative(Shadow.toNativeDropShadow(item, this))
  },
  removeItem(index) {
    const removed = this._object.stylePartsOfType(StylePartType.Shadow)[index]
    this._object.deleteStylePartOfType_atIndex(StylePartType.Shadow, index)
    return Shadow.fromNative(removed)
  },
})

Style.define('innerShadows', {
  array: true,
  get() {
    return toArray(this._object.innerShadows()).map(
      Shadow.fromNative.bind(Shadow)
    )
  },
  set(values) {
    // remove all existing inner shadows
    toArray(this._object.innerShadows()).forEach((shadow) =>
      this._object.removeStyleShadow(shadow)
    )
    // create native counterparts and add each as a new shadow style part
    const objects = values.map((item) => Shadow.toNativeInnerShadow(item, this))
    objects.forEach((shadow) => this._object.addStylePart(shadow))
  },
  insertItem(item, index) {
    item.isInnerShadow = true // force the provide item to be a inner shadow
    const arr = toArray(this._object.innerShadows())
    arr.splice(index, 0, item)
    this.innerShadows = arr
    return Shadow.fromNative(Shadow.toNativeInnerShadow(item, this))
  },
  removeItem(index) {
    const removed = this._object.stylePartsOfType(StylePartType.InnerShadow)[
      index
    ]
    this._object.deleteStylePartOfType_atIndex(StylePartType.InnerShadow, index)
    return Shadow.fromNative(removed)
  },
})

Style.StyleType = StyleType
Style.define('styleType', {
  get() {
    return this._object.textStyle() &&
      this._object.textStyle().attributes()[NSFontAttributeName]
      ? StyleType.Text
      : StyleType.Layer
  },
})

Style.CornerStyle = Corners.Style
Style.define('corners', {
  get() {
    const nativeCorners = this._object.corners()
    if (nativeCorners) {
      return Corners.fromNative(nativeCorners)
    }

    const corners = new Corners()
    if (!this.isImmutable()) {
      this._object.setCorners(corners.sketchObject)
    }
    return corners
  },
  set(newCorners) {
    if (this.isImmutable()) {
      return
    }
    // Calling the getter to force a corners object to be created if needed
    const existingCorners = this.corners
    existingCorners.update(newCorners)
  },
})

defineTextStyleProperties(Style)
