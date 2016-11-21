// ********************************
// # SymbolMaster.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

/**
  Represents a symbol master layer (a rectangle, oval, path, etc).
 */

export class SymbolMaster extends Layer {


    /**
      Make a new symbol master object.

      @param {MSSymbolMasterLayer} symbol master The underlying model object from Sketch.
      @param {Document} document The document that the symbol master belongs to.
    */

    constructor(symbolMaster, document) {
      super(symbolMaster, document)
    }


  /**
  Is this a symbol layer?

  All Layer objects respond to this method, but only symbol layers return true.

  @return {bool} true for instances of SymbolInstance or SymbolMaster, false for any other layer type.
  */

  get isSymbol() { return true; }

  /**
  Is this a symbol master layer?

  All Layer objects respond to this method, but only symbol master layers return true.

  @return {bool} true for instances of SymbolMaster, false for any other layer type.
  */

  get isSymbolMaster() { return true; }  
    

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester master.
     */

    static tests() {
        return {
            "tests" : {             
              "testIsSymbol" : function(tester) {
                var document = tester.newTestDocument()
                var page = document.selectedPage;
                var symbolMaster = page.newSymbolMaster();
                tester.assertTrue(symbolMaster.isSymbol)
                tester.assertFalse(page.isSymbol)
              },              
              "testIsSymbolMaster" : function(tester) {
                var document = tester.newTestDocument()
                var page = document.selectedPage;
                var symbolMaster = page.newSymbolMaster();
                tester.assertTrue(symbolMaster.isSymbolMaster)
                tester.assertFalse(page.isSymbolMaster)
              },
            }
        };
    }

}
