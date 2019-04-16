interface NSDateComponentsUninitialized<InitializedType = NSDateComponents> extends NSObjectUninitialized<NSDateComponents> {}

interface NSDateComponents extends NSObject, INSCopying, INSSecureCoding {
  setValue_forComponent(value: NSInteger, unit: NSCalendarUnit): void;
  valueForComponent(unit: NSCalendarUnit): NSInteger;
  isValidDateInCalendar(calendar: NSCalendar): boolean;
  copyWithZone(zone: NSZone | null): any;

  calendar(): NSCalendar;
  setCalendar(calendar: NSCalendar): void;
  timeZone(): NSTimeZone;
  setTimeZone(timeZone: NSTimeZone): void;
  era(): NSInteger;
  setEra(era: NSInteger): void;
  year(): NSInteger;
  setYear(year: NSInteger): void;
  month(): NSInteger;
  setMonth(month: NSInteger): void;
  day(): NSInteger;
  setDay(day: NSInteger): void;
  hour(): NSInteger;
  setHour(hour: NSInteger): void;
  minute(): NSInteger;
  setMinute(minute: NSInteger): void;
  second(): NSInteger;
  setSecond(second: NSInteger): void;
  nanosecond(): NSInteger;
  setNanosecond(nanosecond: NSInteger): void;
  weekday(): NSInteger;
  setWeekday(weekday: NSInteger): void;
  weekdayOrdinal(): NSInteger;
  setWeekdayOrdinal(weekdayOrdinal: NSInteger): void;
  quarter(): NSInteger;
  setQuarter(quarter: NSInteger): void;
  weekOfMonth(): NSInteger;
  setWeekOfMonth(weekOfMonth: NSInteger): void;
  weekOfYear(): NSInteger;
  setWeekOfYear(weekOfYear: NSInteger): void;
  yearForWeekOfYear(): NSInteger;
  setYearForWeekOfYear(yearForWeekOfYear: NSInteger): void;
  leapMonth(): boolean;
  setLeapMonth(leapMonth: boolean): void;
  date(): NSDate;
  validDate(): boolean;
}

declare const NSDateComponents: {
  alloc(): NSDateComponentsUninitialized;
  class(): NSDateComponents;
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

