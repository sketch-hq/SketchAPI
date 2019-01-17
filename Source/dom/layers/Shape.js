import { DefinedPropertiesKey } from '../WrappedObject'
import { Group } from './Group'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Rectangle } from '../models/Rectangle'

// TODO: set and modify path

/**
 * Represents a shape group (which contains some layers with boolean ops).
 */
export class Shape extends Group {
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

      if (!shape.layers) {
        const frame = this._object.frame()
        this.sketchObject.addLayer(
          MSRectangleShape.alloc().initWithFrame(
            CGRectMake(0, 0, frame.width(), frame.height())
          )
        )
      }
    } else {
      super(shape)
    }
  }
}

Shape.type = Types.Shape
Shape[DefinedPropertiesKey] = { ...Group[DefinedPropertiesKey] }
Factory.registerClass(Shape, MSShapeGroup)
Factory.registerClass(Shape, MSImmutableShapeGroup)
