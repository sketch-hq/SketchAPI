interface MSDataSupplierManagerUninitialized<InitializedType = MSDataSupplierManager> extends NSObjectUninitialized<MSDataSupplierManager> {
  initWithDelegate(delegate: any): InitializedType;
}
interface MSDataSupplierManager extends NSObject, IMSDataSupplierDelegate {
  registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier(dynamicDataKey: NSString | string, dataName: NSString | string, dataType: NSString | string, pluginIdentifier: NSString | string, commandIdentifier: NSString | string): void;
  deregisterDataSuppliersForPluginWithIdentifier(pluginIdentifier: NSString | string): void;
  removePluginDataSuppliersNotIdentifiedWithIdentifiers(dataSupplierIdentifiers: NSDictionary<any, any> | {[key: string]: any}): void;
  requestDataFromPluginDataSupplier_dataContext_applierBlock_completionHandler(dataSupplier: MSPluginDataSupplier, dataSupplierContext: MSPluginDataSupplierContext, applierBlock: MSDataApplierBlock, completionHandler: BCVoidBlock | null): void;
  supplyData_forKey(data: NSArray<any> | any[], dataKey: NSString | string): void;
  supplyData_atIndex_forKey(stringData: NSString | string, dataIndex: NSNumber | number, dataKey: NSString | string): void;
  addLocalDataSupplierGroup(localDataSupplierGroup: MSLocalDataSupplierGroup): void;
  removeLocalDataSupplierGroupWithIdentifier(groupIdentifier: NSString | string): void;
  loadDataSuppliers(): void;
  hasLocalDataSupplierWithURL(dataURL: NSURL): boolean;
  canAddLocalDataGroupWithURL(url: NSURL): boolean;
  dataSupplierWithIdentifier(identifier: NSString | string | null): MSDataSupplier;
  usableDataSupplierWithIdentifier(identifier: NSString | string): MSDataSupplier;
  localDataSupplierGroupsInFolder(folder: NSURL): NSArray<any>;

  dataSuppliers(): NSArray<any>;
  dataSupplierGroups(): NSDictionary<any, any>;
  delegate(): any;
}
declare const MSDataSupplierManager: {
  alloc(): MSDataSupplierManagerUninitialized;
  class(): MSDataSupplierManager;  validLocalDataFileSystemURL(possibleDataURL: NSURL): boolean;
  URLForBuiltinDataNamed(name: NSString | string): NSURL;
  builtinDataDefaultURL(): NSURL;
  builtinDataDefaultLanguageFolder(): NSURL;
  localizedBuiltinDataFolder(): NSURL;

}

