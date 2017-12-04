// ********************************
// # DataSupplier.js
// # Sketch Javascript API.
//
// All code (C) 2017 Bohemian Coding.
// ********************************

import { WrappedObject } from './WrappedObject'

/**
 * Sketch data supplier manager.
 */
export class DataSupplier extends WrappedObject {
  /**
   * Make a data supplier manager object.
   *
   * @param {MSDataSupplierManager} dataSupplier The underlying data supplier manager object from Sketch.
   */
  constructor(dataSupplier, application) {
    super(dataSupplier || AppController.sharedInstance.dataSupplierManager())

    this._application = application
  }

  /**
   * Register a function to supply data on request.
   *
   * @param {string} dataType The data type. Currently "public.text" or "public.image" are the only allowed values.
   * @param {string} dataName The data name, will be used as the menu item title for the data.
   * @param {string} dynamicDataKey The key to use to select the dynamic data to supply in onSupplyData.
   */
  registerPluginDataSupplier(dataType, dataName, dynamicDataKey) {
    const identifier = this._application.context.plugin.identifier()
    const commandIdentifier = this._application.context.command.identifier()
    this._object.registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier_(
      dynamicDataKey,
      dataName,
      dataType,
      identifier,
      commandIdentifier
    )
  }

  /**
   * Deregister any static data or dynamic data providers for a particular plugin. Typically called from the Shutdown method of the plugin.
   */
  deregisterDataSuppliers() {
    const identifier = this._application.context.plugin.identifier()
    this._object.deregisterDataSuppliersForPluginWithIdentifier_(identifier)
  }

  /**
   * When the plugin providing the dynamic data has finished generating the data, it will call this function with the data key and the data.
   */
  supplyDataForKey(data, key) {
    this._object.supplyData_forKey_(data, key)
  }
}
