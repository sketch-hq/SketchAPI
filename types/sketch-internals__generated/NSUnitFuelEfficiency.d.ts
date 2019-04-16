interface NSUnitFuelEfficiencyUninitialized<InitializedType = NSUnitFuelEfficiency> extends NSDimensionUninitialized<NSUnitFuelEfficiency> {}
interface NSUnitFuelEfficiency extends NSDimension, INSSecureCoding {
}
declare const NSUnitFuelEfficiency: {
  alloc(): NSUnitFuelEfficiencyUninitialized;
  class(): NSUnitFuelEfficiency;
  litersPer100Kilometers(): NSUnitFuelEfficiency;
  milesPerImperialGallon(): NSUnitFuelEfficiency;
  milesPerGallon(): NSUnitFuelEfficiency;

}

