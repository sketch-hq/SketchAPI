interface NSLengthFormatterUninitialized<InitializedType = NSLengthFormatter> extends NSFormatterUninitialized<NSLengthFormatter> {}

interface NSLengthFormatter extends NSFormatter {
  stringFromValue_unit(value: number, unit: NSLengthFormatterUnit): NSString;
  stringFromMeters(numberInMeters: number): NSString;
  unitStringFromValue_unit(value: number, unit: NSLengthFormatterUnit): NSString;
  unitStringFromMeters_usedUnit(numberInMeters: number, unitp: NSLengthFormatterUnit | null): NSString;
  getObjectValue_forString_errorDescription(obj: any, string: NSString | string, error: NSString | string): boolean;

  numberFormatter(): NSNumberFormatter;
  setNumberFormatter(numberFormatter: NSNumberFormatter): void;
  unitStyle(): NSFormattingUnitStyle;
  setUnitStyle(unitStyle: NSFormattingUnitStyle): void;
  forPersonHeightUse(): boolean;
  setForPersonHeightUse(forPersonHeightUse: boolean): void;
}

declare const NSLengthFormatter: {
  alloc(): NSLengthFormatterUninitialized;
  class(): NSLengthFormatter;
  accessInstanceVariablesDirectly(): boolean;

}

