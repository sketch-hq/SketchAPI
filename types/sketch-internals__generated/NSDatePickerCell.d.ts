interface NSDatePickerCellUninitialized<InitializedType = NSDatePickerCell> extends NSActionCellUninitialized<NSDatePickerCell> {}

interface NSDatePickerCell extends NSActionCell {

  datePickerStyle(): NSDatePickerStyle;
  setDatePickerStyle(datePickerStyle: NSDatePickerStyle): void;
  drawsBackground(): boolean;
  setDrawsBackground(drawsBackground: boolean): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  textColor(): NSColor;
  setTextColor(textColor: NSColor): void;
  datePickerMode(): NSDatePickerMode;
  setDatePickerMode(datePickerMode: NSDatePickerMode): void;
  datePickerElements(): NSDatePickerElementFlags;
  setDatePickerElements(datePickerElements: NSDatePickerElementFlags): void;
  calendar(): NSCalendar;
  setCalendar(calendar: NSCalendar): void;
  locale(): NSLocale;
  setLocale(locale: NSLocale): void;
  timeZone(): NSTimeZone;
  setTimeZone(timeZone: NSTimeZone): void;
  dateValue(): NSDate;
  setDateValue(dateValue: NSDate): void;
  timeInterval(): NSTimeInterval;
  setTimeInterval(timeInterval: NSTimeInterval): void;
  minDate(): NSDate;
  setMinDate(minDate: NSDate): void;
  maxDate(): NSDate;
  setMaxDate(maxDate: NSDate): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const NSDatePickerCell: {
  alloc(): NSDatePickerCellUninitialized;
  class(): NSDatePickerCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

