interface MSRenderMonitorUninitialized<InitializedType = MSRenderMonitor> extends NSObjectUninitialized<MSRenderMonitor> {}

interface MSRenderMonitor extends NSObject {
  recordEvent(event: MSRenderMonitorEvent): void;
  recordEvent_timestamp(event: MSRenderMonitorEvent, timestamp: BCTime): void;
  timestampForEvent(event: MSRenderMonitorEvent): BCTime;
  timeIntervalBetweenStartEvent_endEvent(startEvent: MSRenderMonitorEvent, endEvent: MSRenderMonitorEvent): NSTimeInterval;
  registerHook_forEvent(hook: MSRenderMonitorHook, event: MSRenderMonitorEvent): void;

  shouldRemoveWhenDone(): boolean;
  setShouldRemoveWhenDone(shouldRemoveWhenDone: boolean): void;
  shouldClearAllCaches(): boolean;
  setShouldClearAllCaches(shouldClearAllCaches: boolean): void;
  shouldForceFullRedraw(): boolean;
  setShouldForceFullRedraw(shouldForceFullRedraw: boolean): void;
}

declare const MSRenderMonitor: {
  alloc(): MSRenderMonitorUninitialized;
  class(): MSRenderMonitor;
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

