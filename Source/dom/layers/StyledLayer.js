import { isNativeObject, toArray } from 'util'
import { DefinedPropertiesKey } from '../WrappedObject'
import { Factory } from '../Factory'
import { Layer } from './Layer'
import { Style } from '../style/Style'
import { SharedStyle } from '../models/SharedStyle'
import { wrapObject, wrapNativeObject } from '../wrapNativeObject'

/**
 * Represents a layer with style.
 */
export class StyledLayer extends Layer {}

StyledLayer[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(StyledLayer, MSStyledLayer)
Factory.registerClass(StyledLayer, MSImmutableStyledLayer)

StyledLayer.define('style', {
  get() {
    return Style.fromNative(this._object.style())
  },
  set(style) {
    if (this.isImmutable()) {
      return
    }

    // we can then actually set the style
    if (isNativeObject(style)) {
      this._object.style = style.copy()
    } else if (!style || !style.sketchObject) {
      this._object.style = new Style(style, this.type).sketchObject
    } else {
      this._object.style = style.sketchObject.copy()
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
    this._object.setSharedStyleID(nativeSharedStyle.id)
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
