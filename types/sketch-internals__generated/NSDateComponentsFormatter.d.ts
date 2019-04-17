interface NSDateComponentsFormatterUninitialized<InitializedType = NSDateComponentsFormatter> extends NSFormatterUninitialized<NSDateComponentsFormatter> {}

interface NSDateComponentsFormatter extends NSFormatter {
  stringForObjectValue(obj: any | null): NSString;
  stringFromDateComponents(components: NSDateComponents): NSString;
  stringFromDate_toDate(startDate: NSDate, endDate: NSDate): NSString;
  stringFromTimeInterval(ti: NSTimeInterval): NSString;
  getObjectValue_forString_errorDescription(obj: any, string: NSString | string, error: MOPointer<NSString>): boolean;

  unitsStyle(): NSDateComponentsFormatterUnitsStyle;
  setUnitsStyle(unitsStyle: NSDateComponentsFormatterUnitsStyle): void;
  allowedUnits(): NSCalendarUnit;
  setAllowedUnits(allowedUnits: NSCalendarUnit): void;
  zeroFormattingBehavior(): NSDateComponentsFormatterZeroFormattingBehavior;
  setZeroFormattingBehavior(zeroFormattingBehavior: NSDateComponentsFormatterZeroFormattingBehavior): void;
  calendar(): NSCalendar;
  setCalendar(calendar: NSCalendar): void;
  referenceDate(): NSDate;
  setReferenceDate(referenceDate: NSDate): void;
  allowsFractionalUnits(): boolean;
  setAllowsFractionalUnits(allowsFractionalUnits: boolean): void;
  maximumUnitCount(): NSInteger;
  setMaximumUnitCount(maximumUnitCount: NSInteger): void;
  collapsesLargestUnit(): boolean;
  setCollapsesLargestUnit(collapsesLargestUnit: boolean): void;
  includesApproximationPhrase(): boolean;
  setIncludesApproximationPhrase(includesApproximationPhrase: boolean): void;
  includesTimeRemainingPhrase(): boolean;
  setIncludesTimeRemainingPhrase(includesTimeRemainingPhrase: boolean): void;
  formattingContext(): NSFormattingContext;
  setFormattingContext(formattingContext: NSFormattingContext): void;
}

declare const NSDateComponentsFormatter: {
  alloc(): NSDateComponentsFormatterUninitialized;
  class(): NSDateComponentsFormatter;
  localizedStringFromDateComponents_unitsStyle(components: NSDateComponents, unitsStyle: NSDateComponentsFormatterUnitsStyle): NSString;
}

