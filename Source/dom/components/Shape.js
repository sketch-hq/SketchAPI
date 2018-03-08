import { DefinedPropertiesKey } from '../WrappedObject'
import { Layer } from './Layer'
import { Style } from '../Style'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Rectangle } from '../Rectangle'
import { isNativeObject } from '../utils'

// TODO: set and modify path

/**
 * Represents a shape layer (a rectangle, oval, path, etc).
 */
export class Shape extends Layer {
  /**
   * Make a new shape object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(shape = {}) {
    if (!shape.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      shape.sketchObject = Factory.createNative(Shape)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(shape)

    this.sketchObject.addLayer(
      MSRectangleShape.alloc().initWithFrame(this.frame.asCGRect())
    )
  }
}

Shape.type = Types.Shape
Shape[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(Shape, MSShapeGroup)

Shape.define('style', {
  get() {
    return Style.fromNative(this._object.style())
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
