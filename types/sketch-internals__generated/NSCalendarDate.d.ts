interface NSCalendarDateUninitialized<InitializedType = NSCalendarDate> extends NSDateUninitialized<NSCalendarDate> {}

interface NSCalendarDate extends NSDate {
}

declare const NSCalendarDate: {
  alloc(): NSCalendarDateUninitialized;
  class(): NSCalendarDate;
  date(): NSCalendarDate;
  dateWithTimeIntervalSinceNow(secs: NSTimeInterval): NSCalendarDate;
  dateWithTimeIntervalSinceReferenceDate(ti: NSTimeInterval): NSCalendarDate;
  dateWithTimeIntervalSince1970(secs: NSTimeInterval): NSCalendarDate;
  dateWithTimeInterval_sinceDate(secsToBeAdded: NSTimeInterval, date: NSDate): NSCalendarDate;
  iso8601DateFormatter(): NSDateFormatter;
  dateWithNTPRepresentation_bc(ntp: number): NSDate;
  timeIntervalSinceReferenceDate(): NSTimeInterval;
  distantFuture(): NSDate;
  distantPast(): NSDate;

}

