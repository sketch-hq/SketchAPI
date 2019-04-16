interface NSDatePickerUninitialized<InitializedType = NSDatePicker> extends NSControlUninitialized<NSDatePicker> {}

interface NSDatePicker extends NSControl {

  datePickerStyle(): NSDatePickerStyle;
  setDatePickerStyle(datePickerStyle: NSDatePickerStyle): void;
  bezeled(): boolean;
  setBezeled(bezeled: boolean): void;
  bordered(): boolean;
  setBordered(bordered: boolean): void;
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

declare const NSDatePicker: {
  alloc(): NSDatePickerUninitialized;
  class(): NSDatePicker;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

