interface NSUnitLengthUninitialized<InitializedType = NSUnitLength> extends NSDimensionUninitialized<NSUnitLength> {}
interface NSUnitLength extends NSDimension, INSSecureCoding {
}
declare const NSUnitLength: {
  alloc(): NSUnitLengthUninitialized;
  class(): NSUnitLength;
  megameters(): NSUnitLength;
  kilometers(): NSUnitLength;
  hectometers(): NSUnitLength;
  decameters(): NSUnitLength;
  meters(): NSUnitLength;
  decimeters(): NSUnitLength;
  centimeters(): NSUnitLength;
  millimeters(): NSUnitLength;
  micrometers(): NSUnitLength;
  nanometers(): NSUnitLength;
  picometers(): NSUnitLength;
  inches(): NSUnitLength;
  feet(): NSUnitLength;
  yards(): NSUnitLength;
  miles(): NSUnitLength;
  scandinavianMiles(): NSUnitLength;
  lightyears(): NSUnitLength;
  nauticalMiles(): NSUnitLength;
  fathoms(): NSUnitLength;
  furlongs(): NSUnitLength;
  astronomicalUnits(): NSUnitLength;
  parsecs(): NSUnitLength;

}

