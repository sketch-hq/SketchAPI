interface NSUnitAngleUninitialized<InitializedType = NSUnitAngle> extends NSDimensionUninitialized<NSUnitAngle> {}

interface NSUnitAngle extends NSDimension, INSSecureCoding {
}

declare const NSUnitAngle: {
  alloc(): NSUnitAngleUninitialized;
  class(): NSUnitAngle;
  baseUnit(): NSUnitAngle;
  degrees(): NSUnitAngle;
  arcMinutes(): NSUnitAngle;
  arcSeconds(): NSUnitAngle;
  radians(): NSUnitAngle;
  gradians(): NSUnitAngle;
  revolutions(): NSUnitAngle;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

