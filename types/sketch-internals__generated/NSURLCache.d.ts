interface NSURLCacheUninitialized<InitializedType = NSURLCache> extends NSObjectUninitialized<NSURLCache> {
  initWithMemoryCapacity_diskCapacity_diskPath(memoryCapacity: NSUInteger, diskCapacity: NSUInteger, path: NSString | string | null): InitializedType;
}

interface NSURLCache extends NSObject {
  cachedResponseForRequest(request: NSURLRequest): NSCachedURLResponse;
  storeCachedResponse_forRequest(cachedResponse: NSCachedURLResponse, request: NSURLRequest): void;
  removeCachedResponseForRequest(request: NSURLRequest): void;
  removeAllCachedResponses(): void;
  removeCachedResponsesSinceDate(date: NSDate): void;
  storeCachedResponse_forDataTask(cachedResponse: NSCachedURLResponse, dataTask: NSURLSessionDataTask): void;
  getCachedResponseForDataTask_completionHandler(dataTask: NSURLSessionDataTask, completionHandler: Block): void;
  removeCachedResponseForDataTask(dataTask: NSURLSessionDataTask): void;

  memoryCapacity(): NSUInteger;
  setMemoryCapacity(memoryCapacity: NSUInteger): void;
  diskCapacity(): NSUInteger;
  setDiskCapacity(diskCapacity: NSUInteger): void;
  currentMemoryUsage(): NSUInteger;
  currentDiskUsage(): NSUInteger;
}

declare const NSURLCache: {
  alloc(): NSURLCacheUninitialized;
  class(): NSURLCache;
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
  sharedURLCache(): NSURLCache;
  setSharedURLCache(sharedURLCache: NSURLCache): void;
  accessInstanceVariablesDirectly(): boolean;

}

