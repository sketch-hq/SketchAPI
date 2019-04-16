interface NSUnitVolumeUninitialized<InitializedType = NSUnitVolume> extends NSDimensionUninitialized<NSUnitVolume> {}

interface NSUnitVolume extends NSDimension, INSSecureCoding {
}

declare const NSUnitVolume: {
  alloc(): NSUnitVolumeUninitialized;
  class(): NSUnitVolume;
  baseUnit(): NSUnitVolume;
  megaliters(): NSUnitVolume;
  kiloliters(): NSUnitVolume;
  liters(): NSUnitVolume;
  deciliters(): NSUnitVolume;
  centiliters(): NSUnitVolume;
  milliliters(): NSUnitVolume;
  cubicKilometers(): NSUnitVolume;
  cubicMeters(): NSUnitVolume;
  cubicDecimeters(): NSUnitVolume;
  cubicCentimeters(): NSUnitVolume;
  cubicMillimeters(): NSUnitVolume;
  cubicInches(): NSUnitVolume;
  cubicFeet(): NSUnitVolume;
  cubicYards(): NSUnitVolume;
  cubicMiles(): NSUnitVolume;
  acreFeet(): NSUnitVolume;
  bushels(): NSUnitVolume;
  teaspoons(): NSUnitVolume;
  tablespoons(): NSUnitVolume;
  fluidOunces(): NSUnitVolume;
  cups(): NSUnitVolume;
  pints(): NSUnitVolume;
  quarts(): NSUnitVolume;
  gallons(): NSUnitVolume;
  imperialTeaspoons(): NSUnitVolume;
  imperialTablespoons(): NSUnitVolume;
  imperialFluidOunces(): NSUnitVolume;
  imperialPints(): NSUnitVolume;
  imperialQuarts(): NSUnitVolume;
  imperialGallons(): NSUnitVolume;
  metricCups(): NSUnitVolume;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

