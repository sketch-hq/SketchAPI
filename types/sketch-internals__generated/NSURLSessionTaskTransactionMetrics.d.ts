interface NSURLSessionTaskTransactionMetricsUninitialized<InitializedType = NSURLSessionTaskTransactionMetrics> extends NSObjectUninitialized<NSURLSessionTaskTransactionMetrics> {}

interface NSURLSessionTaskTransactionMetrics extends NSObject {

  request(): NSURLRequest;
  response(): NSURLResponse;
  fetchStartDate(): NSDate;
  domainLookupStartDate(): NSDate;
  domainLookupEndDate(): NSDate;
  connectStartDate(): NSDate;
  secureConnectionStartDate(): NSDate;
  secureConnectionEndDate(): NSDate;
  connectEndDate(): NSDate;
  requestStartDate(): NSDate;
  requestEndDate(): NSDate;
  responseStartDate(): NSDate;
  responseEndDate(): NSDate;
  networkProtocolName(): NSString;
  proxyConnection(): boolean;
  reusedConnection(): boolean;
  resourceFetchType(): NSURLSessionTaskMetricsResourceFetchType;
}

declare const NSURLSessionTaskTransactionMetrics: {
  alloc(): NSURLSessionTaskTransactionMetricsUninitialized;
  class(): NSURLSessionTaskTransactionMetrics;
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

