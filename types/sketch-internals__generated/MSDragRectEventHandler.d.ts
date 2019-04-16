interface MSDragRectEventHandlerUninitialized<InitializedType = MSDragRectEventHandler> extends MSEventHandlerUninitialized<MSDragRectEventHandler> {}
interface MSDragRectEventHandler extends MSEventHandler {
  performActionWithRect_fromLayer_constrainProportions(rect: NSRect, layer: MSLayer | null, constrainProportions: boolean): any;
  drawRectPreview(): void;

  group(): MSLayerGroup;
  insertionRect(): NSRect;
  setInsertionRect(insertionRect: NSRect): void;
  allowsInsertLayerFromExistingLayer(): boolean;
  cursorForInsertingFromExisting(): NSCursor;
  layerSelectionOptionsForInsertingFromExistingLayer(): MSLayerSelectionOptions;
  dragGestureRecognizer(): MSDragRectGestureRecognizer;
  snapper(): MSAlignmentEngine;
  snappingResult(): MSAlignmentEngineResult;
  setSnappingResult(snappingResult: MSAlignmentEngineResult): void;
  insertionCursor(): NSCursor;
  setInsertionCursor(insertionCursor: NSCursor): void;
}
declare const MSDragRectEventHandler: {
  alloc(): MSDragRectEventHandlerUninitialized;
  class(): MSDragRectEventHandler;
}

