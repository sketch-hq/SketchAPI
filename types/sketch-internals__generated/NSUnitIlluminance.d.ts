interface NSUnitIlluminanceUninitialized<InitializedType = NSUnitIlluminance> extends NSDimensionUninitialized<NSUnitIlluminance> {}
interface NSUnitIlluminance extends NSDimension, INSSecureCoding {
}
declare const NSUnitIlluminance: {
  alloc(): NSUnitIlluminanceUninitialized;
  class(): NSUnitIlluminance;
  lux(): NSUnitIlluminance;

}

