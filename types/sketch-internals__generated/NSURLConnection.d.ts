interface NSURLConnectionUninitialized<InitializedType = NSURLConnection> extends NSObjectUninitialized<NSURLConnection> {
  initWithRequest_delegate_startImmediately(request: NSURLRequest, delegate: any | null, startImmediately: boolean): InitializedType;
  initWithRequest_delegate___WATCHOS_PROHIBITED(request: NSURLRequest, delegate: any | null): InitializedType;
}

interface NSURLConnection extends NSObject {
  start(): void;
  cancel(): void;
  scheduleInRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  unscheduleFromRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  setDelegateQueue(queue: NSOperationQueue | null): void;

  originalRequest(): NSURLRequest;
  currentRequest(): NSURLRequest;
}

declare const NSURLConnection: {
  alloc(): NSURLConnectionUninitialized;
  class(): NSURLConnection;
  connectionWithRequest_delegate___WATCHOS_PROHIBITED(request: NSURLRequest, delegate: any | null): NSURLConnection;
  canHandleRequest(request: NSURLRequest): boolean;
  sendSynchronousRequest_returningResponse_error___WATCHOS_PROHIBITED(request: NSURLRequest, response: NSURLResponse, error: MOPointer<NSError>): NSData;
  sendAsynchronousRequest_queue_completionHandler___WATCHOS_PROHIBITED(request: NSURLRequest, queue: NSOperationQueue, handler: Block): void;
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

