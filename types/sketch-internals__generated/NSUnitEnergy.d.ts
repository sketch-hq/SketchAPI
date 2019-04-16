interface NSUnitEnergyUninitialized<InitializedType = NSUnitEnergy> extends NSDimensionUninitialized<NSUnitEnergy> {}
interface NSUnitEnergy extends NSDimension, INSSecureCoding {
}
declare const NSUnitEnergy: {
  alloc(): NSUnitEnergyUninitialized;
  class(): NSUnitEnergy;
  kilojoules(): NSUnitEnergy;
  joules(): NSUnitEnergy;
  kilocalories(): NSUnitEnergy;
  calories(): NSUnitEnergy;
  kilowattHours(): NSUnitEnergy;

}

