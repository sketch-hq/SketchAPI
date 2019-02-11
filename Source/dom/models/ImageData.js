import { isNativeObject } from 'util'
import { Buffer } from 'buffer'
import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { isWrappedObject } from '../utils'

/**
 * An MSImageData. This is not exposed, only used by Image
 */
export class ImageData extends WrappedObject {
  /**
   * can accept a wide range of input:
   * - a Buffer
   * - a wrapped ImageData
   * - a native NSImage
   * - a native NSURL
   * - a native MSImageData
   * - a string: path to the file to load the image from
   * - an object with a `path` property: path to the file to load the image from
   * - an object with a `base64` string: a base64 encoded image
   */
  static from(image) {
    if (isWrappedObject(image) && image.type === Types.ImageData) {
      return image
    }

    let nsImage
    if (isNativeObject(image)) {
      if (image.isKindOfClass(NSImage)) {
        nsImage = image
      } else if (image.isKindOfClass(NSData)) {
        nsImage = NSImage.alloc().initWithData(image)
      } else if (image.isKindOfClass(NSURL)) {
        nsImage = NSImage.alloc().initWithContentsOfURL(image)
      } else if (image.isKindOfClass(MSImageData)) {
        return ImageData.fromNative(image)
      } else {
        throw new Error(
          `Cannot create an image from a ${String(image.class())}`
        )
      }
    } else if (typeof image === 'string' || (image && image.path)) {
      nsImage = NSImage.alloc().initByReferencingFile(image.path || image)
    } else if (image && image.base64) {
      try {
        const data = NSData.alloc().initWithBase64EncodedString_options(
          image.base64,
          NSDataBase64DecodingIgnoreUnknownCharacters
        )
        nsImage = NSImage.alloc().initWithData(data)
      } catch (err) {
        throw new Error(err)
      }
    } else if (Buffer.isBuffer(image)) {
      nsImage = NSImage.alloc().initWithData(image.toNSData())
    } else {
      throw new Error('`image` needs to be a Buffer')
    }

    return ImageData.fromNative(MSImageData.alloc().initWithImage(nsImage))
  }
}

ImageData.type = Types.ImageData
ImageData[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(ImageData, MSImageData)

// make it explicit that we will get a native object
ImageData.define('nsimage', {
  get() {
    return this._object.image()
  },
})

// make it explicit that we will get a native object
ImageData.define('nsdata', {
  get() {
    return this._object.data()
  },
})

ImageData.define('id', {
  exportable: true,
  importable: false,
  /**
   * Returns the object ID of the wrapped Sketch model object.
   *
   * @return {string} The id.
   */
  get() {
    return String(this._object.hash())
  },
})
