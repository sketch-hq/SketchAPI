// ********************************
// # Page.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Group } from './Group.js'
import { Selection } from './Selection.js'

/**
Represents a Page in a Sketch document.
*/

export class Page extends Group {

  /**
  The layers that the user has selected.

  @return {Selection} A selection object representing the layers that the user has selected.
  */

  get selectedLayers () {
    return new Selection(this)
  }

  /**
  Is this a page?

  All Layer objects respond to this method, but only pages return true.

  @return {bool} true for instances of Group, false for any other layer type.
  */

  get isPage () {
    return true
  }

  /**
  Returns a newly created artboard, which has been added to this page,
  and sets it up using the supplied properties.

  @param properties {dictionary} Properties to apply to the artboard.
  @return {Artboard} the new artboard.
  */

  newArtboard (properties = {}) {
    var frame = this._frameForLayerWithProperties(properties)
    var newLayer = MSArtboardGroup.alloc().initWithFrame_(frame.asCGRect())
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Artboard')
  }

  /**
  Return a list of tests to run for this class.

  @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  static tests () {
    return {
      'tests': {
        'testSelectedLayers': function (tester) {
          var document = tester.newTestDocument()
          var selection = document.selectedLayers
          tester.assert(selection.isEmpty, 'should have an empty selection')

          var page = document.selectedPage
          var group = page.newGroup({'name': 'Test'})
          group.select()

          tester.assert(!selection.isEmpty, 'should no longer have an empty selection')
        },

        'testLayerWithID': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var group = page.newGroup({'name': 'Test'})
          var id = group.id
          var found = document.layerWithID(id)
          tester.assertEqual(group.sketchObject, found.sketchObject)
        },

        'testIsPage': function (tester) {
          var document = tester.newTestDocument()
          var page = document.selectedPage
          var image = page.newImage()
          tester.assertTrue(page.isPage)
          tester.assertFalse(image.isPage)
        }

      }
    }
  }

}
