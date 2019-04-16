interface NSUnitElectricCurrentUninitialized<InitializedType = NSUnitElectricCurrent> extends NSDimensionUninitialized<NSUnitElectricCurrent> {}

interface NSUnitElectricCurrent extends NSDimension, INSSecureCoding {
}

declare const NSUnitElectricCurrent: {
  alloc(): NSUnitElectricCurrentUninitialized;
  class(): NSUnitElectricCurrent;
  baseUnit(): NSUnitElectricCurrent;
  megaamperes(): NSUnitElectricCurrent;
  kiloamperes(): NSUnitElectricCurrent;
  amperes(): NSUnitElectricCurrent;
  milliamperes(): NSUnitElectricCurrent;
  microamperes(): NSUnitElectricCurrent;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

