// ********************************
// # Artboard.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Group } from './Group.js'

/**
    A Sketch artboard.
*/

export class Artboard extends Group {

  /**
   * get - Is this a {Artboard} layer?
   *
   * All Layer objects respond to this method, but only {Artboard} layers return true.
   *
   * @return {boolean}  for instances of {Artboard}, false for any other layer type.
   */
  get isArtboard () {
    return true
  }

  /**
   Return a list of tests to run for this class.

   @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
   */

  static tests () {
    return {
      'tests': {
        'testIsArtboard': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var artboard = page.newArtboard({
            'name': 'Test'
          })
          tester.assertTrue(artboard.isArtboard)
          tester.assertFalse(page.isArtboard)
        }
      }
    }
  }
}
