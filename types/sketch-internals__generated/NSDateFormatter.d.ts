interface NSDateFormatterUninitialized<InitializedType = NSDateFormatter> extends NSFormatterUninitialized<NSDateFormatter> {}

interface NSDateFormatter extends NSFormatter {
  getObjectValue_forString_range_error(obj: any, string: NSString | string, rangep: NSRange, error: MOPointer<NSError>): boolean;
  stringFromDate(date: NSDate): NSString;
  dateFromString(string: NSString | string): NSDate;
  setLocalizedDateFormatFromTemplate(dateFormatTemplate: NSString | string): void;

  formattingContext(): NSFormattingContext;
  setFormattingContext(formattingContext: NSFormattingContext): void;
  dateFormat(): NSString;
  setDateFormat(dateFormat: NSString | string): void;
  dateStyle(): NSDateFormatterStyle;
  setDateStyle(dateStyle: NSDateFormatterStyle): void;
  timeStyle(): NSDateFormatterStyle;
  setTimeStyle(timeStyle: NSDateFormatterStyle): void;
  locale(): NSLocale;
  setLocale(locale: NSLocale): void;
  generatesCalendarDates(): boolean;
  setGeneratesCalendarDates(generatesCalendarDates: boolean): void;
  formatterBehavior(): NSDateFormatterBehavior;
  setFormatterBehavior(formatterBehavior: NSDateFormatterBehavior): void;
  timeZone(): NSTimeZone;
  setTimeZone(timeZone: NSTimeZone): void;
  calendar(): NSCalendar;
  setCalendar(calendar: NSCalendar): void;
  lenient(): boolean;
  setLenient(lenient: boolean): void;
  twoDigitStartDate(): NSDate;
  setTwoDigitStartDate(twoDigitStartDate: NSDate): void;
  defaultDate(): NSDate;
  setDefaultDate(defaultDate: NSDate): void;
  eraSymbols(): NSArray<any>;
  setEraSymbols(eraSymbols: NSArray<any> | any[]): void;
  monthSymbols(): NSArray<any>;
  setMonthSymbols(monthSymbols: NSArray<any> | any[]): void;
  shortMonthSymbols(): NSArray<any>;
  setShortMonthSymbols(shortMonthSymbols: NSArray<any> | any[]): void;
  weekdaySymbols(): NSArray<any>;
  setWeekdaySymbols(weekdaySymbols: NSArray<any> | any[]): void;
  shortWeekdaySymbols(): NSArray<any>;
  setShortWeekdaySymbols(shortWeekdaySymbols: NSArray<any> | any[]): void;
  AMSymbol(): NSString;
  setAMSymbol(AMSymbol: NSString | string): void;
  PMSymbol(): NSString;
  setPMSymbol(PMSymbol: NSString | string): void;
  longEraSymbols(): NSArray<any>;
  setLongEraSymbols(longEraSymbols: NSArray<any> | any[]): void;
  veryShortMonthSymbols(): NSArray<any>;
  setVeryShortMonthSymbols(veryShortMonthSymbols: NSArray<any> | any[]): void;
  standaloneMonthSymbols(): NSArray<any>;
  setStandaloneMonthSymbols(standaloneMonthSymbols: NSArray<any> | any[]): void;
  shortStandaloneMonthSymbols(): NSArray<any>;
  setShortStandaloneMonthSymbols(shortStandaloneMonthSymbols: NSArray<any> | any[]): void;
  veryShortStandaloneMonthSymbols(): NSArray<any>;
  setVeryShortStandaloneMonthSymbols(veryShortStandaloneMonthSymbols: NSArray<any> | any[]): void;
  veryShortWeekdaySymbols(): NSArray<any>;
  setVeryShortWeekdaySymbols(veryShortWeekdaySymbols: NSArray<any> | any[]): void;
  standaloneWeekdaySymbols(): NSArray<any>;
  setStandaloneWeekdaySymbols(standaloneWeekdaySymbols: NSArray<any> | any[]): void;
  shortStandaloneWeekdaySymbols(): NSArray<any>;
  setShortStandaloneWeekdaySymbols(shortStandaloneWeekdaySymbols: NSArray<any> | any[]): void;
  veryShortStandaloneWeekdaySymbols(): NSArray<any>;
  setVeryShortStandaloneWeekdaySymbols(veryShortStandaloneWeekdaySymbols: NSArray<any> | any[]): void;
  quarterSymbols(): NSArray<any>;
  setQuarterSymbols(quarterSymbols: NSArray<any> | any[]): void;
  shortQuarterSymbols(): NSArray<any>;
  setShortQuarterSymbols(shortQuarterSymbols: NSArray<any> | any[]): void;
  standaloneQuarterSymbols(): NSArray<any>;
  setStandaloneQuarterSymbols(standaloneQuarterSymbols: NSArray<any> | any[]): void;
  shortStandaloneQuarterSymbols(): NSArray<any>;
  setShortStandaloneQuarterSymbols(shortStandaloneQuarterSymbols: NSArray<any> | any[]): void;
  gregorianStartDate(): NSDate;
  setGregorianStartDate(gregorianStartDate: NSDate): void;
  doesRelativeDateFormatting(): boolean;
  setDoesRelativeDateFormatting(doesRelativeDateFormatting: boolean): void;
}

declare const NSDateFormatter: {
  alloc(): NSDateFormatterUninitialized;
  class(): NSDateFormatter;
  localizedStringFromDate_dateStyle_timeStyle(date: NSDate, dstyle: NSDateFormatterStyle, tstyle: NSDateFormatterStyle): NSString;
  dateFormatFromTemplate_options_locale(tmplate: NSString | string, opts: NSUInteger, locale: NSLocale | null): NSString;
  defaultFormatterBehavior(): NSDateFormatterBehavior;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultFormatterBehavior(defaultFormatterBehavior: NSDateFormatterBehavior): void;

}

