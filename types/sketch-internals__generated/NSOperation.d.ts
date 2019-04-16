interface NSOperationUninitialized<InitializedType = NSOperation> extends NSObjectUninitialized<NSOperation> {}

interface NSOperation extends NSObject {
  start(): void;
  main(): void;
  cancel(): void;
  addDependency(op: NSOperation): void;
  removeDependency(op: NSOperation): void;
  waitUntilFinished(): void;

  cancelled(): boolean;
  executing(): boolean;
  finished(): boolean;
  concurrent(): boolean;
  asynchronous(): boolean;
  ready(): boolean;
  dependencies(): NSArray<any>;
  queuePriority(): NSOperationQueuePriority;
  setQueuePriority(queuePriority: NSOperationQueuePriority): void;
  threadPriority(): number;
  setThreadPriority(threadPriority: number): void;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  name(): NSString;
  setName(name: NSString | string): void;
}

declare const NSOperation: {
  alloc(): NSOperationUninitialized;
  class(): NSOperation;
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

