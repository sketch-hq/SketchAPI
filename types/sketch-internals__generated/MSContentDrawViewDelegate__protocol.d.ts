interface IMSContentDrawViewDelegate {

  scrollOrigin(): NSPoint;
  setScrollOrigin(scrollOrigin: NSPoint): void;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
}

