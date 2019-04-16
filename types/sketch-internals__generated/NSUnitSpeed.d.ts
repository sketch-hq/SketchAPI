interface NSUnitSpeedUninitialized<InitializedType = NSUnitSpeed> extends NSDimensionUninitialized<NSUnitSpeed> {}
interface NSUnitSpeed extends NSDimension, INSSecureCoding {
}
declare const NSUnitSpeed: {
  alloc(): NSUnitSpeedUninitialized;
  class(): NSUnitSpeed;
  metersPerSecond(): NSUnitSpeed;
  kilometersPerHour(): NSUnitSpeed;
  milesPerHour(): NSUnitSpeed;
  knots(): NSUnitSpeed;

}

