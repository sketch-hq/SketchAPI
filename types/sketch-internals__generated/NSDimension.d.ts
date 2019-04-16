interface NSDimensionUninitialized<InitializedType = NSDimension> extends NSUnitUninitialized<NSDimension> {
  initWithSymbol_converter(symbol: NSString | string, converter: NSUnitConverter): InitializedType;
}
interface NSDimension extends NSUnit, INSSecureCoding {

  converter(): NSUnitConverter;
}
declare const NSDimension: {
  alloc(): NSDimensionUninitialized;
  class(): NSDimension;  baseUnit(): NSDimension;

}

