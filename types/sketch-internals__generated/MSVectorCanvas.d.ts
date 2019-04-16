interface MSVectorCanvasUninitialized<InitializedType = MSVectorCanvas> extends NSObjectUninitialized<MSVectorCanvas> {}
interface MSVectorCanvas extends NSObject {
  registerWithEventHandler(handler: MSShapeEventHandler): void;
  didChangeAllowSelectionOnly(): void;
  selectHandleAtIndexPath_extendSelection(handle: NSIndexPath, extendSelection: boolean): void;
  selectHandlesAtIndexPaths(indexPaths: NSArray<any> | any[]): void;
  deselectHandleAtIndexPath(handle: NSIndexPath): void;
  drawHairline(): void;
  drawWire(): void;
  drawSnaps(): void;
  drawHighlightedSegment(): void;
  drawInsertionPoint(): void;
  drawHandles(): void;
  changeToCurveMode(curveMode: MSCurveMode): void;
  delete(sender: any): IBAction;
  alignVectorPointsToKey(key: NSString | string): void;
  distributeVectorPointsToAxis(axis: BCAxis): void;
  adjustHandlesToValue_onAxis(value: CGFloat, axis: BCAxis): void;
  adjustHandle_toValue_onAxis(handle: NSIndexPath, value: CGFloat, axis: BCAxis): void;
  singleMouseDownAtPoint_modifierFlags(location: NSPoint, flags: NSEventModifierFlags): void;
  doubleMouseDownAtPoint_modifierFlags(location: NSPoint, flags: NSEventModifierFlags): void;
  mouseUpAtPoint(location: NSPoint): void;
  trackMouse(sender: MSMouseTracker): void;
  flagsChanged(event: NSEvent): void;
  updateCursor(): void;
  setNeedsUpdateCursor(): void;

  eventHandler(): MSShapeEventHandler;
  view(): MSContentDrawView;
  setView(view: MSContentDrawView): void;
  pathController(): MSPathController;
  setPathController(pathController: MSPathController): void;
  selectedLayers(): NSArray<any>;
  setSelectedLayers(selectedLayers: NSArray<any> | any[]): void;
  visibleLayers(): NSArray<any>;
  editingBehavior(): MSShapeEditingBehavior;
  setEditingBehavior(editingBehavior: MSShapeEditingBehavior): void;
  indexPathsForSelectedHandles(): NSArray<any>;
  indexPathForHighlightedComponent(): NSIndexPath;
  interactivelySelecting(): boolean;
  snaps(): MSAlignmentEngineResult;
  setSnaps(snaps: MSAlignmentEngineResult): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSVectorCanvas: {
  alloc(): MSVectorCanvasUninitialized;
  class(): MSVectorCanvas;
}

