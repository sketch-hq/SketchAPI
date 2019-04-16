interface NSByteCountFormatterUninitialized<InitializedType = NSByteCountFormatter> extends NSFormatterUninitialized<NSByteCountFormatter> {}
interface NSByteCountFormatter extends NSFormatter {
  stringFromByteCount(byteCount: number): NSString;

  allowedUnits(): NSByteCountFormatterUnits;
  setAllowedUnits(allowedUnits: NSByteCountFormatterUnits): void;
  countStyle(): NSByteCountFormatterCountStyle;
  setCountStyle(countStyle: NSByteCountFormatterCountStyle): void;
  allowsNonnumericFormatting(): boolean;
  setAllowsNonnumericFormatting(allowsNonnumericFormatting: boolean): void;
  includesUnit(): boolean;
  setIncludesUnit(includesUnit: boolean): void;
  includesCount(): boolean;
  setIncludesCount(includesCount: boolean): void;
  includesActualByteCount(): boolean;
  setIncludesActualByteCount(includesActualByteCount: boolean): void;
  adaptive(): boolean;
  setAdaptive(adaptive: boolean): void;
  zeroPadsFractionDigits(): boolean;
  setZeroPadsFractionDigits(zeroPadsFractionDigits: boolean): void;
  formattingContext(): NSFormattingContext;
  setFormattingContext(formattingContext: NSFormattingContext): void;
}
declare const NSByteCountFormatter: {
  alloc(): NSByteCountFormatterUninitialized;
  class(): NSByteCountFormatter;  stringFromByteCount_countStyle(byteCount: number, countStyle: NSByteCountFormatterCountStyle): NSString;

}

