interface NSEnergyFormatterUninitialized<InitializedType = NSEnergyFormatter> extends NSFormatterUninitialized<NSEnergyFormatter> {}
interface NSEnergyFormatter extends NSFormatter {
  stringFromValue_unit(value: number, unit: NSEnergyFormatterUnit): NSString;
  stringFromJoules(numberInJoules: number): NSString;
  unitStringFromValue_unit(value: number, unit: NSEnergyFormatterUnit): NSString;
  unitStringFromJoules_usedUnit(numberInJoules: number, unitp: NSEnergyFormatterUnit | null): NSString;
  getObjectValue_forString_errorDescription(obj: any, string: NSString | string, error: NSString | string): boolean;

  numberFormatter(): NSNumberFormatter;
  setNumberFormatter(numberFormatter: NSNumberFormatter): void;
  unitStyle(): NSFormattingUnitStyle;
  setUnitStyle(unitStyle: NSFormattingUnitStyle): void;
  forFoodEnergyUse(): boolean;
  setForFoodEnergyUse(forFoodEnergyUse: boolean): void;
}
declare const NSEnergyFormatter: {
  alloc(): NSEnergyFormatterUninitialized;
  class(): NSEnergyFormatter;
}

