interface NSMassFormatterUninitialized<InitializedType = NSMassFormatter> extends NSFormatterUninitialized<NSMassFormatter> {}

interface NSMassFormatter extends NSFormatter {
  stringFromValue_unit(value: number, unit: NSMassFormatterUnit): NSString;
  stringFromKilograms(numberInKilograms: number): NSString;
  unitStringFromValue_unit(value: number, unit: NSMassFormatterUnit): NSString;
  unitStringFromKilograms_usedUnit(numberInKilograms: number, unitp: NSMassFormatterUnit | null): NSString;
  getObjectValue_forString_errorDescription(obj: any, string: NSString | string, error: NSString | string): boolean;

  numberFormatter(): NSNumberFormatter;
  setNumberFormatter(numberFormatter: NSNumberFormatter): void;
  unitStyle(): NSFormattingUnitStyle;
  setUnitStyle(unitStyle: NSFormattingUnitStyle): void;
  forPersonMassUse(): boolean;
  setForPersonMassUse(forPersonMassUse: boolean): void;
}

declare const NSMassFormatter: {
  alloc(): NSMassFormatterUninitialized;
  class(): NSMassFormatter;
  accessInstanceVariablesDirectly(): boolean;

}

