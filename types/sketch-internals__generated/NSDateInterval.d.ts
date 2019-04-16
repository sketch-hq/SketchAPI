interface NSDateIntervalUninitialized<InitializedType = NSDateInterval> extends NSObjectUninitialized<NSDateInterval> {
  init(): InitializedType;
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

  startDate(): NSDate;
  endDate(): NSDate;
  duration(): NSTimeInterval;
}
declare const NSDateInterval: {
  alloc(): NSDateIntervalUninitialized;
  class(): NSDateInterval;
}

