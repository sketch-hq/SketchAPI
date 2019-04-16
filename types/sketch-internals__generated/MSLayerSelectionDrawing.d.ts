interface MSLayerSelectionDrawingUninitialized<InitializedType = MSLayerSelectionDrawing> extends NSObjectUninitialized<MSLayerSelectionDrawing> {}
interface MSLayerSelectionDrawing extends NSObject {
}
declare const MSLayerSelectionDrawing: {
  alloc(): MSLayerSelectionDrawingUninitialized;
  class(): MSLayerSelectionDrawing;  drawOverridesForLayers_zoomScale(layers: MSLayerArray, zoom: CGFloat): void;
  drawBorderWithRect_zoomValue(rect: NSRect, zoom: CGFloat): void;
  strokeWidthForZoomValue(zoom: CGFloat): CGFloat;

}

