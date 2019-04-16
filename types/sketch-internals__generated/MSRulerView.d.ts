interface MSRulerViewUninitialized<InitializedType = MSRulerView> extends NSViewUninitialized<MSRulerView> {}
interface MSRulerView extends NSView {
  refreshGuideInDrawViewAtIndex(anIndex: NSUInteger): void;
  refreshGuideInDrawViewAtPosition(line: CGFloat): void;
  mouseEventToPoint(anEvent: NSEvent): NSPoint;
  document(): MSDocument;
  baseLine(): CGFloat;
  baseLineIncludingScrollOrigin(includeOrigin: boolean): CGFloat;
  drawGuidesOnCanvasInRect(aRect: NSRect): void;
  bezierPathForLineAtPosition_inRect(line: CGFloat, aRect: NSRect): NSBezierPath;
  occupiedRegionForRect_withOffset_zoom(rect: NSRect, left: NSInteger, zoom: CGFloat): NSBezierPath;
  scrollOrigin(): NSPoint;
  zoomValue(): CGFloat;
  rulerLength(): NSInteger;
  refreshTemporaryRulerGuide(): void;
  relevantAxisForPoint(aPoint: NSPoint): CGFloat;
  otherAxisForPoint(aPoint: NSPoint): CGFloat;
  setResizeCursor(): void;
  prepareRulerViewLayer(dirtyRect: NSRect): void;

  rulerData(): MSRulerData;
  document(): MSDocument;
  setDocument(document: MSDocument): void;
  contentView(): MSContentDrawView;
  setContentView(contentView: MSContentDrawView): void;
  mouseDidDrag(): boolean;
  setMouseDidDrag(mouseDidDrag: boolean): void;
  mouseDownPoint(): NSPoint;
  setMouseDownPoint(mouseDownPoint: NSPoint): void;
  axis(): BCAxis;
  setAxis(axis: BCAxis): void;
  temporaryRulerGuide(): CGFloat;
  setTemporaryRulerGuide(temporaryRulerGuide: CGFloat): void;
}
declare const MSRulerView: {
  alloc(): MSRulerViewUninitialized;
  class(): MSRulerView;
  rulerDraggingLocked(): boolean;
  setRulerDraggingLocked(rulerDraggingLocked: boolean): void;

}

