interface MSBitmapEditEventHandlerUninitialized<InitializedType = MSBitmapEditEventHandler> extends MSEventHandlerUninitialized<MSBitmapEditEventHandler> {}

interface MSBitmapEditEventHandler extends MSEventHandler {
  invertAction(sender: any): IBAction;
  cropAction(sender: any): IBAction;
  selectLayerBelowPoint(mouse: NSPoint): void;
  fillSelectionWithColor(color: NSColor): void;
  bitmapEditableLayer(): MSLayer;
  imageSize(): NSSize;
  imageBounds(): NSRect;
  selectionDidLiveUpdateTo(selection: NSBezierPath): void;

  currentMode(): MSBitmapEditMode;
  setCurrentMode(currentMode: MSBitmapEditMode): void;
  accumulatedSelection(): NSBezierPath;
  setAccumulatedSelection(accumulatedSelection: NSBezierPath): void;
}

declare const MSBitmapEditEventHandler: {
  alloc(): MSBitmapEditEventHandlerUninitialized;
  class(): MSBitmapEditEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
}

