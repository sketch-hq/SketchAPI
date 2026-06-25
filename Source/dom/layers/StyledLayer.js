import { isNativeObject, toArray } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { Factory } from '../Factory'
import { Layer } from './Layer'
import { Style } from '../style/Style'
import { SharedStyle } from '../models/SharedStyle'
import { wrapObject, wrapNativeObject } from '../wrapNativeObject'
import { isWrappedObject } from '../utils'
import { Types } from '../enums'

/**
 * Represents a layer with style.
 */
export class StyledLayer extends Layer {}

StyledLayer[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(StyledLayer, MSStyledLayer)
Factory.registerClass(StyledLayer, MSImmutableStyledLayer)

StyledLayer.define('style', {
  // For container types (groups, frames, symbols) we want to make sure the correct groupBehavior
  // is applied before we attempt to set the style, because certain style properties (e.g. fills, tints)
  // will be ignored for certain container types
  depends: 'groupBehavior',
  get() {
    const style = Style.fromNative(this._object.style())
    if (this.isImmutable()) {
      // Immutable objects don't have a reference to their parent, and we might
      // need one to access the Swift bridge object for a parent Text
      style.__immutableParentLayer = this._object
    }
    return style
  },
  set(style) {
    if (this.isImmutable()) {
      return
    }

    if (isNativeObject(style)) {
      // a) it's a native MSStyle instance, we copy it as is
      this._object.style = style.copy()
    } else if (
      isWrappedObject(style) &&
      style.type === Types.Style &&
      style.sketchObject
    ) {
      // b) it's a Style object, we copy it as is
      this._object.style = style.sketchObject.copy()
    } else if (style) {
      // c) it's a plain JS object, we apply its properties to our own style
      Style.fromNative(this._object.style()).update(style)
    } else {
      // d) if null or undefined, we reset to defaults by creating a brand new style object
      this._object.setStyle(new Style({}, this.type).sketchObject)
    }
  },
})

StyledLayer.define('sharedStyleId', {
  get() {
    const nativeSharedStyle = this._object.sharedStyleID()
    if (!nativeSharedStyle) {
      return null
    }
    return String(nativeSharedStyle)
  },
  set(sharedStyleId) {
    console.warn(
      'StyledLayer.sharedStyleId is deprecated. Use StyledLayer.sharedStyle instead.'
    )
    if (this.isImmutable()) {
      return
    }

    if (!sharedStyleId) {
      this._object.setSharedStyleID(null)
      return
    }

    this._object.setSharedStyleID(sharedStyleId)
  },
})

StyledLayer.define('sharedStyle', {
  enumerable: false,
  exportable: false,
  get() {
    if (this._object.sharedStyle) {
      const nativeSharedStyle = this._object.sharedStyle()
      return nativeSharedStyle
        ? SharedStyle.fromNative(nativeSharedStyle)
        : null
    }

    if (!this.sharedStyleId) {
      return null
    }

    // We're likely dealing with an immutable layer inside a detached symbol
    // instance. This means we have to loop through all documents to find one
    // with a shared style with matching id
    let nativeSharedStyle = null
    toArray(NSApp.orderedDocuments())
      .filter((doc) => doc.isKindOfClass(MSDocument))
      .some((doc) => {
        const documentData = doc.documentData?.()?.immutableModelObject?.()
        nativeSharedStyle =
          documentData?.textStyleWithID?.(this.sharedStyleId) ||
          documentData?.layerStyleWithID?.(this.sharedStyleId)
        return !!nativeSharedStyle
      })
    return nativeSharedStyle ? wrapNativeObject(nativeSharedStyle) : null
  },
  set(sharedStyle) {
    if (this.isImmutable()) {
      return
    }

    if (!sharedStyle) {
      this._object.setSharedStyleID(null)
      return
    }

    const nativeSharedStyle = wrapObject(sharedStyle)
    this._object.setSharedStyle(nativeSharedStyle.sketchObject)
  },
})

StyledLayer.define('masksSiblings', {
  get() {
    return Boolean(this._object.hasClippingMask())
  },
  set(shouldMaskSiblings) {
    if (this.isImmutable()) {
      return
    }
    this._object.setHasClippingMask(Boolean(shouldMaskSiblings))
  },
})

Layer.MaskMode = Object.freeze({
  Outline: 0,
  Alpha: 1,
})

StyledLayer.define('maskMode', {
  get() {
    return Number(this._object.clippingMaskMode())
  },
  set(newMaskMode) {
    if (this.isImmutable()) {
      return
    }
    if (Number.isInteger(newMaskMode)) {
      this._object.setClippingMaskMode(newMaskMode)
    } else {
      throw new Error(`Invalid mask mode: ${newMaskMode}. Expected an integer.`)
    }
  },
})
