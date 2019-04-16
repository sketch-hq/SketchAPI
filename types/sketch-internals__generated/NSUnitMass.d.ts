interface NSUnitMassUninitialized<InitializedType = NSUnitMass> extends NSDimensionUninitialized<NSUnitMass> {}
interface NSUnitMass extends NSDimension, INSSecureCoding {
}
declare const NSUnitMass: {
  alloc(): NSUnitMassUninitialized;
  class(): NSUnitMass;
  kilograms(): NSUnitMass;
  grams(): NSUnitMass;
  decigrams(): NSUnitMass;
  centigrams(): NSUnitMass;
  milligrams(): NSUnitMass;
  micrograms(): NSUnitMass;
  nanograms(): NSUnitMass;
  picograms(): NSUnitMass;
  ounces(): NSUnitMass;
  poundsMass(): NSUnitMass;
  stones(): NSUnitMass;
  metricTons(): NSUnitMass;
  shortTons(): NSUnitMass;
  carats(): NSUnitMass;
  ouncesTroy(): NSUnitMass;
  slugs(): NSUnitMass;

}

