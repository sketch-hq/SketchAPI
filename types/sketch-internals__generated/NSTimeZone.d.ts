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
  class(): NSTimeZone;  resetSystemTimeZone(): void;
  abbreviationDictionary(): NSDictionary<any, any>;
  timeZoneWithName(tzName: NSString | string): NSTimeZone;
  timeZoneWithName_data(tzName: NSString | string, aData: NSData | null): NSTimeZone;
  timeZoneForSecondsFromGMT(seconds: NSInteger): NSTimeZone;
  timeZoneWithAbbreviation(abbreviation: NSString | string): NSTimeZone;

  systemTimeZone(): NSTimeZone;
  defaultTimeZone(): NSTimeZone;
  setDefaultTimeZone(defaultTimeZone: NSTimeZone): void;
  localTimeZone(): NSTimeZone;
  knownTimeZoneNames(): NSArray<any>;
  abbreviationDictionary(): NSDictionary<any, any>;
  setAbbreviationDictionary(abbreviationDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  timeZoneDataVersion(): NSString;

}

