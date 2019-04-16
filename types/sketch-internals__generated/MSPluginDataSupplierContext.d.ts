interface MSPluginDataSupplierContextUninitialized<InitializedType = MSPluginDataSupplierContext> extends NSObjectUninitialized<MSPluginDataSupplierContext> {
  initWithLayers(layers: NSArray<any> | any[]): InitializedType;
  initWithOverrides(overrides: NSArray<any> | any[]): InitializedType;
}
interface MSPluginDataSupplierContext extends NSObject {

  isSymbolInstanceOverride(): boolean;
  items(): NSArray<any>;
  dictionaryRepresentation(): NSDictionary<any, any>;
  requestedCount(): NSUInteger;
  key(): NSString;
}
declare const MSPluginDataSupplierContext: {
  alloc(): MSPluginDataSupplierContextUninitialized;
  class(): MSPluginDataSupplierContext;
}

