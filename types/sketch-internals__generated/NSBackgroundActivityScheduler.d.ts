interface NSBackgroundActivitySchedulerUninitialized<InitializedType = NSBackgroundActivityScheduler> extends NSObjectUninitialized<NSBackgroundActivityScheduler> {
  initWithIdentifier(identifier: NSString | string): InitializedType;
}

interface NSBackgroundActivityScheduler extends NSObject {
  scheduleWithBlock(block: Block): void;
  invalidate(): void;

  identifier(): NSString;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  repeats(): boolean;
  setRepeats(repeats: boolean): void;
  interval(): NSTimeInterval;
  setInterval(interval: NSTimeInterval): void;
  tolerance(): NSTimeInterval;
  setTolerance(tolerance: NSTimeInterval): void;
  shouldDefer(): boolean;
}

declare const NSBackgroundActivityScheduler: {
  alloc(): NSBackgroundActivitySchedulerUninitialized;
  class(): NSBackgroundActivityScheduler;
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

