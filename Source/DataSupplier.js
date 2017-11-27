// ********************************
// # DataSupplier.js
// # Sketch Javascript API.
//
// All code (C) 2017 Bohemian Coding.
// ********************************

/**
 * Sketch data supplier manager.
 * @param context The context dictionary passed to the script when it was invoked.
 */
export function DataSupplier(context) {
  const dataManager = AppController.sharedInstance.dataSupplierManager()

  return {
    /**
     * Register some data with a name and the plugin it has come from.
     * @param {string} dataType The data type. Currently "public.text" or "public.image" are the only allowed values.
     * @param {string} dataName The data name, will be used as the menu item title for the data.
     * @param {array} data The data provided by the plugin immediately.
     */
    registerStaticSupplier(dataType, dataName, data) {
      const identifier = context.plugin.identifier()
      const commandIdentifier = context.command.identifier()
      dataManager.registerStaticData_withName_dataType_pluginIdentifier_commandIdentifier_(
        data,
        dataName,
        dataType,
        identifier,
        commandIdentifier
      )
    },

    /**
     * Register a function to supply data on request.
     *
     * @param {string} dataType The data type. Currently "public.text" or "public.image" are the only allowed values.
     * @param {string} dataName The data name, will be used as the menu item title for the data.
     * @param {string} dynamicDataKey The key to use to select the dynamic data to supply in onSupplyData.
     */
    registerDynamicSupplier(dataType, dataName, dynamicDataKey) {
      const identifier = context.plugin.identifier()
      const commandIdentifier = context.command.identifier()
      dataManager.registerDynamicSupplier_withName_dataType_pluginIdentifier_commandIdentifier_(
        dynamicDataKey,
        dataName,
        dataType,
        identifier,
        commandIdentifier
      )
    },

    /**
     * Deregister any static data or dynamic data providers for a particular plugin. Typically called from the Shutdown method of the plugin.
     */
    deregisterDataSuppliers() {
      const identifier = context.plugin.identifier()
      dataManager.deregisterDataSuppliersForPluginWithIdentifier_(identifier)
    },

    /**
     * When the plugin providing the dynamic data has finished generating the data, it will call this function with the data key and the data.
     */
    supplyDataForKey(data, key) {
      dataManager.supplyData_forKey_(data, key)
    },
  }
}
