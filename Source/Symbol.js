// ********************************
// # Layer.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'
/**
Represents a Sketch layer.
*/

export class Symbol extends Layer {

  get isSymbol () {
    return true
  }
    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

  static tests () {
    return {
      'tests': {
        'testIsSymbol': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var shape = page.newShape()
          tester.assertFalse(shape.isSymbol)
        }
      }
    }
  }
}
