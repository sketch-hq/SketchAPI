// ********************************
// # SymbolInstance.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Layer } from './Layer.js'

/**
  Represents a symbol instance layer (a rectangle, oval, path, etc).
 */

export class SymbolInstance extends Layer {


    /**
      Make a new symbol instance object.

      @param {MSSymbolInstanceLayer} symbol instance The underlying model object from Sketch.
      @param {Document} document The document that the symbol instance belongs to.
    */

    constructor(symbolInstance, document) {
      super(symbolInstance, document)
    }


  /**
  Is this a symbol layer?

  All Layer objects respond to this method, but only symbol layers return true.

  @return {bool} true for instances of SymbolInstance or SymbolMaster, false for any other layer type.
  */

  get isSymbol() { return true; }

  /**
  Is this a symbol instance layer?

  All Layer objects respond to this method, but only symbol instance layers return true.

  @return {bool} true for instances of SymbolInstance, false for any other layer type.
  */

  get isSymbolInstance() { return true; }
    

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */

    static tests() {
        return {
            "tests" : {  
              // TODO: implement page.newSymbolInstance();           
              // "testIsSymbol" : function(tester) {
              //   var document = tester.newTestDocument()
              //   var page = document.selectedPage;
              //   var symbolInstance = page.newSymbolInstance();
              //   tester.assertTrue(symbolInstance.isSymbol)
              //   tester.assertFalse(page.isSymbol)
              // },              
              // "testIsSymbolInstance" : function(tester) {
              //   var document = tester.newTestDocument()
              //   var page = document.selectedPage;
              //   var symbolInstance = page.newSymbolInstance();
              //   tester.assertTrue(symbolInstance.isSymbolInstance)
              //   tester.assertFalse(page.isSymbolInstance)
              // },
            }
        };
    }

}
