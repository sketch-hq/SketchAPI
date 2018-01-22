import { DefinedPropertiesKey } from '../WrappedObject'
import { Layer } from './Layer'
import { Rectangle } from '../Rectangle'
import { Types } from '../enums'
import { Factory } from '../Factory'

/**
 * Represents an image layer.
 */
export class Image extends Layer {
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
Image[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(Image, MSBitmapLayer)

Image.define('image', {
  get() {
    // TODO: return something nice here
    return this._object.image
  },
  set(image) {
    let nsImage
    if (typeof image === 'string') {
      nsImage = NSImage.alloc().initByReferencingFile(image)
    } else if (image.class && String(image.class()) === 'NSImage') {
      nsImage = image
    } else if (image.class && String(image.class()) === 'NSURL') {
      nsImage = NSImage.alloc().initWithContentsOfURL_(image)
    } else {
      throw new Error('`image` needs to be a string')
    }

    const imageData = MSImageData.alloc().initWithImage(nsImage)
    this._object.setImage(imageData)
  },
})
