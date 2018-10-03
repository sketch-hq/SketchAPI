import { DefinedPropertiesKey } from '../WrappedObject'
import { Factory } from '../Factory'
import { Layer } from './Layer'
import { Style } from '../style/Style'
import { isNativeObject } from '../utils'
import { SharedStyle } from '../models/SharedStyle'
import { wrapObject } from '../wrapNativeObject'

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
    let nativeStyle
    if (isNativeObject(style)) {
      this._object.style = style
    } else if (!style || !style.sketchObject) {
      this._object.style = new Style(style).sketchObject
    } else {
      this._object.style = style.sketchObject
    }

    this._object.style = nativeStyle.copy()
  },
})

StyledLayer.define('sharedStyle', {
  get() {
    if (!this._object.sharedObject) {
      return null
    }
    const nativeSharedStyle = this._object.sharedObject()
    if (!nativeSharedStyle) {
      return null
    }
    return SharedStyle.fromNative(nativeSharedStyle)
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
    this._object
      .style()
      .syncWithTemplateInstance(nativeSharedStyle.style.sketchObject)
  },
})
