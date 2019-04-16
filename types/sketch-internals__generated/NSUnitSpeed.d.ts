interface NSUnitSpeedUninitialized<InitializedType = NSUnitSpeed> extends NSDimensionUninitialized<NSUnitSpeed> {}

interface NSUnitSpeed extends NSDimension, INSSecureCoding {
}

declare const NSUnitSpeed: {
  alloc(): NSUnitSpeedUninitialized;
  class(): NSUnitSpeed;
  baseUnit(): NSUnitSpeed;
  metersPerSecond(): NSUnitSpeed;
  kilometersPerHour(): NSUnitSpeed;
  milesPerHour(): NSUnitSpeed;
  knots(): NSUnitSpeed;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

