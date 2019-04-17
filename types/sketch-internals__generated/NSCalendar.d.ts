interface NSCalendarUninitialized<InitializedType = NSCalendar> extends NSObjectUninitialized<NSCalendar> {
  initWithCalendarIdentifier(ident: NSCalendarIdentifier): InitializedType;
}

interface NSCalendar extends NSObject, INSCopying, INSSecureCoding {
  minimumRangeOfUnit(unit: NSCalendarUnit): NSRange;
  maximumRangeOfUnit(unit: NSCalendarUnit): NSRange;
  rangeOfUnit_inUnit_forDate(smaller: NSCalendarUnit, larger: NSCalendarUnit, date: NSDate): NSRange;
  ordinalityOfUnit_inUnit_forDate(smaller: NSCalendarUnit, larger: NSCalendarUnit, date: NSDate): NSUInteger;
  rangeOfUnit_startDate_interval_forDate(unit: NSCalendarUnit, datep: MOPointer<NSDate>, tip: NSTimeInterval | null, date: NSDate): boolean;
  dateFromComponents(comps: NSDateComponents): NSDate;
  components_fromDate(unitFlags: NSCalendarUnit, date: NSDate): NSDateComponents;
  dateByAddingComponents_toDate_options(comps: NSDateComponents, date: NSDate, opts: NSCalendarOptions): NSDate;
  components_fromDate_toDate_options(unitFlags: NSCalendarUnit, startingDate: NSDate, resultDate: NSDate, opts: NSCalendarOptions): NSDateComponents;
  getEra_year_month_day_fromDate(eraValuePointer: NSInteger, yearValuePointer: NSInteger, monthValuePointer: NSInteger, dayValuePointer: NSInteger, date: NSDate): void;
  getEra_yearForWeekOfYear_weekOfYear_weekday_fromDate(eraValuePointer: NSInteger, yearValuePointer: NSInteger, weekValuePointer: NSInteger, weekdayValuePointer: NSInteger, date: NSDate): void;
  getHour_minute_second_nanosecond_fromDate(hourValuePointer: NSInteger, minuteValuePointer: NSInteger, secondValuePointer: NSInteger, nanosecondValuePointer: NSInteger, date: NSDate): void;
  component_fromDate(unit: NSCalendarUnit, date: NSDate): NSInteger;
  dateWithEra_year_month_day_hour_minute_second_nanosecond(eraValue: NSInteger, yearValue: NSInteger, monthValue: NSInteger, dayValue: NSInteger, hourValue: NSInteger, minuteValue: NSInteger, secondValue: NSInteger, nanosecondValue: NSInteger): NSDate;
  dateWithEra_yearForWeekOfYear_weekOfYear_weekday_hour_minute_second_nanosecond(eraValue: NSInteger, yearValue: NSInteger, weekValue: NSInteger, weekdayValue: NSInteger, hourValue: NSInteger, minuteValue: NSInteger, secondValue: NSInteger, nanosecondValue: NSInteger): NSDate;
  startOfDayForDate(date: NSDate): NSDate;
  componentsInTimeZone_fromDate(timezone: NSTimeZone, date: NSDate): NSDateComponents;
  compareDate_toDate_toUnitGranularity(date1: NSDate, date2: NSDate, unit: NSCalendarUnit): NSComparisonResult;
  isDate_equalToDate_toUnitGranularity(date1: NSDate, date2: NSDate, unit: NSCalendarUnit): boolean;
  isDate_inSameDayAsDate(date1: NSDate, date2: NSDate): boolean;
  isDateInToday(date: NSDate): boolean;
  isDateInYesterday(date: NSDate): boolean;
  isDateInTomorrow(date: NSDate): boolean;
  isDateInWeekend(date: NSDate): boolean;
  rangeOfWeekendStartDate_interval_containingDate(datep: MOPointer<NSDate>, tip: NSTimeInterval, date: NSDate): boolean;
  nextWeekendStartDate_interval_options_afterDate(datep: MOPointer<NSDate>, tip: NSTimeInterval, options: NSCalendarOptions, date: NSDate): boolean;
  components_fromDateComponents_toDateComponents_options(unitFlags: NSCalendarUnit, startingDateComp: NSDateComponents, resultDateComp: NSDateComponents, options: NSCalendarOptions): NSDateComponents;
  dateByAddingUnit_value_toDate_options(unit: NSCalendarUnit, value: NSInteger, date: NSDate, options: NSCalendarOptions): NSDate;
  enumerateDatesStartingAfterDate_matchingComponents_options_usingBlock(start: NSDate, comps: NSDateComponents, opts: NSCalendarOptions, block: Block): void;
  nextDateAfterDate_matchingComponents_options(date: NSDate, comps: NSDateComponents, options: NSCalendarOptions): NSDate;
  nextDateAfterDate_matchingUnit_value_options(date: NSDate, unit: NSCalendarUnit, value: NSInteger, options: NSCalendarOptions): NSDate;
  nextDateAfterDate_matchingHour_minute_second_options(date: NSDate, hourValue: NSInteger, minuteValue: NSInteger, secondValue: NSInteger, options: NSCalendarOptions): NSDate;
  dateBySettingUnit_value_ofDate_options(unit: NSCalendarUnit, v: NSInteger, date: NSDate, opts: NSCalendarOptions): NSDate;
  dateBySettingHour_minute_second_ofDate_options(h: NSInteger, m: NSInteger, s: NSInteger, date: NSDate, opts: NSCalendarOptions): NSDate;
  date_matchesComponents(date: NSDate, components: NSDateComponents): boolean;
  copyWithZone(zone: NSZone | null): any;

  calendarIdentifier(): NSCalendarIdentifier;
  locale(): NSLocale;
  setLocale(locale: NSLocale): void;
  timeZone(): NSTimeZone;
  setTimeZone(timeZone: NSTimeZone): void;
  firstWeekday(): NSUInteger;
  setFirstWeekday(firstWeekday: NSUInteger): void;
  minimumDaysInFirstWeek(): NSUInteger;
  setMinimumDaysInFirstWeek(minimumDaysInFirstWeek: NSUInteger): void;
  eraSymbols(): NSArray<any>;
  longEraSymbols(): NSArray<any>;
  monthSymbols(): NSArray<any>;
  shortMonthSymbols(): NSArray<any>;
  veryShortMonthSymbols(): NSArray<any>;
  standaloneMonthSymbols(): NSArray<any>;
  shortStandaloneMonthSymbols(): NSArray<any>;
  veryShortStandaloneMonthSymbols(): NSArray<any>;
  weekdaySymbols(): NSArray<any>;
  shortWeekdaySymbols(): NSArray<any>;
  veryShortWeekdaySymbols(): NSArray<any>;
  standaloneWeekdaySymbols(): NSArray<any>;
  shortStandaloneWeekdaySymbols(): NSArray<any>;
  veryShortStandaloneWeekdaySymbols(): NSArray<any>;
  quarterSymbols(): NSArray<any>;
  shortQuarterSymbols(): NSArray<any>;
  standaloneQuarterSymbols(): NSArray<any>;
  shortStandaloneQuarterSymbols(): NSArray<any>;
  AMSymbol(): NSString;
  PMSymbol(): NSString;
}

declare const NSCalendar: {
  alloc(): NSCalendarUninitialized;
  class(): NSCalendar;
  calendarWithIdentifier(calendarIdentifierConstant: NSCalendarIdentifier): NSCalendar;
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
  currentCalendar(): NSCalendar;
  autoupdatingCurrentCalendar(): NSCalendar;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

