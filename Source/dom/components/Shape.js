import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Rectangle } from '../Rectangle'

// TODO: set and modify path

/**
 * Represents a shape layer (a rectangle, oval, path, etc).
 */
export class Shape extends StyledLayer {
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

      super(shape)

      const frame = this._object.frame()
      this.sketchObject.addLayer(
        MSRectangleShape.alloc().initWithFrame(
          CGRectMake(0, 0, frame.width(), frame.height())
        )
      )
    } else {
      super(shape)
    }
  }
}

Shape.type = Types.Shape
Shape[DefinedPropertiesKey] = { ...StyledLayer[DefinedPropertiesKey] }
Factory.registerClass(Shape, MSShapeGroup)
