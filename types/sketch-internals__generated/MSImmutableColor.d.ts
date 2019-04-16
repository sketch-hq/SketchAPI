interface MSImmutableColorUninitialized<InitializedType = MSImmutableColor> extends _MSImmutableColorUninitialized<MSImmutableColor> {}
interface MSImmutableColor extends _MSImmutableColor, IMSColor {
  NSColorWithColorSpace(colorSpace: NSColorSpace): NSColor;
  newCGColorWithColorSpace(colorSpace: CGColorSpaceRef): CGColorRef;
  hexValue(): NSString;
  isWhite(): boolean;
  isBlack(): boolean;
  isGrayscale(): boolean;
  fuzzyIsEqual(other: MSImmutableColor): boolean;
  fuzzyIsEqual_precision(other: MSImmutableColor, precision: CGFloat): boolean;
  fuzzyIsEqualExcludingAlpha(other: MSImmutableColor): boolean;
  fuzzyIsEqualExcludingAlpha_precision(other: MSImmutableColor, precision: CGFloat): boolean;
  colorWithAlphaComponent(alpha: CGFloat): MSImmutableColor;
  stringValueWithAlpha(includeAlpha: boolean): NSString;
  stringValueWithAlpha_alphaMultiplication(includeAlpha: boolean, alphaMultiplication: CGFloat): NSString;
  svgRepresentation(): NSString;
  NSColorForContext(context: MSRenderingContext): NSColor;

  opaque(): boolean;
  manifestComponents(): NSArray<any>;
}
declare const MSImmutableColor: {
  alloc(): MSImmutableColorUninitialized;
  class(): MSImmutableColor;  colorWithNSColor(color: NSColor): MSImmutableColor;
  colorWithRed_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): MSImmutableColor;
  colorWithWhite_alpha(white: CGFloat, alpha: CGFloat): MSImmutableColor;
  colorWithIntegerRed_green_blue(red: NSInteger, green: NSInteger, blue: NSInteger): MSImmutableColor;
  colorWithIntegerRed_green_blue_alpha(red: NSInteger, green: NSInteger, blue: NSInteger, alpha: NSInteger): MSImmutableColor;
  whiteColor(): MSImmutableColor;
  blackColor(): MSImmutableColor;
  availableRGBColorSpaces(): NSArray<any>;
  getRed_green_blue_fromHexValue(red: CGFloat, green: CGFloat, blue: CGFloat, hexValue: NSString | string): void;
  hexValueForRed_green_blue(red: CGFloat, green: CGFloat, blue: CGFloat): NSString;
  namedColor(name: NSString | string): MSImmutableColor;
  colorWithSVGString(string: NSString | string): MSImmutableColor;

}

