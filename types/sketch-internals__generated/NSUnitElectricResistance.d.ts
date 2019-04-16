interface NSUnitElectricResistanceUninitialized<InitializedType = NSUnitElectricResistance> extends NSDimensionUninitialized<NSUnitElectricResistance> {}

interface NSUnitElectricResistance extends NSDimension, INSSecureCoding {
}

declare const NSUnitElectricResistance: {
  alloc(): NSUnitElectricResistanceUninitialized;
  class(): NSUnitElectricResistance;
  baseUnit(): NSUnitElectricResistance;
  megaohms(): NSUnitElectricResistance;
  kiloohms(): NSUnitElectricResistance;
  ohms(): NSUnitElectricResistance;
  milliohms(): NSUnitElectricResistance;
  microohms(): NSUnitElectricResistance;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

