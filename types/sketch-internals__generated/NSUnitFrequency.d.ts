interface NSUnitFrequencyUninitialized<InitializedType = NSUnitFrequency> extends NSDimensionUninitialized<NSUnitFrequency> {}

interface NSUnitFrequency extends NSDimension, INSSecureCoding {
}

declare const NSUnitFrequency: {
  alloc(): NSUnitFrequencyUninitialized;
  class(): NSUnitFrequency;
  baseUnit(): NSUnitFrequency;
  terahertz(): NSUnitFrequency;
  gigahertz(): NSUnitFrequency;
  megahertz(): NSUnitFrequency;
  kilohertz(): NSUnitFrequency;
  hertz(): NSUnitFrequency;
  millihertz(): NSUnitFrequency;
  microhertz(): NSUnitFrequency;
  nanohertz(): NSUnitFrequency;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

