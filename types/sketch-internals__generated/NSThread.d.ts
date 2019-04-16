interface NSThreadUninitialized<InitializedType = NSThread> extends NSObjectUninitialized<NSThread> {
  initWithTarget_selector_object(target: any, selector: string, argument: any | null): InitializedType;
  initWithBlock(block: Block): InitializedType;
}

interface NSThread extends NSObject {
  cancel(): void;
  start(): void;
  main(): void;

  threadDictionary(): NSMutableDictionary<any, any>;
  threadPriority(): number;
  setThreadPriority(threadPriority: number): void;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  name(): NSString;
  setName(name: NSString | string): void;
  stackSize(): NSUInteger;
  setStackSize(stackSize: NSUInteger): void;
  executing(): boolean;
  finished(): boolean;
  cancelled(): boolean;
}

declare const NSThread: {
  alloc(): NSThreadUninitialized;
  class(): NSThread;
  detachNewThreadWithBlock(block: Block): void;
  detachNewThreadSelector_toTarget_withObject(selector: string, target: any, argument: any | null): void;
  isMultiThreaded(): boolean;
  sleepUntilDate(date: NSDate): void;
  sleepForTimeInterval(ti: NSTimeInterval): void;
  exit(): void;
  threadPriority(): number;
  setThreadPriority(p: number): boolean;
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
  currentThread(): NSThread;
  callStackReturnAddresses(): NSArray<any>;
  callStackSymbols(): NSArray<any>;
  isMainThread(): boolean;
  mainThread(): NSThread;
  accessInstanceVariablesDirectly(): boolean;

}

