interface NSURLProtocolUninitialized<InitializedType = NSURLProtocol> extends NSObjectUninitialized<NSURLProtocol> {
  initWithRequest_cachedResponse_client(request: NSURLRequest, cachedResponse: NSCachedURLResponse | null, client: any | null): InitializedType;
  initWithTask_cachedResponse_client(task: NSURLSessionTask, cachedResponse: NSCachedURLResponse | null, client: any | null): InitializedType;
}

interface NSURLProtocol extends NSObject {
  startLoading(): void;
  stopLoading(): void;

  client(): any;
  request(): NSURLRequest;
  cachedResponse(): NSCachedURLResponse;
  task(): NSURLSessionTask;
}

declare const NSURLProtocol: {
  alloc(): NSURLProtocolUninitialized;
  class(): NSURLProtocol;
  canInitWithRequest(request: NSURLRequest): boolean;
  canonicalRequestForRequest(request: NSURLRequest): NSURLRequest;
  requestIsCacheEquivalent_toRequest(a: NSURLRequest, b: NSURLRequest): boolean;
  propertyForKey_inRequest(key: NSString | string, request: NSURLRequest): any;
  setProperty_forKey_inRequest(value: any, key: NSString | string, request: NSMutableURLRequest): void;
  removePropertyForKey_inRequest(key: NSString | string, request: NSMutableURLRequest): void;
  registerClass(protocolClass: any): boolean;
  unregisterClass(protocolClass: any): void;
  canInitWithTask(task: NSURLSessionTask): boolean;
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

