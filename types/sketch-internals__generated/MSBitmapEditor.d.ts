interface MSBitmapEditorUninitialized<InitializedType = MSBitmapEditor> extends NSObjectUninitialized<MSBitmapEditor> {}
interface MSBitmapEditor extends NSObject {
  draw(): void;
  mouseDown_flags(mouse: NSPoint, flags: NSUInteger): void;
  mouseDragged(mouse: NSPoint): void;
  mouseUp_flags(mouse: NSPoint, flags: NSUInteger): void;
  refreshRectInBitmapCoordinates(bitmapRect: NSRect): void;
  drawMarchingAntsForPath(path: NSBezierPath): void;
  pointInBitmapLayer(mouse: NSPoint): NSPoint;
  imageSize(): NSSize;
  imageBounds(): NSRect;

  eventHandler(): MSBitmapEditEventHandler;
  setEventHandler(eventHandler: MSBitmapEditEventHandler): void;
  bitmapEditableLayer(): MSLayer;
  accumulatedSelection(): NSBezierPath;
  setAccumulatedSelection(accumulatedSelection: NSBezierPath): void;
}
declare const MSBitmapEditor: {
  alloc(): MSBitmapEditorUninitialized;
  class(): MSBitmapEditor;
}

