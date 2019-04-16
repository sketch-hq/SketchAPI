interface NSUnitEnergyUninitialized<InitializedType = NSUnitEnergy> extends NSDimensionUninitialized<NSUnitEnergy> {}

interface NSUnitEnergy extends NSDimension, INSSecureCoding {
}

declare const NSUnitEnergy: {
  alloc(): NSUnitEnergyUninitialized;
  class(): NSUnitEnergy;
  baseUnit(): NSUnitEnergy;
  kilojoules(): NSUnitEnergy;
  joules(): NSUnitEnergy;
  kilocalories(): NSUnitEnergy;
  calories(): NSUnitEnergy;
  kilowattHours(): NSUnitEnergy;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

