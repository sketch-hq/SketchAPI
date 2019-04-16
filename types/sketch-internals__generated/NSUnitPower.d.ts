interface NSUnitPowerUninitialized<InitializedType = NSUnitPower> extends NSDimensionUninitialized<NSUnitPower> {}
interface NSUnitPower extends NSDimension, INSSecureCoding {
}
declare const NSUnitPower: {
  alloc(): NSUnitPowerUninitialized;
  class(): NSUnitPower;
  terawatts(): NSUnitPower;
  gigawatts(): NSUnitPower;
  megawatts(): NSUnitPower;
  kilowatts(): NSUnitPower;
  watts(): NSUnitPower;
  milliwatts(): NSUnitPower;
  microwatts(): NSUnitPower;
  nanowatts(): NSUnitPower;
  picowatts(): NSUnitPower;
  femtowatts(): NSUnitPower;
  horsepower(): NSUnitPower;

}

