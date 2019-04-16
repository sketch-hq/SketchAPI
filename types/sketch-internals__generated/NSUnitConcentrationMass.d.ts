interface NSUnitConcentrationMassUninitialized<InitializedType = NSUnitConcentrationMass> extends NSDimensionUninitialized<NSUnitConcentrationMass> {}
interface NSUnitConcentrationMass extends NSDimension, INSSecureCoding {
}
declare const NSUnitConcentrationMass: {
  alloc(): NSUnitConcentrationMassUninitialized;
  class(): NSUnitConcentrationMass;  millimolesPerLiterWithGramsPerMole(gramsPerMole: number): NSUnitConcentrationMass;

  gramsPerLiter(): NSUnitConcentrationMass;
  milligramsPerDeciliter(): NSUnitConcentrationMass;

}

