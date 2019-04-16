interface NSTimeZoneUninitialized<InitializedType = NSTimeZone> extends NSObjectUninitialized<NSTimeZone> {
  initWithName(tzName: NSString | string): InitializedType;
  initWithName_data(tzName: NSString | string, aData: NSData | null): InitializedType;
}

interface NSTimeZone extends NSObject, INSCopying, INSSecureCoding {
  secondsFromGMTForDate(aDate: NSDate): NSInteger;
  abbreviationForDate(aDate: NSDate): NSString;
  isDaylightSavingTimeForDate(aDate: NSDate): boolean;
  daylightSavingTimeOffsetForDate(aDate: NSDate): NSTimeInterval;
  nextDaylightSavingTimeTransitionAfterDate(aDate: NSDate): NSDate;
  isEqualToTimeZone(aTimeZone: NSTimeZone): boolean;
  localizedName_locale(style: NSTimeZoneNameStyle, locale: NSLocale | null): NSString;
  copyWithZone(zone: NSZone | null): any;

  name(): NSString;
  data(): NSData;
  secondsFromGMT(): NSInteger;
  abbreviation(): NSString;
  daylightSavingTime(): boolean;
  daylightSavingTimeOffset(): NSTimeInterval;
  nextDaylightSavingTimeTransition(): NSDate;
  description(): NSString;
}

declare const NSTimeZone: {
  alloc(): NSTimeZoneUninitialized;
  class(): NSTimeZone;
  resetSystemTimeZone(): void;
  abbreviationDictionary(): NSDictionary<any, any>;
  timeZoneWithName(tzName: NSString | string): NSTimeZone;
  timeZoneWithName_data(tzName: NSString | string, aData: NSData | null): NSTimeZone;
  timeZoneForSecondsFromGMT(seconds: NSInteger): NSTimeZone;
  timeZoneWithAbbreviation(abbreviation: NSString | string): NSTimeZone;
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
  systemTimeZone(): NSTimeZone;
  defaultTimeZone(): NSTimeZone;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultTimeZone(defaultTimeZone: NSTimeZone): void;
  localTimeZone(): NSTimeZone;
  knownTimeZoneNames(): NSArray<any>;
  abbreviationDictionary(): NSDictionary<any, any>;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setAbbreviationDictionary(abbreviationDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  timeZoneDataVersion(): NSString;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

