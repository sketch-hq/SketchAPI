interface MSPastingViewportUninitialized<InitializedType = MSPastingViewport> extends NSObjectUninitialized<MSPastingViewport> {}
interface MSPastingViewport extends NSObject {
  viewportContainingLayers(layers: MSLayerArray): MSPastingViewport;

  zoomValue(): CGFloat;
  visibleRect(): NSRect;
}
declare const MSPastingViewport: {
  alloc(): MSPastingViewportUninitialized;
  class(): MSPastingViewport;  viewportWithVisibleRect_zoom(visibleRect: NSRect, zoom: CGFloat): MSPastingViewport;

}

