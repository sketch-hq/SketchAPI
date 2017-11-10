// ********************************
// # Document.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from "./Layer";
import { Page } from "./Page";
import { Selection } from "./Selection";
import { WrappedObject } from "./WrappedObject";
import { Application } from "./Application";
import { Tester } from "./Tester";

export type IterateFilter = string | ((layer: Layer) => void) | undefined;
export type IterateBlock = ((layer: Layer) => void);

/**
 * A Sketch document.
 */
export class Document extends WrappedObject {
    /**
     * The application that this document belongs to.
     */
    _application: Application;
    
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
    constructor(document: Document, application: Application) {
        super(document);
        this._application = application;
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
    wrapObject(sketchObject: any) {
        return this._application.wrapObject(sketchObject, this);
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
        return new Page(this._object.currentPage(), this);
    }
    
    /**
     * Returns a list of the pages in this document.
     *
     * @return {list} The pages.
     */
    get pages() {
        const result = [];
        const loop = this._object.pages().objectEnumerator();
        let mutableItem;
        while (mutableItem = loop.nextObject()) {
            result.push(new Page(mutableItem, this));
        }
        return result;
    }
    
    /**
     * Find the first layer in this document which has the given id.
     *
     * @return {Layer} A layer object, if one was found.
     */
    layerWithID(layer_id: string) {
        const layer = this._object.documentData().layerWithID_(layer_id);
        if (layer) {
            return new Layer(layer, this);
        }
    }
    
    /**
     * Find the first layer in this document which has the given name.
     *
     * @return {Layer} A layer object, if one was found.
     */
    layerNamed(layer_name: any) {
        // As it happens, layerWithID also matches names, so we can implement
        // this method in the same way as layerWithID.
        // That might not always be true though, which is why the JS API splits
        // them into separate functions.
        
        const layer = this._object.documentData().layerWithID_(layer_name);
        if (layer) {
            return new Layer(layer, this);
        }
    }
    
    /**
     * Iterate through a bunch of native Sketch layers, executing a block.
     * Used internally by Group and Selection.
     *
     * @param {Array} layers The layers to iterate over.
     * @param {function(layer: Layer)} filter A filter function to call for each layer. If it returns false, the layer is skipped.
     * @param {function(layer: Layer)} block The function to execute for each layer.
     */
    iterateWithNativeLayers(layers: any, filter: IterateFilter, block: IterateBlock) {
        // if we're given a string as a filter, treat it as a function
        // to call on the layer
        let mutableLoopBlock = block;
        if (typeof filter === "string") {
            mutableLoopBlock = (layer) => {
                if ((layer as any)[filter]) {
                    block(layer);
                }
            };
        } else if (typeof filter === "function") {
            mutableLoopBlock = (layer) => {
                if (filter(layer)) {
                    block(layer);
                }
            };
        }
        
        const loop = layers.objectEnumerator();
        let mutableItem;
        while (mutableItem = loop.nextObject()) {
            const layer = this.wrapObject(mutableItem);
            mutableLoopBlock(layer);
        }
    }
    
    /**
     * Center the view of the document window on a given layer.
     *
     * @param {Layer} layer The layer to center on.
     */
    centerOnLayer(layer: Layer) {
        this._object.contentDrawView().centerRect_(layer._object.rect());
    }
    
    /**
     * Return a list of tests to run for this class.
     *
     * @return Object containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
    static tests() {
        return {
            tests: {
                testPages(tester: Tester) {
                    const document = tester.newTestDocument();
                    const pages = document.pages;
                    
                    tester.assertEqual(pages.length, 1);
                    tester.assertEqual(pages[0].sketchObject, document.selectedPage.sketchObject);
                    
                },
                
                testSelectedLayers(tester: Tester) {
                    const document = tester.newTestDocument();
                    const selection = document.selectedLayers;
                    tester.assert(selection.isEmpty, "should have an empty selection");
                    
                    const page = document.selectedPage;
                    const group = page.newGroup({ name: "Test"});
                    group.select();
                    
                    tester.assert(!selection.isEmpty, "should no longer have an empty selection");
                },
                
                testLayerWithID(tester: Tester) {
                    const document = tester.newTestDocument();
                    const page = document.selectedPage;
                    const group = page.newGroup({ name: "Test"});
                    const id = group.id;
                    const found = document.layerWithID(id);
                    tester.assertEqual(group.sketchObject, found && found.sketchObject);
                },
            },
        };
    }
}
