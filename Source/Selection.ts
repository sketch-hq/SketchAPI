// ********************************
// # Selection.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from "./Layer";
import { WrappedObject } from "./WrappedObject";

/**
 * Represents the layers that the user has selected.
 */
export class Selection extends WrappedObject {
    /**
     * Make a new Selection object.
     *
     * @param {Page} page The page that the selection relates to.
     */
    constructor(page) {
        super(page._object);
        this._page = page;
    }
    
    /**
     * Return the native Sketch layers in the selection.
     *
     * @return {array} The selected layers.
     */
    get nativeLayers() {
        let layers = this._object.selectedLayers().layers();
        return layers;
    }
    
    /**
     * Return the number of selected layers.
     *
     * @return {number} The number of layers that are selected.
     */
    get length() {
        return this.nativeLayers.count();
    }
    
    /**
     * Does the selection contain any layers?
     *
     * @return {boolean} true if the selection is empty.
     */
    get isEmpty() {
        return (this.nativeLayers.count() == 0);
    }
    
    /**
     * Perform an action once for each layer in the selection, then clear it.
     *
     * @param {function(layer: Layer)} block The function to execute for each layer.
     */
    iterateThenClear(block) {
        let layers = this.nativeLayers;
        this.clear();
        this._page._document.iterateWithNativeLayers(layers, null, block);
    }
    
    /**
     * Perform an action once for each layer in the selection that passes a filter, then clear the selection.
     *
     * @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
     * @param {function(layer: Layer)} block The function to execute for each layer.
     */
    iterateWithFilterThenClear(filter, block) {
        let layers = this.nativeLayers;
        this.clear();
        this._page._document.iterateWithNativeLayers(layers, filter, block);
    }
    
    /**
     * Perform an action once for each layer in the selection.
     *
     * @param {function(layer: Layer)} block The function to execute for each layer.
     */
    iterate(block) {
        this._page._document.iterateWithNativeLayers(this.nativeLayers, null, block);
    }
    
    /**
     * Perform an action once for each layer in the selection that passes a filter.
     *
     * @param {function(layer: Layer)} filter Filter function called on each layer first to check whether it should be iterated.
     * @param {function(layer: Layer)} block The function to execute for each layer.
     */
    iterateWithFilter(filter, block) {
        this._page._document.iterateWithNativeLayers(this.nativeLayers, filter, block);
    }
    
    /**
     * Clear the selection.
     */
    clear() {
        this._page.sketchObject.changeSelectionBySelectingLayers(null);
    }
    
    /**
     * Return a list of tests to run for this class.
     *
     * @return Object containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
    static tests() {
        return {
            tests: {
                testEmpty(tester) {
                    let document = tester.newTestDocument();
                    tester.assert(document.selectedLayers.isEmpty, "selection should be empty");
                },
                
                testClear(tester) {
                    let document = tester.newTestDocument();
                    let group = document.selectedPage.newGroup();
                    group.select();
                    let selection = document.selectedLayers;
                    tester.assert(!selection.isEmpty, "selection should not be empty");
                    selection.clear();
                    tester.assert(selection.isEmpty, "selection should be empty");
                },
                
                testIterate(tester) {
                    let document = tester.newTestDocument();
                    let group = document.selectedPage.newGroup();
                    let text = document.selectedPage.newText();
                    text.select();
                    group.addToSelection();
                    let selection = document.selectedLayers;
                    
                    let iterations = 0;
                    let groups = 0;
                    selection.iterate(function(layer) {
                        iterations++;
                        if (layer.sketchObject == group.sketchObject) { groups++; }
                    });
                    tester.assertEqual(iterations, 2);
                    tester.assertEqual(groups, 1);
                },
                
                testIterateWithFilter(tester) {
                    let document = tester.newTestDocument();
                    let group = document.selectedPage.newGroup();
                    let text = document.selectedPage.newText();
                    text.select();
                    group.addToSelection();
                    let selection = document.selectedLayers;
                    
                    let iterations = 0;
                    let groups = 0;
                    selection.iterateWithFilter("isGroup", function(layer) {
                        iterations++;
                        if (layer.sketchObject == group.sketchObject) { groups++; }
                    });
                    tester.assertEqual(iterations, 1);
                    tester.assertEqual(groups, 1);
                },
                
                testIterateThenClear(tester) {
                    let document = tester.newTestDocument();
                    let group = document.selectedPage.newGroup();
                    group.select();
                    let selection = document.selectedLayers;
                    
                    let iterations = 0;
                    tester.assert(!selection.isEmpty, "selection should not be empty");
                    selection.iterateThenClear(function(layer) {
                        iterations++;
                    });
                    tester.assertEqual(iterations, 1);
                    tester.assert(selection.isEmpty, "selection should be empty");
                },
                
                testIterateWithFilterThenClear(tester) {
                    let document = tester.newTestDocument();
                    let group = document.selectedPage.newGroup();
                    group.select();
                    let selection = document.selectedLayers;
                    
                    let iterations = 0;
                    tester.assert(!selection.isEmpty, "selection should not be empty");
                    selection.iterateWithFilterThenClear("isText", function(layer) {
                        iterations++;
                    });
                    tester.assertEqual(iterations, 0);
                    tester.assert(selection.isEmpty, "selection should be empty");
                },
            },
        };
    }
}
