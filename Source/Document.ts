// ********************************
// # Document.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject'
import { Layer } from './Layer'
import { Page } from './Page'
import { Selection } from './Selection'

/**
 * A Sketch document.
 */
export class Document extends WrappedObject {
    /**
     * Make a new document object.
     *
     * @param {MSDocument} document The underlying MSDocument object.
     * @param {Application} application The application object.
     *
     * Note that constructing one of these doesn't actually create
     * a Sketch document. Instead you pass in the underlying MSDocument
     * that this object represents.
     *
     * If you do want to create a new document, you can do so with Application#newDocument.
     */
    constructor(document, application) {
        super(document)
        
        /**
         * The application that this document belongs to.
         *
         * @type {Application}
         */
        
        this._application = application
    }
    
    /**
     * Return a wrapped version of a Sketch object.
     * We don't know about *all* Sketch object types, but
     * for some we will return a special subclass.
     * The fallback position is just to return an instance of WrappedObject.
     *
     * @param {object} sketchObject The underlying sketch object that we're wrapping.
     * @return {WrappedObject} A javascript object (subclass of WrappedObject), which represents the Sketch object we were given.
     */
    wrapObject(sketchObject) {
        return this._application.wrapObject(sketchObject, this)
    }
    
    
    /**
     * The layers that the user has selected in the currently selected page.
     *
     * @return {Selection} A selection object representing the layers that the user has selected in the currently selected page.
     */
    get selectedLayers() {
        return new Selection(this.selectedPage);
    }
    
    /**
     * The current page that the user has selected.
     *
     * @return {Page} A page object representing the page that the user is currently viewing.
     */
    get selectedPage() {
        return new Page(this._object.currentPage(), this)
    }
    
    /**
     * Returns a list of the pages in this document.
     *
     * @return {list} The pages.
     */
    get pages() {
        var result = [];
        var loop = this._object.pages().objectEnumerator()
        var item;
        while (item = loop.nextObject()) {
            result.push(new Page(item, this));
        }
        return result;
    }
    
    /**
     * Find the first layer in this document which has the given id.
     *
     * @return {Layer} A layer object, if one was found.
     */
    layerWithID(layer_id) {
        var layer = this._object.documentData().layerWithID_(layer_id);
        if (layer)
            return new Layer(layer, this);
    }
    
    /**
     * Find the first layer in this document which has the given name.
     *
     * @return {Layer} A layer object, if one was found.
     */
    layerNamed(layer_name) {
        // As it happens, layerWithID also matches names, so we can implement
        // this method in the same way as layerWithID.
        // That might not always be true though, which is why the JS API splits
        // them into separate functions.
        
        var layer = this._object.documentData().layerWithID_(layer_name);
        if (layer)
            return new Layer(layer, this);
    }
    
    /**
     * Iterate through a bunch of native Sketch layers, executing a block.
     * Used internally by Group and Selection.
     *
     * @param {array} layers The layers to iterate over.
     * @param {function(layer: Layer)} filter A filter function to call for each layer. If it returns false, the layer is skipped.
     * @param {function(layer: Layer)} block The function to execute for each layer.
     */
    iterateWithNativeLayers(layers, filter, block) {
        // if we're given a string as a filter, treat it as a function
        // to call on the layer
        var loopBlock = block
        if (typeof filter === 'string' || filter instanceof String) {
            loopBlock = function(layer) {
                if (layer[filter]) {
                    block(layer)
                }
            }
        } else if (filter) {
            loopBlock = function(layer) {
                if (filter(layer)) {
                    block(layer)
                }
            }
        }
        
        var loop = layers.objectEnumerator();
        var item
        while (item = loop.nextObject()) {
            var layer = this.wrapObject(item)
            loopBlock(layer);
        }
    }
    
    /**
     * Center the view of the document window on a given layer.
     *
     * @param {Layer} layer The layer to center on.
     */
    centerOnLayer(layer) {
        this._object.contentDrawView().centerRect_(layer._object.rect())
    }
    
    /**
     * Return a list of tests to run for this class.
     *
     * @return Object containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
    static tests() {
        return {
            "tests" : {
                "testPages" : function(tester) {
                    var document = tester.newTestDocument()
                    var pages = document.pages
                    
                    tester.assertEqual(pages.length, 1)
                    tester.assertEqual(pages[0].sketchObject, document.selectedPage.sketchObject)
                    
                },
                
                "testSelectedLayers" : function(tester) {
                    var document = tester.newTestDocument()
                    var selection = document.selectedLayers
                    tester.assert(selection.isEmpty, "should have an empty selection")
                    
                    var page = document.selectedPage
                    var group = page.newGroup({ 'name': "Test"})
                    group.select()
                    
                    tester.assert(!selection.isEmpty, "should no longer have an empty selection")
                },
                
                "testLayerWithID" : function(tester) {
                    var document = tester.newTestDocument()
                    var page = document.selectedPage
                    var group = page.newGroup({ 'name': "Test"})
                    var id = group.id
                    var found = document.layerWithID(id)
                    tester.assertEqual(group.sketchObject, found.sketchObject)
                }
                
            }
        };
    }
}
