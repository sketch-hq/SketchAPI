interface MSDataSupplierUninitialized<InitializedType = MSDataSupplier> extends NSObjectUninitialized<MSDataSupplier> {
  initWithDataIdentifier_dataName_dataType(dataIdentifier: NSString | string, dataName: NSString | string, dataType: MSDataType): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface MSDataSupplier extends NSObject, INSCoding {
  isEqualToDataSupplier(object: MSDataSupplier): boolean;
  resetMenuItemImage(): void;
  imageFileURLForDataItem(dataItem: NSString | string): NSURL;
  applyDataWithCount_data_dataApplier(count: NSUInteger, dataArray: NSArray<any> | any[], block: MSDataApplierBlock): void;
  applyDataAtIndex_datum_dataApplier(index: NSUInteger, dataItem: NSString | string, block: MSDataApplierBlock): void;
  generateDataForLayers_dataSupplierManager_dataApplier_completionHandler(layers: NSArray<any> | any[], manager: MSDataSupplierManager, applierBlock: MSDataApplierBlock, completionHandler: BCVoidBlock | null): void;
  generateDataForOverrides_dataSupplierManager_dataApplier_completionHandler(overrides: NSArray<any> | any[], manager: MSDataSupplierManager, applierBlock: MSDataApplierBlock, completionHandler: BCVoidBlock | null): void;
  encodeWithCoder(aCoder: NSCoder): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  dataName(): NSString;
  setDataName(dataName: NSString | string): void;
  displayName(): NSString;
  dataType(): MSDataType;
  uttDataType(): NSString;
  dataIdentifier(): NSString;
  valid(): boolean;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  isUsableDataSupplier(): boolean;
  menuItemImage(): NSImage;
}

declare const MSDataSupplier: {
  alloc(): MSDataSupplierUninitialized;
  class(): MSDataSupplier;
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

