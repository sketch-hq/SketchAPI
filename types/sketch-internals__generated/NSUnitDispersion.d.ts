interface NSUnitDispersionUninitialized<InitializedType = NSUnitDispersion> extends NSDimensionUninitialized<NSUnitDispersion> {}
interface NSUnitDispersion extends NSDimension, INSSecureCoding {
}
declare const NSUnitDispersion: {
  alloc(): NSUnitDispersionUninitialized;
  class(): NSUnitDispersion;
  partsPerMillion(): NSUnitDispersion;

}

