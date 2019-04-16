interface NSISO8601DateFormatterUninitialized<InitializedType = NSISO8601DateFormatter> extends NSFormatterUninitialized<NSISO8601DateFormatter> {}

interface NSISO8601DateFormatter extends NSFormatter, INSSecureCoding {
  stringFromDate(date: NSDate): NSString;
  dateFromString(string: NSString | string): NSDate;

  timeZone(): NSTimeZone;
  setTimeZone(timeZone: NSTimeZone): void;
  formatOptions(): NSISO8601DateFormatOptions;
  setFormatOptions(formatOptions: NSISO8601DateFormatOptions): void;
}

declare const NSISO8601DateFormatter: {
  alloc(): NSISO8601DateFormatterUninitialized;
  class(): NSISO8601DateFormatter;
  stringFromDate_timeZone_formatOptions(date: NSDate, timeZone: NSTimeZone, formatOptions: NSISO8601DateFormatOptions): NSString;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

