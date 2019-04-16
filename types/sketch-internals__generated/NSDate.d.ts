interface NSDateUninitialized<InitializedType = NSDate> extends NSObjectUninitialized<NSDate> {
  init(): InitializedType;
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

  timeIntervalSinceNow(): NSTimeInterval;
  timeIntervalSince1970(): NSTimeInterval;
  description(): NSString;
}
declare const NSDate: {
  alloc(): NSDateUninitialized;
  class(): NSDate;  date(): NSDate;
  dateWithTimeIntervalSinceNow(secs: NSTimeInterval): NSDate;
  dateWithTimeIntervalSinceReferenceDate(ti: NSTimeInterval): NSDate;
  dateWithTimeIntervalSince1970(secs: NSTimeInterval): NSDate;
  dateWithTimeInterval_sinceDate(secsToBeAdded: NSTimeInterval, date: NSDate): NSDate;
  iso8601DateFormatter(): NSDateFormatter;
  dateWithNTPRepresentation_bc(ntp: number): NSDate;

  timeIntervalSinceReferenceDate(): NSTimeInterval;
  distantFuture(): NSDate;
  distantPast(): NSDate;

}

