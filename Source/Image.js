// ********************************
// # Image.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

/**
  Represents an image layer.
 */

export class Image extends Layer {

  /**
      Is this an image layer?

      All Layer objects respond to this method, but only image layers return true.

      @return {bool} true for instances of Image, false for any other layer type.
  */

  get isImage () {
    return true
  }

  /**
    Set the layer's image to the contents of the image file at a given URL.

    @param {NSURL} url The location of the image to use.
  */

  set imageURL (url) {
    // TODO: need to do some type safety here to ensure "http://" style strings can map to NSURL.
    var image = NSImage.alloc().initWithContentsOfURL_(url)
    var imageData = MSImageData.alloc().initWithImage_convertColorSpace_(image, true)
    this.sketchObject.setImage_(imageData)
  }

  get imageURL () {
    // TODO : need to map this back to the current NSURL stored.
    return null
  }
  /**
   Return a list of tests to run for this class.

   @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
   */

  static tests () {
    return {
      'tests': {
        'testIsImage': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var image = page.newImage()
          tester.assertTrue(image.isImage)
          tester.assertFalse(page.isImage)
        }

      }
    }
  }

}
