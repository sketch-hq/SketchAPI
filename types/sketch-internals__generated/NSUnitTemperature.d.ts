interface NSUnitTemperatureUninitialized<InitializedType = NSUnitTemperature> extends NSDimensionUninitialized<NSUnitTemperature> {}
interface NSUnitTemperature extends NSDimension, INSSecureCoding {
}
declare const NSUnitTemperature: {
  alloc(): NSUnitTemperatureUninitialized;
  class(): NSUnitTemperature;
  kelvin(): NSUnitTemperature;
  celsius(): NSUnitTemperature;
  fahrenheit(): NSUnitTemperature;

}

