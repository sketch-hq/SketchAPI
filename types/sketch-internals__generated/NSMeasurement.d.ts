interface NSMeasurementUninitialized<UnitType, InitializedType = NSMeasurement<UnitType>> extends NSObjectUninitialized<NSMeasurement<UnitType>> {
  initWithDoubleValue_unit(doubleValue: number, unit: UnitType): InitializedType;
}
interface NSMeasurement<UnitType> extends NSObject, INSCopying, INSSecureCoding {
  canBeConvertedToUnit(unit: NSUnit): boolean;
  measurementByConvertingToUnit(unit: NSUnit): NSMeasurement<any>;
  measurementByAddingMeasurement(measurement: NSMeasurement<any>): NSMeasurement<any>;
  measurementBySubtractingMeasurement(measurement: NSMeasurement<any>): NSMeasurement<any>;

  unit(): UnitType;
  doubleValue(): number;
}
declare const NSMeasurement: {
  alloc<UnitType>(): NSMeasurementUninitialized<UnitType>;
  class(): NSMeasurement;
}

