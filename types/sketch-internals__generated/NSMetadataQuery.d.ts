interface NSMetadataQueryUninitialized<InitializedType = NSMetadataQuery> extends NSObjectUninitialized<NSMetadataQuery> {}

interface NSMetadataQuery extends NSObject {
  startQuery(): boolean;
  stopQuery(): void;
  disableUpdates(): void;
  enableUpdates(): void;
  resultAtIndex(idx: NSUInteger): any;
  enumerateResultsUsingBlock(block: Block): void;
  enumerateResultsWithOptions_usingBlock(opts: NSEnumerationOptions, block: Block): void;
  indexOfResult(result: any): NSUInteger;
  valueOfAttribute_forResultAtIndex(attrName: NSString | string, idx: NSUInteger): any;

  delegate(): any;
  setDelegate(delegate: any): void;
  predicate(): NSPredicate;
  setPredicate(predicate: NSPredicate): void;
  sortDescriptors(): NSArray<any>;
  setSortDescriptors(sortDescriptors: NSArray<any> | any[]): void;
  valueListAttributes(): NSArray<any>;
  setValueListAttributes(valueListAttributes: NSArray<any> | any[]): void;
  groupingAttributes(): NSArray<any>;
  setGroupingAttributes(groupingAttributes: NSArray<any> | any[]): void;
  notificationBatchingInterval(): NSTimeInterval;
  setNotificationBatchingInterval(notificationBatchingInterval: NSTimeInterval): void;
  searchScopes(): NSArray<any>;
  setSearchScopes(searchScopes: NSArray<any> | any[]): void;
  searchItems(): NSArray<any>;
  setSearchItems(searchItems: NSArray<any> | any[]): void;
  operationQueue(): NSOperationQueue;
  setOperationQueue(operationQueue: NSOperationQueue): void;
  started(): boolean;
  gathering(): boolean;
  stopped(): boolean;
  resultCount(): NSUInteger;
  results(): NSArray<any>;
  valueLists(): NSDictionary<any, any>;
  groupedResults(): NSArray<any>;
}

declare const NSMetadataQuery: {
  alloc(): NSMetadataQueryUninitialized;
  class(): NSMetadataQuery;
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

