// ********************************
// # Image.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer'

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
    
    constructor(layer, document) {
        super(layer, document)
    }
    
    /**
     * Is this an image layer?
     *
     * All Layer objects respond to this method, but only image layers return true.
     *
     * @return {boolean} true for instances of Image, false for any other layer type.
     */
    
    get isImage() {
        return true;
    }
    
    /**
     * Set the layer's image to the contents of the image file at a given URL.
     *
     * @param {NSURL} url The location of the image to use.
     */
    
    set imageURL(url) {
        var image = NSImage.alloc().initWithContentsOfURL_(url)
        var imageData = MSImageData.alloc().initWithImage(image)
        this._object.setImage_(imageData)
    }
    
    /**
     * Return a list of tests to run for this class.
     *
     * @return Object containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
    
    static tests() {
        return {
            "tests" : {
                "testIsImage" : function(tester) {
                    var document = tester.newTestDocument()
                    var page = document.selectedPage
                    var image = page.newImage()
                    tester.assertTrue(image.isImage)
                    tester.assertFalse(page.isImage)
                },
            }
        };
    }
    
}
