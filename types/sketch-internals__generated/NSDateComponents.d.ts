interface NSDateComponentsUninitialized<InitializedType = NSDateComponents> extends NSObjectUninitialized<NSDateComponents> {}
interface NSDateComponents extends NSObject, INSCopying, INSSecureCoding {
  setValue_forComponent(value: NSInteger, unit: NSCalendarUnit): void;
  valueForComponent(unit: NSCalendarUnit): NSInteger;
  isValidDateInCalendar(calendar: NSCalendar): boolean;

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
}

