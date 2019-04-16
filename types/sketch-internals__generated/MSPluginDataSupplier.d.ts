interface MSPluginDataSupplierUninitialized<InitializedType = MSPluginDataSupplier> extends MSDataSupplierUninitialized<MSPluginDataSupplier> {
  initWithPluginIdentifier_commandIdentifier_dataName_dataTypeStringRepresentation_dynamicDataKey(identifier: NSString | string, commandIdentifier: NSString | string, dataName: NSString | string, dataType: NSString | string, dynamicDataKey: NSString | string): InitializedType;
}
interface MSPluginDataSupplier extends MSDataSupplier {

  pluginIdentifier(): NSString;
  commandIdentifier(): NSString;
  dynamicDataKey(): NSString;
  registered(): boolean;
  setRegistered(registered: boolean): void;
  subgroupName(): NSString;
}
declare const MSPluginDataSupplier: {
  alloc(): MSPluginDataSupplierUninitialized;
  class(): MSPluginDataSupplier;  identifierWithPluginIdentifier_commandIdentifier_dynamicDataKey(pluginIdentifier: NSString | string, commandIdentifier: NSString | string, dynamicDataKey: NSString | string): NSString;

}

