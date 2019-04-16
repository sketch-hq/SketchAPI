interface MSFlexibleColorUninitialized<InitializedType = MSFlexibleColor> extends NSObjectUninitialized<MSFlexibleColor> {}
interface MSFlexibleColor extends NSObject {
  getRed_green_blue_alpha(red: CGFloat | null, green: CGFloat | null, blue: CGFloat | null, alpha: CGFloat | null): void;
  getHue_saturation_brightness_alpha(hue: CGFloat | null, saturation: CGFloat | null, brightness: CGFloat | null, alpha: CGFloat | null): void;
  getHue_saturation_lightness_alpha(hue: CGFloat | null, saturation: CGFloat | null, lightness: CGFloat | null, alpha: CGFloat | null): void;
  colorForColorSpace(space: NSColorSpace): NSColor;
  msColor(): MSColor;
}
declare const MSFlexibleColor: {
  alloc(): MSFlexibleColorUninitialized;
  class(): MSFlexibleColor;  colorWithRed_green_blue_alpha(red: CGFloat, green: CGFloat, blue: CGFloat, alpha: CGFloat): any;
  colorWithHue_sat_bright_alpha(hue: CGFloat, sat: CGFloat, bright: CGFloat, alpha: CGFloat): any;
  colorWithHue_sat_lightness_alpha(hue: CGFloat, sat: CGFloat, lightness: CGFloat, alpha: CGFloat): any;

}

