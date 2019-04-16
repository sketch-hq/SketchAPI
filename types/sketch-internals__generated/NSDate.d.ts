interface NSDateUninitialized<InitializedType = NSDate> extends NSObjectUninitialized<NSDate> {
  initWithTimeIntervalSinceReferenceDate(ti: NSTimeInterval): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
  initWithTimeIntervalSinceNow(secs: NSTimeInterval): InitializedType;
  initWithTimeIntervalSince1970(secs: NSTimeInterval): InitializedType;
  initWithTimeInterval_sinceDate(secsToBeAdded: NSTimeInterval, date: NSDate): InitializedType;
}

interface NSDate extends NSObject, INSCopying, INSSecureCoding {
  timeIntervalSinceDate(anotherDate: NSDate): NSTimeInterval;
  addTimeInterval(seconds: NSTimeInterval): any;
  dateByAddingTimeInterval(ti: NSTimeInterval): NSDate;
  earlierDate(anotherDate: NSDate): NSDate;
  laterDate(anotherDate: NSDate): NSDate;
  compare(other: NSDate): NSComparisonResult;
  isEqualToDate(otherDate: NSDate): boolean;
  descriptionWithLocale(locale: any | null): NSString;
  iso8601(): NSString;
  NTPRepresentation_bc(): number;
  copyWithZone(zone: NSZone | null): any;

  timeIntervalSinceNow(): NSTimeInterval;
  timeIntervalSince1970(): NSTimeInterval;
  description(): NSString;
}

declare const NSDate: {
  alloc(): NSDateUninitialized;
  class(): NSDate;
  date(): NSDate;
  dateWithTimeIntervalSinceNow(secs: NSTimeInterval): NSDate;
  dateWithTimeIntervalSinceReferenceDate(ti: NSTimeInterval): NSDate;
  dateWithTimeIntervalSince1970(secs: NSTimeInterval): NSDate;
  dateWithTimeInterval_sinceDate(secsToBeAdded: NSTimeInterval, date: NSDate): NSDate;
  iso8601DateFormatter(): NSDateFormatter;
  dateWithNTPRepresentation_bc(ntp: number): NSDate;
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
  timeIntervalSinceReferenceDate(): NSTimeInterval;
  distantFuture(): NSDate;
  distantPast(): NSDate;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

