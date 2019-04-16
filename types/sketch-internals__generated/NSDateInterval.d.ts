interface NSDateIntervalUninitialized<InitializedType = NSDateInterval> extends NSObjectUninitialized<NSDateInterval> {
  initWithCoder(coder: NSCoder): InitializedType;
  initWithStartDate_duration(startDate: NSDate, duration: NSTimeInterval): InitializedType;
  initWithStartDate_endDate(startDate: NSDate, endDate: NSDate): InitializedType;
}

interface NSDateInterval extends NSObject, INSCopying, INSSecureCoding {
  compare(dateInterval: NSDateInterval): NSComparisonResult;
  isEqualToDateInterval(dateInterval: NSDateInterval): boolean;
  intersectsDateInterval(dateInterval: NSDateInterval): boolean;
  intersectionWithDateInterval(dateInterval: NSDateInterval): NSDateInterval;
  containsDate(date: NSDate): boolean;
  copyWithZone(zone: NSZone | null): any;

  startDate(): NSDate;
  endDate(): NSDate;
  duration(): NSTimeInterval;
}

declare const NSDateInterval: {
  alloc(): NSDateIntervalUninitialized;
  class(): NSDateInterval;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

