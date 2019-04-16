interface MSStyleBasicFillUninitialized<InitializedType = MSStyleBasicFill> extends _MSStyleBasicFillUninitialized<MSStyleBasicFill> {}
interface MSStyleBasicFill extends _MSStyleBasicFill, IMSColorConvertible {
  previewImageOfSize_colorSpace_clippingAsBorder_borderWidth(size: NSSize, colorSpace: NSColorSpace, clipBorder: boolean, borderWidth: CGFloat): NSImage;
}
declare const MSStyleBasicFill: {
  alloc(): MSStyleBasicFillUninitialized;
  class(): MSStyleBasicFill;  defaultFillColor(): NSColor;
  drawBasicFill_colorSpace_enabled_inRect(basicFill: MSStyleBasicFill, colorSpace: NSColorSpace, enabled: boolean, frame: NSRect): void;
  drawCheckerboardBackgroundInRect(r: NSRect): void;
  drawCheckerboardBackgroundInRect_checkerboardSize_forDarkAppearance_backgroundColor(r: NSRect, checkerboardSize: CGFloat, dark: boolean, backgroundColor: NSColor): void;
  drawColor_enabled_inRect(color: NSColor, enabled: boolean, frame: NSRect): void;
  drawColor_enabled_inRect_checkerboardSize_forDarkAppearance(color: NSColor, enabled: boolean, frame: NSRect, checkerboardSize: CGFloat, dark: boolean): void;

}

