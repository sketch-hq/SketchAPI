interface NSUnitDurationUninitialized<InitializedType = NSUnitDuration> extends NSDimensionUninitialized<NSUnitDuration> {}
interface NSUnitDuration extends NSDimension, INSSecureCoding {
}
declare const NSUnitDuration: {
  alloc(): NSUnitDurationUninitialized;
  class(): NSUnitDuration;
  seconds(): NSUnitDuration;
  minutes(): NSUnitDuration;
  hours(): NSUnitDuration;

}

