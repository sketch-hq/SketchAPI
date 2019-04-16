interface MSOverlayColorSettingsUninitialized<InitializedType = MSOverlayColorSettings> extends NSObjectUninitialized<MSOverlayColorSettings> {}
interface MSOverlayColorSettings extends NSObject {
  isEqualToColorSettings(settings: MSOverlayColorSettings): boolean;

  canvasBackgroundColor(): NSColor;
  setCanvasBackgroundColor(canvasBackgroundColor: NSColor): void;
  pageBackgroundColor(): NSColor;
  setPageBackgroundColor(pageBackgroundColor: NSColor): void;
  pixelGridColor(): NSColor;
  setPixelGridColor(pixelGridColor: NSColor): void;
  sliceOutlineColor(): NSColor;
  setSliceOutlineColor(sliceOutlineColor: NSColor): void;
  artboardTitleColor(): NSColor;
  setArtboardTitleColor(artboardTitleColor: NSColor): void;
  symbolTitleColor(): NSColor;
  setSymbolTitleColor(symbolTitleColor: NSColor): void;
}
declare const MSOverlayColorSettings: {
  alloc(): MSOverlayColorSettingsUninitialized;
  class(): MSOverlayColorSettings;  colorSettings(): MSOverlayColorSettings;

}

