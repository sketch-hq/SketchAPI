interface NSDateIntervalFormatterUninitialized<InitializedType = NSDateIntervalFormatter> extends NSFormatterUninitialized<NSDateIntervalFormatter> {}
interface NSDateIntervalFormatter extends NSFormatter {
  stringFromDate_toDate(fromDate: NSDate, toDate: NSDate): NSString;
  stringFromDateInterval(dateInterval: NSDateInterval): NSString;

  locale(): NSLocale;
  setLocale(locale: NSLocale): void;
  calendar(): NSCalendar;
  setCalendar(calendar: NSCalendar): void;
  timeZone(): NSTimeZone;
  setTimeZone(timeZone: NSTimeZone): void;
  dateTemplate(): NSString;
  setDateTemplate(dateTemplate: NSString | string): void;
  dateStyle(): NSDateIntervalFormatterStyle;
  setDateStyle(dateStyle: NSDateIntervalFormatterStyle): void;
  timeStyle(): NSDateIntervalFormatterStyle;
  setTimeStyle(timeStyle: NSDateIntervalFormatterStyle): void;
}
declare const NSDateIntervalFormatter: {
  alloc(): NSDateIntervalFormatterUninitialized;
  class(): NSDateIntervalFormatter;
}

