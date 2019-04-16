interface NSUnitIlluminanceUninitialized<InitializedType = NSUnitIlluminance> extends NSDimensionUninitialized<NSUnitIlluminance> {}

interface NSUnitIlluminance extends NSDimension, INSSecureCoding {
}

declare const NSUnitIlluminance: {
  alloc(): NSUnitIlluminanceUninitialized;
  class(): NSUnitIlluminance;
  baseUnit(): NSUnitIlluminance;
  lux(): NSUnitIlluminance;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

