// ********************************
// # Selection.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'
import { Layer } from './Layer.js'


/**
    Represents the layers that the user has selected.
*/

export class Selection extends WrappedObject {

    /**
      Make a new Selection object.

      @param {Page} page The page that the selection relates to.
    */

    constructor(page) {
      super(page._object)
      this._document = page._document
    }

    /**
        Does the selection contain any layers?

        @return {boolean} true if the selection is empty.
    */

    get isEmpty() {
        var layers = this._object.selectedLayers().layers()
        return (layers.count() == 0);
    }

    /**
        Perform an action once for each layer in the selection, then clear it.

        @param {function(layer: Layer)} block The function to execute for each layer.
    */

    iterateThenClear(block) {
      var layers = this._object.selectedLayers().layers();
      this.clear();
      this._document.iterateWithNativeLayers(layers, null, block);
    }

    /**
        Perform an action once for each layer in the selection that passes a filter, then clear the selection.

        @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
        @param {function(layer: Layer)} block The function to execute for each layer.
    */

    iterateWithFilterThenClear(filter, block) {
      var layers = this._object.selectedLayers().layers();
      this.clear();
      this._document.iterateWithNativeLayers(layers, filter, block);
    }

    /**
        Perform an action once for each layer in the selection.

        @param {function(layer: Layer)} block The function to execute for each layer.
    */

    iterate(block) {
      var layers = this._object.selectedLayers().layers();
      this._document.iterateWithNativeLayers(layers, null, block);
    }

    /**
        Perform an action once for each layer in the selection that passes a filter.

        @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
        @param {function(layer: Layer)} block The function to execute for each layer.
    */

    iterateWithFilter(filter, block) {
      var layers = this._object.selectedLayers().layers();
      this._document.iterateWithNativeLayers(layers, filter, block);
    }


    /**
        Clear the selection.
    */

    clear() {
      this._page.sketchObject.deselectAllLayers();
    }



    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

    static tests() {
        return {
            "tests" : {
                "testIterate" : function(tester) {
                  var document = tester.newTestDocument()
                  var group = document.selectedPage.newGroup()
                  var selection = document.selectedLayers

                  selection.iterate(function(layer) {
                    tester.assertEqual(layer.sketchObject, group.sketchObject);
                  })
                },
            }
        };
    }

}
