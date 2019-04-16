interface MSArtboardGroupUninitialized<InitializedType = MSArtboardGroup> extends _MSArtboardGroupUninitialized<MSArtboardGroup> {}
interface MSArtboardGroup extends _MSArtboardGroup, IMSArtboardGroup, IMSRootLayer, IMSLayerWithMutableBackgroundColor, IMSColorConvertible {
  optimalBoundingBox(): NSRect;
  hitTestInNameLabel_zoomValue(mouse: NSPoint, zoom: CGFloat): boolean;
  moveChildrenToIdenticalPositionAfterResizeFromRect(oldRect: NSRect): void;
  resizeToFitChildren(): void;

  preset(): MSArtboardPreset;
  setPreset(preset: MSArtboardPreset): void;
}
declare const MSArtboardGroup: {
  alloc(): MSArtboardGroupUninitialized;
  class(): MSArtboardGroup;  artboardRectFromLayersInArray(layers: MSLayerArray): NSRect;

}

