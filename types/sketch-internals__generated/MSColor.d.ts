interface MSColorUninitialized<InitializedType = MSColor> extends _MSColorUninitialized<MSColor> {
  initWithImmutableObject(immutableColor: MSImmutableColor): InitializedType;
}
interface MSColor extends _MSColor, IMSColor {
  RGBADictionary(): NSDictionary<any, any>;
  scaledColor(scale: CGFloat): MSColor;
  colorWithAlphaComponent(alpha: CGFloat): MSColor;
  NSColorWithColorSpace(space: NSColorSpace): NSColor;
  fuzzyIsEqual(other: MSColor): boolean;
  fuzzyIsEqual_precision(other: MSColor, precision: CGFloat): boolean;
  fuzzyIsEqualExcludingAlpha(other: MSColor): boolean;
  fuzzyIsEqualExcludingAlpha_precision(other: MSColor, precision: CGFloat): boolean;
  getHue_saturation_brightness(hue: CGFloat | null, saturation: CGFloat | null, brightness: CGFloat | null): void;
  getHue_saturation_lightness(hue: CGFloat | null, saturation: CGFloat | null, lightness: CGFloat | null): void;
}
declare const MSColor: {
  alloc(): MSColorUninitialized;
  class(): MSColor;  colorWithRGBADictionary(dict: NSDictionary<any, any> | {[key: string]: any}): any;
  colorWithRed_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): MSColor;
  colorWithHue_saturation_brightness_alpha(hue: CGFloat, saturation: CGFloat, brightness: CGFloat, alpha: CGFloat): MSColor;
  colorWithHue_saturation_lightness_alpha(hue: CGFloat, saturation: CGFloat, lightness: CGFloat, alpha: CGFloat): MSColor;
  colorWithNSColor(color: NSColor): MSColor;
  whiteColor(): MSColor;
  blackColor(): MSColor;

}

