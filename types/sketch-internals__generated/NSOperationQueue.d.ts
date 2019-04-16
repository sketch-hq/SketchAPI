interface NSOperationQueueUninitialized<InitializedType = NSOperationQueue> extends NSObjectUninitialized<NSOperationQueue> {}

interface NSOperationQueue extends NSObject {
  addOperation(op: NSOperation): void;
  addOperations_waitUntilFinished(ops: NSArray<any> | any[], wait: boolean): void;
  addOperationWithBlock(block: Block): void;
  cancelAllOperations(): void;
  waitUntilAllOperationsAreFinished(): void;

  operations(): NSArray<any>;
  operationCount(): NSUInteger;
  maxConcurrentOperationCount(): NSInteger;
  setMaxConcurrentOperationCount(maxConcurrentOperationCount: NSInteger): void;
  suspended(): boolean;
  setSuspended(suspended: boolean): void;
  name(): NSString;
  setName(name: NSString | string): void;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  underlyingQueue(): dispatch_queue_t;
  setUnderlyingQueue(underlyingQueue: dispatch_queue_t): void;
}

declare const NSOperationQueue: {
  alloc(): NSOperationQueueUninitialized;
  class(): NSOperationQueue;
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
  currentQueue(): NSOperationQueue;
  mainQueue(): NSOperationQueue;
  accessInstanceVariablesDirectly(): boolean;

}

