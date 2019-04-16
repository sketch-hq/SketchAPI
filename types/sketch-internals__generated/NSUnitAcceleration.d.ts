interface NSUnitAccelerationUninitialized<InitializedType = NSUnitAcceleration> extends NSDimensionUninitialized<NSUnitAcceleration> {}

interface NSUnitAcceleration extends NSDimension, INSSecureCoding {
}

declare const NSUnitAcceleration: {
  alloc(): NSUnitAccelerationUninitialized;
  class(): NSUnitAcceleration;
  baseUnit(): NSUnitAcceleration;
  metersPerSecondSquared(): NSUnitAcceleration;
  gravity(): NSUnitAcceleration;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

