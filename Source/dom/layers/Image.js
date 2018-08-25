import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { ImageData } from '../models/ImageData'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { wrapObject } from '../wrapNativeObject'

/**
 * Represents an image layer.
 */
export class Image extends StyledLayer {
  /**
   * Make a new image layer object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(layer = {}) {
    if (!layer.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      layer.sketchObject = Factory.createNative(Image)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(layer)
  }
}

Image.type = Types.Image
Image[DefinedPropertiesKey] = { ...StyledLayer[DefinedPropertiesKey] }
Factory.registerClass(Image, MSBitmapLayer)

Image.define('image', {
  get() {
    return wrapObject(this._object.image())
  },
  set(image) {
    const imageData = ImageData.from(image)
    this._object.setImage(imageData.sketchObject)
  },
})
