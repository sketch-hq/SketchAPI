interface NSUnitPressureUninitialized<InitializedType = NSUnitPressure> extends NSDimensionUninitialized<NSUnitPressure> {}
interface NSUnitPressure extends NSDimension, INSSecureCoding {
}
declare const NSUnitPressure: {
  alloc(): NSUnitPressureUninitialized;
  class(): NSUnitPressure;
  newtonsPerMetersSquared(): NSUnitPressure;
  gigapascals(): NSUnitPressure;
  megapascals(): NSUnitPressure;
  kilopascals(): NSUnitPressure;
  hectopascals(): NSUnitPressure;
  inchesOfMercury(): NSUnitPressure;
  bars(): NSUnitPressure;
  millibars(): NSUnitPressure;
  millimetersOfMercury(): NSUnitPressure;
  poundsForcePerSquareInch(): NSUnitPressure;

}

