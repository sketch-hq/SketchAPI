import { DefinedPropertiesKey } from '../WrappedObject'
import { StyledLayer } from './StyledLayer'
import { ImageData } from '../models/ImageData'
import { Rectangle } from '../models/Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'

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

    // If a `parent` is provided to the constructor, Sketch will draw the Image,
    // creating a representation of it. So we'll use that to set the Image
    // dimensions (unless there's also a `frame`, in which case we assume
    // that's there for a good reason, and don't do any automatic scaling).
    if (layer.parent && !layer.frame) {
      this.resizeToOriginalSize()
    }
  }

  resizeToOriginalSize() {
    if (this.isImmutable()) {
      return this
    }
    this._object.resizeToOriginalSize()
    return this
  }
}

Image.type = Types.Image
Image[DefinedPropertiesKey] = { ...StyledLayer[DefinedPropertiesKey] }
Factory.registerClass(Image, MSBitmapLayer)
Factory.registerClass(Image, MSImmutableBitmapLayer)

Image.define('image', {
  get() {
    return ImageData.fromNative(this._object.image())
  },
  set(image) {
    if (this.isImmutable()) {
      return
    }
    const imageData = ImageData.from(image)
    this._object.setImage(imageData.sketchObject)
  },
})
