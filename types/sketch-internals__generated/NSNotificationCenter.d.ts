interface NSNotificationCenterUninitialized<InitializedType = NSNotificationCenter> extends NSObjectUninitialized<NSNotificationCenter> {}

interface NSNotificationCenter extends NSObject {
  addObserver_selector_name_object(observer: any, aSelector: string, aName: NSNotificationName | null, anObject: any | null): void;
  postNotification(notification: NSNotification): void;
  postNotificationName_object(aName: NSNotificationName, anObject: any | null): void;
  postNotificationName_object_userInfo(aName: NSNotificationName, anObject: any | null, aUserInfo: NSDictionary<any, any> | {[key: string]: any} | null): void;
  removeObserver(observer: any): void;
  removeObserver_name_object(observer: any, aName: NSNotificationName | null, anObject: any | null): void;
  addObserverForName_object_queue_usingBlock(name: NSNotificationName | null, obj: any | null, queue: NSOperationQueue | null, block: Block): any;
}

declare const NSNotificationCenter: {
  alloc(): NSNotificationCenterUninitialized;
  class(): NSNotificationCenter;
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
  defaultCenter(): NSNotificationCenter;
  accessInstanceVariablesDirectly(): boolean;

}

