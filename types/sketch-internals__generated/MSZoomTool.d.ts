interface MSZoomToolUninitialized<InitializedType = MSZoomTool> extends NSObjectUninitialized<MSZoomTool> {}
interface MSZoomTool extends NSObject {
  beginZoomToolModeActivatedByKey(activatedByKey: boolean): void;
  endZoomToolModeInView(view: MSContentDrawView): void;
  flagsChanged(): void;
  mouseDown_inView(event: NSEvent, view: MSContentDrawView): void;
  mouseDragged_inView(event: NSEvent, view: MSContentDrawView): void;
  mouseUp_inView(event: NSEvent, view: MSContentDrawView): void;
  mouseMoved(): void;
  drawWithScrollOrigin(origin: NSPoint): void;
  zoomValueAfterZoomIn(): CGFloat;
  zoomValueAfterZoomOut(): CGFloat;

  active(): boolean;
  activatedByKey(): boolean;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
}
declare const MSZoomTool: {
  alloc(): MSZoomToolUninitialized;
  class(): MSZoomTool;
}

