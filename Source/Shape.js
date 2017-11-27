import { DefinedPropertiesKey } from './WrappedObject'
import { Layer } from './Layer'
import { Style } from './Style'
import { Types } from './enums'
import { Factory } from './Factory'
import { Rectangle } from './Rectangle'

/**
 * Represents a shape layer (a rectangle, oval, path, etc).
 */
export class Shape extends Layer {
  /**
   * Make a new shape object.
   *
   * @param {MSShapeGroup} shape The underlying model object from Sketch.
   * @param {Document} document The document that the shape belongs to.
   */
  constructor(shape = {}, document) {
    if (document) {
      log(
        'using a constructor to box a native object is deprecated. Use `fromNative` instead'
      )
      return Shape.fromNative(shape)
    }

    if (!shape.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      shape.sketchObject = Factory.createNative(Shape)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(shape)
  }

  /**
   * Is this a shape layer?
   *
   * All Layer objects respond to this method, but only shape layers (rectangles, ovals, paths etc) return true.
   *
   * @return {bool} true for instances of Group, false for any other layer type.
   */
  get isShape() {
    return true
  }
}

Shape.type = Types.Shape
Shape[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(Shape, MSShapeGroup)

Shape.define('style', {
  get() {
    return new Style(this._object.style())
  },
  set(style) {
    this._object.style = style.sketchObject
  },
})
