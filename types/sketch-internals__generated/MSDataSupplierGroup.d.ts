interface MSDataSupplierGroupUninitialized<InitializedType = MSDataSupplierGroup> extends NSObjectUninitialized<MSDataSupplierGroup> {
  initWithDataSuppliers_delegate(dataSuppliers: NSSet<any>, delegate: any): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface MSDataSupplierGroup extends NSObject, INSCoding {
  addDataSuppliers(dataSuppliers: NSSet<any>): void;
  postDecodingInitializingWithDelegate(delegate: any): boolean;
  makeGroupIdentifier(): NSString;
  removeDataSupplier(dataSupplier: MSDataSupplier): void;
  usableDataSuppliersOfDataType(dataType: MSDataType): NSArray<any>;
  dataSupplierMenuItemForDataType(dataType: MSDataType): NSMenuItem;
  notifyDelegateOfChanges(): void;
  encodeWithCoder(aCoder: NSCoder): void;

  dataSuppliers(): NSArray<any>;
  dataSuppliersDictionary(): NSDictionary<any, any>;
  groupName(): NSString;
  anyDataSupplier(): MSDataSupplier;
  groupIdentifier(): NSString;
  oneDataSupplierInGroup(): boolean;
  dataType(): MSDataType;
  delegate(): any;
  setDelegate(delegate: any): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  valid(): boolean;
}

declare const MSDataSupplierGroup: {
  alloc(): MSDataSupplierGroupUninitialized;
  class(): MSDataSupplierGroup;
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

