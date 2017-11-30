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

    constructor(dataSupplier, application) {
      if (!dataSupplier) {
        dataSupplier = AppController.sharedIntance.dataSupplierManager()
      }
      super(dataSupplier)
      
      this._application = application
    }

    /**
     Register a function to supply data on request.
     
     @param {string} dataType The data type. Currently "public.text" or "public.image" are the only allowed values.
     @param {string} dataName The data name, will be used as the menu item title for the data.
     @param {string} dynamicDataKey The key to use to select the dynamic data to supply in onSupplyData.
    */
    registerPluginDataSupplier(dataType, dataName, dynamicDataKey) {
      var identifier = this._application.context.plugin.identifier()
      var commandIdentifier = this._application.context.command.identifier()
      this._object.registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier_(dynamicDataKey, dataName, dataType, identifier, commandIdentifier)
    }
  
    /**
     Deregister all data suppliers for a particular plugin. Typically called from the Shutdown method of the plugin.
     */
    deregisterDataSuppliers() {
      var identifier = this._application.context.plugin.identifier()
      this._object.deregisterDataSuppliersForPluginWithIdentifier_(identifier)
    }

    /**
     When the plugin providing the dynamic data has finished generating the data, it will call this function with the data key and the data.
     */
    supplyDataForKey(data, key) {
      this._object.supplyData_forKey_(data, key)
    }

    /**
     Return a list of tests to run for this class.

     @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
     */
}
