import { DefinedPropertiesKey } from '../WrappedObject'
import { Layer } from './Layer'
import { Style } from '../style/Style'
import { isNativeObject } from '../utils'

/**
 * Represents a layer with style.
 */
export class StyledLayer extends Layer {}

StyledLayer[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }

StyledLayer.define('style', {
  get() {
    const style = Style.fromNative(this._object.style())
    return style
  },
  set(style) {
    if (isNativeObject(style)) {
      this._object.style = style
    } else if (!style || !style.sketchObject) {
      this._object.style = new Style(style).sketchObject
    } else {
      this._object.style = style.sketchObject
    }
  },
})
