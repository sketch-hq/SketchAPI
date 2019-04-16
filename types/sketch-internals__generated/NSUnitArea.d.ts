interface NSUnitAreaUninitialized<InitializedType = NSUnitArea> extends NSDimensionUninitialized<NSUnitArea> {}

interface NSUnitArea extends NSDimension, INSSecureCoding {
}

declare const NSUnitArea: {
  alloc(): NSUnitAreaUninitialized;
  class(): NSUnitArea;
  baseUnit(): NSUnitArea;
  squareMegameters(): NSUnitArea;
  squareKilometers(): NSUnitArea;
  squareMeters(): NSUnitArea;
  squareCentimeters(): NSUnitArea;
  squareMillimeters(): NSUnitArea;
  squareMicrometers(): NSUnitArea;
  squareNanometers(): NSUnitArea;
  squareInches(): NSUnitArea;
  squareFeet(): NSUnitArea;
  squareYards(): NSUnitArea;
  squareMiles(): NSUnitArea;
  acres(): NSUnitArea;
  ares(): NSUnitArea;
  hectares(): NSUnitArea;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

