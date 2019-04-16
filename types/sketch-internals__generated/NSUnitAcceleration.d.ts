interface NSUnitAccelerationUninitialized<InitializedType = NSUnitAcceleration> extends NSDimensionUninitialized<NSUnitAcceleration> {}
interface NSUnitAcceleration extends NSDimension, INSSecureCoding {
}
declare const NSUnitAcceleration: {
  alloc(): NSUnitAccelerationUninitialized;
  class(): NSUnitAcceleration;
  metersPerSecondSquared(): NSUnitAcceleration;
  gravity(): NSUnitAcceleration;

}

