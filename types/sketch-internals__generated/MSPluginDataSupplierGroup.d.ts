interface MSPluginDataSupplierGroupUninitialized<InitializedType = MSPluginDataSupplierGroup> extends MSDataSupplierGroupUninitialized<MSPluginDataSupplierGroup> {
  initWithPluginDataSuppliers_delegate(pluginDataSuppliers: NSSet<any>, delegate: any): InitializedType;
}
interface MSPluginDataSupplierGroup extends MSDataSupplierGroup {

  pluginDataSuppliers(): NSArray<any>;
  pluginIdentifier(): NSString;
}
declare const MSPluginDataSupplierGroup: {
  alloc(): MSPluginDataSupplierGroupUninitialized;
  class(): MSPluginDataSupplierGroup;
}

