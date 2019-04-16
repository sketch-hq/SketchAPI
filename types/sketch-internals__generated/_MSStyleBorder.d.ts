interface _MSStyleBorderUninitialized<InitializedType = _MSStyleBorder> extends MSStyleBasicFillUninitialized<_MSStyleBorder> {}

interface _MSStyleBorder extends MSStyleBasicFill {

  position(): MSBorderPositionType;
  setPosition(position: MSBorderPositionType): void;
  thickness(): CGFloat;
  setThickness(thickness: CGFloat): void;
}

declare const _MSStyleBorder: {
  alloc(): _MSStyleBorderUninitialized;
  class(): _MSStyleBorder;
  defaultFillColor(): NSColor;
  drawBasicFill_colorSpace_enabled_inRect(basicFill: MSStyleBasicFill, colorSpace: NSColorSpace, enabled: boolean, frame: NSRect): void;
  drawCheckerboardBackgroundInRect(r: NSRect): void;
  drawCheckerboardBackgroundInRect_checkerboardSize_forDarkAppearance_backgroundColor(r: NSRect, checkerboardSize: CGFloat, dark: boolean, backgroundColor: NSColor): void;
  drawColor_enabled_inRect(color: NSColor, enabled: boolean, frame: NSRect): void;
  drawColor_enabled_inRect_checkerboardSize_forDarkAppearance(color: NSColor, enabled: boolean, frame: NSRect, checkerboardSize: CGFloat, dark: boolean): void;
}

