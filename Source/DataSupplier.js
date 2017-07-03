// ********************************
// # DataSupplier.js
// # Sketch Javascript API.
//
// All code (C) 2017 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject.js'

/**
  Sketch data supplier manager.
 */

export class DataSupplier extends WrappedObject {

    /**
      Make a data supplier manager object.

      @param {MSDataSupplierManager} dataSupplier The underlying data supplier manager object from Sketch.
    */

    constructor(dataSupplier) {
      if (!dataSupplier) {
        dataSupplier = AppController.sharedIntance.dataSupplierManager()
      }

      super(dataSupplier)
    }
  
    /**
     Register some data with a name and the plugin it has come from.
     
     @param {string} dataName The data name, will be used as the menu item title for the data.
     @param {array} data The data provided by the plugin immediately.
    */
    registerStaticSupplier(dataName, data, pluginIdentifier) {
      this._object.registerStaticData_withName_pluginIdentifier_(data, dataName, pluginIdentifier);
    }

    /**
     Register a function to supply data on request.
     
     @param {string} dataName The data name, will be used as the menu item title for the data.
     @param {string} supplierJSMethodName The name of the javascript method that will provide the data on demand.
    */
    registerDynamicSupplier(dataName, supplierJSMethodName, pluginIdentifier) {
      this._object.registerDynamicSupplier_withName_pluginIdentifier_(supplierJSMethodName, dataName, pluginIdentifier);
    }
  
    /**
     Deregister any static data or dynamic data providers for a particular plugin. Typically called from the Shutdown method of the plugin.
     */
    deregisterDataSuppliers(pluginIdentifier) {
      this._object.deregisterDataSuppliersForPluginWithIdentifier_(pluginIdentifier);
    }

    /**
     When the plugin providing the dynamic data has finished generating the data, it will call this function with the data key and the data.
     */
    supplyDataForKey(data, key) {
      this._object.supplyData_forKey_(data, key);
    }

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
}
