interface IMSDataSupplierManagerDelegate {
  requestDataFromPluginDataSupplier_pluginContext(pluginDataSupplier: MSPluginDataSupplier, pluginContext: NSDictionary<any, any> | {[key: string]: any}): void;
  isThereAPluginForDataSupplier(pluginDataSupplier: MSPluginDataSupplier): boolean;
  pluginIconForIdentifier(pluginIdentifier: NSString | string): NSImage;
  pluginNameForIdentifier(pluginIdentifier: NSString | string): NSString;
}

