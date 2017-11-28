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
   * @param {MSBitmapLayer} layer The underlying model object from Sketch.
   * @param {Document} document The document that the bitmap layer belongs to.
   */
  constructor(layer = {}, document) {
    if (document) {
      log(
        'using a constructor to box a native object is deprecated. Use `fromNative` instead'
      )
      return Image.fromNative(layer)
    }

    if (!layer.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      layer.sketchObject = Factory.createNative(Image)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())
    }

    super(layer)
  }

  /**
   * Is this an image layer?
   *
   * All Layer objects respond to this method, but only image layers return true.
   *
   * @return {bool} true for instances of Image, false for any other layer type.
   */
  get isImage() {
    return true
  }

  /**
   * Set the layer's image to the contents of the image file at a given URL.
   *
   * @param {NSURL} url The location of the image to use.
   */
  set imageURL(url) {
    log('`imageURL` is deprecated. Use `image` instead')
    const image = NSImage.alloc().initWithContentsOfURL_(url)
    const imageData = MSImageData.alloc().initWithImage(image)
    this._object.setImage_(imageData)
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
