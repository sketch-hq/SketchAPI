import { DefinedPropertiesKey } from '../WrappedObject'
import { Factory } from '../Factory'
import { Layer } from './Layer'
import { Style } from '../style/Style'
import { isNativeObject } from '../utils'

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
    return style
  },
  set(style) {
    if (this.isImmutable()) {
      return
    }
    if (isNativeObject(style)) {
      this._object.style = style
    } else if (!style || !style.sketchObject) {
      this._object.style = new Style(style).sketchObject
    } else {
      this._object.style = style.sketchObject
    }
  },
})
