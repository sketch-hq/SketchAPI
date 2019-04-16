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
  dataSupplierMenuItemImage(dataSupplier: MSDataSupplier): NSImage;
  dataSupplierDataDidChange(dataSupplier: MSDataSupplier): void;
  dataSupplierGroupDidChange(dataSupplierGroup: MSDataSupplierGroup): void;
  replaceLocalDataSupplierGroup_withLocalGroup(group: MSLocalDataSupplierGroup, newGroup: MSLocalDataSupplierGroup): void;
  groupNameForPluginGroupIdentifier(pluginGroupIdentifier: NSString | string): NSString;

  dataSuppliers(): NSArray<any>;
  dataSupplierGroups(): NSDictionary<any, any>;
  delegate(): any;
}

declare const MSDataSupplierManager: {
  alloc(): MSDataSupplierManagerUninitialized;
  class(): MSDataSupplierManager;
  validLocalDataFileSystemURL(possibleDataURL: NSURL): boolean;
  URLForBuiltinDataNamed(name: NSString | string): NSURL;
  builtinDataDefaultURL(): NSURL;
  builtinDataDefaultLanguageFolder(): NSURL;
  localizedBuiltinDataFolder(): NSURL;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

