interface NSUnitElectricPotentialDifferenceUninitialized<InitializedType = NSUnitElectricPotentialDifference> extends NSDimensionUninitialized<NSUnitElectricPotentialDifference> {}

interface NSUnitElectricPotentialDifference extends NSDimension, INSSecureCoding {
}

declare const NSUnitElectricPotentialDifference: {
  alloc(): NSUnitElectricPotentialDifferenceUninitialized;
  class(): NSUnitElectricPotentialDifference;
  baseUnit(): NSUnitElectricPotentialDifference;
  megavolts(): NSUnitElectricPotentialDifference;
  kilovolts(): NSUnitElectricPotentialDifference;
  volts(): NSUnitElectricPotentialDifference;
  millivolts(): NSUnitElectricPotentialDifference;
  microvolts(): NSUnitElectricPotentialDifference;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

