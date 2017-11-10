// ********************************
// # WrappedObject.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Tester, TestSpecification } from "./Tester";
import { Document } from "./Document";

/**
 * Base class for all objects that
 * wrap Sketch classes.
 *
 */
export class WrappedObject {
    /**
     * The underlying Sketch model object that we are wrapping.
     */
    _object: any;
    
    /**
     * The document that this object belongs to.
     */
    _document: Document;
    
    /**
     * Return a new wrapped object for a given Sketch model object.
     *
     * @param {Object} object - The Sketch model object to wrap.
     * @param document The document that this object belongs to.
     */
    constructor(object: any, document?: Document) {
        this._object = object;
        if (document) {
            this._document = document;
        }
    }
    
    /**
     * Returns the wrapped Sketch object.
     */
    get sketchObject() {
        return this._object;
    }
    
    /**
     * Returns the object ID of the wrapped Sketch model object.
     *
     * @return {string} The id.
     */
    get id() {
        return this._object.objectID();
    }
    
    /**
     * Return a list of tests to run for this class.
     *
     * @return Object containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
    static tests(): TestSpecification {
        return {
            tests: {
                testSketchObject(tester: Tester) {
                    const object = MSLayer.new();
                    const wrapped = new WrappedObject(object);
                    tester.assertEqual(wrapped.sketchObject, object);
                },
                testID(tester: Tester) {
                    const object = MSLayer.new();
                    const wrapped = new WrappedObject(object);
                    tester.assertEqual(wrapped.id, object.objectID());
                },
            },
        };
    }
}
