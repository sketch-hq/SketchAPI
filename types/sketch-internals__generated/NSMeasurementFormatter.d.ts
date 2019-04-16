interface NSMeasurementFormatterUninitialized<InitializedType = NSMeasurementFormatter> extends NSFormatterUninitialized<NSMeasurementFormatter> {}

interface NSMeasurementFormatter extends NSFormatter, INSSecureCoding {
  stringFromMeasurement(measurement: NSMeasurement<any>): NSString;
  stringFromUnit(unit: NSUnit): NSString;

  unitOptions(): NSMeasurementFormatterUnitOptions;
  setUnitOptions(unitOptions: NSMeasurementFormatterUnitOptions): void;
  unitStyle(): NSFormattingUnitStyle;
  setUnitStyle(unitStyle: NSFormattingUnitStyle): void;
  locale(): NSLocale;
  setLocale(locale: NSLocale): void;
  numberFormatter(): NSNumberFormatter;
  setNumberFormatter(numberFormatter: NSNumberFormatter): void;
}

declare const NSMeasurementFormatter: {
  alloc(): NSMeasurementFormatterUninitialized;
  class(): NSMeasurementFormatter;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

