interface MSArtboardGroupUninitialized<InitializedType = MSArtboardGroup> extends _MSArtboardGroupUninitialized<MSArtboardGroup> {}

interface MSArtboardGroup extends _MSArtboardGroup, IMSArtboardGroup, IMSRootLayer, IMSLayerWithMutableBackgroundColor, IMSColorConvertible {
  optimalBoundingBox(): NSRect;
  hitTestInNameLabel_zoomValue(mouse: NSPoint, zoom: CGFloat): boolean;
  moveChildrenToIdenticalPositionAfterResizeFromRect(oldRect: NSRect): void;
  resizeToFitChildren(): void;
  convertColorsUsing(converter: any): void;

  preset(): MSArtboardPreset;
  setPreset(preset: MSArtboardPreset): void;
  grid(): MSSimpleGrid;
  setGrid(grid: MSSimpleGrid): void;
  layout(): MSLayoutGrid;
  setLayout(layout: MSLayoutGrid): void;
  rulerBase(): NSPoint;
  setRulerBase(rulerBase: NSPoint): void;
  contentBounds(): NSRect;
  rect(): CGRect;
  backgroundColor(): MSColor;
  setBackgroundColor(backgroundColor: MSColor): void;
}

declare const MSArtboardGroup: {
  alloc(): MSArtboardGroupUninitialized;
  class(): MSArtboardGroup;
  artboardRectFromLayersInArray(layers: MSLayerArray): NSRect;
}

