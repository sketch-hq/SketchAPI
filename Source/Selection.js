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
      this.iterateWithLayers(layers, block);
    }

    /**
        Perform an action once for each layer in the selection.
    */

    iterate(block) {
      var layers = this.object.selectedLayers();
      this.iterateWithLayers(layers, block);
    }

    /**
        Clear the selection.
    */

    clear() {
      this.object.currentPage().deselectAllLayers();
    }

    iterateWithLayers(layers, block) {
      var loop = layers.objectEnumerator();
      var item;
      while (item = loop.nextObject()) {
        block(new Layer(item));
      }
    }

}
