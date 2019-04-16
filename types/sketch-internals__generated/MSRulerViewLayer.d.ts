interface MSRulerViewLayerUninitialized<InitializedType = MSRulerViewLayer> extends CALayerUninitialized<MSRulerViewLayer> {}
interface MSRulerViewLayer extends CALayer {
  drawBackground(): void;
  drawBackgroundForLabel_atPoint(string: NSString | string, p: NSPoint): void;

  axis(): BCAxis;
  setAxis(axis: BCAxis): void;
  formatter(): NSNumberFormatter;
  setFormatter(formatter: NSNumberFormatter): void;
  snapColor(): NSColor;
  setSnapColor(snapColor: NSColor): void;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
  baseLine(): CGFloat;
  setBaseLine(baseLine: CGFloat): void;
  occupiedRegion(): NSRect;
  setOccupiedRegion(occupiedRegion: NSRect): void;
  guides(): NSArray<any>;
  setGuides(guides: NSArray<any> | any[]): void;
  shouldDrawGuides(): boolean;
  setShouldDrawGuides(shouldDrawGuides: boolean): void;
  parentView(): NSView;
  setParentView(parentView: NSView): void;
}
declare const MSRulerViewLayer: {
  alloc(): MSRulerViewLayerUninitialized;
  class(): MSRulerViewLayer;
}

