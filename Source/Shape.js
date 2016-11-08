// ********************************
// # Shape.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'
import { Style } from './Style.js'

/**
  Represents a shape layer (a rectangle, oval, path, etc).
 */

export class Shape extends Layer {

  /**
   * get - Is this a {Shape} layer?
   *
   * All Layer objects respond to this method, but only {Shape} layers return true.
   *
   * @return {boolean}  for instances of {Shape}, false for any other layer type.
   */

  get isShape () {
    return true
  }

  /**
   Return the style of the layer.

   @return {Style} The style of the layer.
   */

  get style () {
    return new Style(this.sketchObject.style(), this._document)
  }

  /**
  Set the style of the layer.

  @param {Style} value The style settings to use for the layer.
  */

  set style (value) {
    this.sketchObject.style = value.sketchObject
  }

  /**
   Return a list of tests to run for this class.

   @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
   */

  static tests () {
    return {
      'tests': {
        'testIsShape': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var shape = page.newShape()
          tester.assertTrue(shape.isShape)
          tester.assertFalse(page.isShape)
        }
      }
    }
  }

}
