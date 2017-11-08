// ********************************
// # Artboard.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Group } from './Group'

/**
 * A Sketch artboard.
 */
export class Artboard extends Group {
    /**
     * Make a new artboard.
     *
     * @param artboard {MSArtboardGroup} The underlying MSArtboardGroup model object from Sketch.
     * @param document The document that the artboard belongs to.
     */
    constructor(artboard, document) {
        super(artboard, document)
    }
    
    /**
     * Is this an artboard?
     *
     * All Layer objects respond to this method, but only Artboard objects return true.
     *
     * @return true for instances of Artboard, false for any other layer type.
     */
    get isArtboard() {
        return true;
    }
    
    /**
     * Return a list of tests to run for this class.
     *
     * @return Object containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
    static tests() {
        return {
            "tests" : {
                "testIsArtboard" : function(tester) {
                    var document = tester.newTestDocument()
                    var page = document.selectedPage
                    var artboard = page.newArtboard({"name" : "Test"})
                    tester.assertTrue(artboard.isArtboard)
                    tester.assertFalse(page.isArtboard)
                },
            }
        };
    }
}
