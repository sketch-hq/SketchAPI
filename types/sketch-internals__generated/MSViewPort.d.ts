interface MSViewPortUninitialized<InitializedType = MSViewPort> extends NSObjectUninitialized<MSViewPort> {}
interface MSViewPort extends NSObject {

  scrollOrigin(): NSPoint;
  setScrollOrigin(scrollOrigin: NSPoint): void;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
}
declare const MSViewPort: {
  alloc(): MSViewPortUninitialized;
  class(): MSViewPort;  viewPortWithScrollOrigin_zoom(origin: NSPoint, zoom: CGFloat): MSViewPort;
  cappedZoom(zoom: CGFloat): CGFloat;
  minimumZoomValue(): CGFloat;
  maximumZoomValue(): CGFloat;

}

