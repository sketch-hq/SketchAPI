import { DefinedPropertiesKey } from '../WrappedObject'
import { Factory } from '../Factory'
import { Layer } from './Layer'
import { Style } from '../style/Style'
import { isNativeObject } from '../utils'
import { Types } from '../enums'

/**
 * Represents a layer with style.
 */
export class StyledLayer extends Layer {}

StyledLayer[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(StyledLayer, MSStyledLayer)
Factory.registerClass(StyledLayer, MSImmutableStyledLayer)

StyledLayer.define('style', {
  get() {
    const style = Style.fromNative(this._object.style())
    style._parentLayer = this
    return style
  },
  set(style) {
    if (this.isImmutable()) {
      return
    }

    // handle passing a shared style directly
    if (style && style.type === Types.SharedStyle) {
      this._object.setSharedStyleID(style.id)
      return
    }

    // if a style has a shared style id, we need to set it first
    // so that the layer is linked to the shared style
    if (style && style._sharedStyle) {
      this._object.setSharedStyleID(style._sharedStyle.id)
    }
    if (style && style.sharedStyleId) {
      this._object.setSharedStyleID(style.sharedStyleId)
    }

    // we can then actually set the style
    if (isNativeObject(style)) {
      this._object.style = style
    } else if (!style || !style.sketchObject) {
      this._object.style = new Style(style).sketchObject
    } else {
      this._object.style = style.sketchObject
    }
  },
})
