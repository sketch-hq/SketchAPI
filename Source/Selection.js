// ********************************
// # Selection.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import WrappedObject from './WrappedObject'
import Layer from './Layer'


/**
    Represents the layers that the user has selected.
*/

export default class Selection extends WrappedObject {
    constructor(document) {
      super(document)
    }

    /**
        Does the selection contain any layers?

        @return {boolean} true if the selection is empty.
    */

    get isEmpty() {
        return (this.object.selectedLayers().count() == 0);
    }

    /**
        Perform an action once for each layer in the selection, then clear it.
    */

    iterateAndClear(block) {
      var layers = this.object.selectedLayers();
      this.clear();
      this._iterateWithLayers(layers, block);
    }

    /**
        Perform an action once for each layer in the selection.
    */

    iterate(block) {
      var layers = this.object.selectedLayers();
      this._iterateWithLayers(layers, block);
    }

    /**
        Clear the selection.
    */

    clear() {
      this.object.currentPage().deselectAllLayers();
    }


    /**
        Iterate through a bunch of layers, executing a block.
    */

    _iterateWithLayers(layers, block) {
      var loop = layers.objectEnumerator();
      var item;
      while (item = loop.nextObject()) {
        block(new Layer(item));
      }
    }

}
