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
  }

  resizeToOriginalSize() {
    if (this.isImmutable()) {
      return this
    }
    this._object.resizeToOriginalSize()
    return this
  }

  removeBackground(options = {}, callback) {
    if (this.isImmutable()) {
      return callback?.(new Error('Cannot modify an immutable image layer'))
    }

    return Image.removeBackgroundFromLayers([this], options, callback)
  }

  static removeBackgroundFromLayers(layers, options = {}, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    const nativeImages = layers
      .filter((i) => i.type === Types.Image && !i.isImmutable())
      .map((i) => i._object)
    if (nativeImages.length === 0) {
      return callback?.(new Error('No suitable image layers provided'))
    }

    const { people = false } = options || {}

    const fiber = coscript.createFiber()
    const token = `sketchapi.backgroundRemover-${NSUUID.UUID().UUIDString()}`
    fiber.onCleanup(() => {
      coscript.env().removeObjectForKey(token)
    })
    const remover = MSBitmapLayer.removeBackgroundFromLayers_peopleMode_context_completionHandler(
      nativeImages,
      people,
      coscript,
      (err) => {
        callback?.(err ? new Error(err) : undefined)
        fiber.cleanup()
      }
    )
    // Keep a strong reference to the BackgroundRemover object until it's finished
    coscript.env().setObject_forKey(remover, token)
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
