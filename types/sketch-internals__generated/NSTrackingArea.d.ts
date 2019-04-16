interface NSTrackingAreaUninitialized<InitializedType = NSTrackingArea> extends NSObjectUninitialized<NSTrackingArea> {
  initWithRect_options_owner_userInfo(rect: NSRect, options: NSTrackingAreaOptions, owner: any | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSTrackingArea extends NSObject, INSCopying, INSCoding {
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  rect(): NSRect;
  options(): NSTrackingAreaOptions;
  owner(): any;
  userInfo(): NSDictionary<any, any>;
}

declare const NSTrackingArea: {
  alloc(): NSTrackingAreaUninitialized;
  class(): NSTrackingArea;
  mouseEnterExitTrackingArea(owner: any): NSTrackingArea;
  trackingAreaWithOptions_owner(options: NSTrackingAreaOptions, owner: any): NSTrackingArea;
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

