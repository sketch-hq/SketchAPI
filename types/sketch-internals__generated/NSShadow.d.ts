interface NSShadowUninitialized<InitializedType = NSShadow> extends NSObjectUninitialized<NSShadow> {
  init(): InitializedType;
}
interface NSShadow extends NSObject, INSCopying, INSSecureCoding {
  set(): void;

  shadowOffset(): NSSize;
  setShadowOffset(shadowOffset: NSSize): void;
  shadowBlurRadius(): CGFloat;
  setShadowBlurRadius(shadowBlurRadius: CGFloat): void;
  shadowColor(): NSColor;
  setShadowColor(shadowColor: NSColor): void;
}
declare const NSShadow: {
  alloc(): NSShadowUninitialized;
  class(): NSShadow;  shadowWithColor_offset_blur(color: NSColor, offset: NSSize, blur: CGFloat): NSShadow;
  clearShadow(): void;

}

