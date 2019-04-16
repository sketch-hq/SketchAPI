interface NSNotificationQueueUninitialized<InitializedType = NSNotificationQueue> extends NSObjectUninitialized<NSNotificationQueue> {
  initWithNotificationCenter(notificationCenter: NSNotificationCenter): InitializedType;
}

interface NSNotificationQueue extends NSObject {
  enqueueNotification_postingStyle(notification: NSNotification, postingStyle: NSPostingStyle): void;
  enqueueNotification_postingStyle_coalesceMask_forModes(notification: NSNotification, postingStyle: NSPostingStyle, coalesceMask: NSNotificationCoalescing, modes: NSArray<any> | any[] | null): void;
  dequeueNotificationsMatching_coalesceMask(notification: NSNotification, coalesceMask: NSUInteger): void;
}

declare const NSNotificationQueue: {
  alloc(): NSNotificationQueueUninitialized;
  class(): NSNotificationQueue;
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
  defaultQueue(): NSNotificationQueue;
  accessInstanceVariablesDirectly(): boolean;

}

