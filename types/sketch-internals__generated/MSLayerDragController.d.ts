interface MSLayerDragControllerUninitialized<InitializedType = MSLayerDragController> extends MSToolControllerUninitialized<MSLayerDragController> {}

interface MSLayerDragController extends MSToolController {
  beginWithLayers_location(layers: MSLayerArray, location: NSPoint): void;
  updateWithState_location_duplicate(state: MSToolControllerState, location: NSPoint, duplicate: boolean): void;

  positioningTool(): MSLayerPositioningTool;
  duplicating(): boolean;
  layers(): NSArray<any>;
  originalLayers(): NSArray<any>;
  snappingEnabled(): boolean;
  setSnappingEnabled(snappingEnabled: boolean): void;
  zoomScale(): CGFloat;
  setZoomScale(zoomScale: CGFloat): void;
  visibleRect(): CGRect;
  setVisibleRect(visibleRect: CGRect): void;
  snapMask(): MSSnapMask;
  setSnapMask(snapMask: MSSnapMask): void;
  alignmentAxis(): NSNumber;
  setAlignmentAxis(alignmentAxis: NSNumber | number): void;
  snappingResult(): MSLayerSnappingResult;
  cursor(): NSCursor;
  userInterface(): any;
  setUserInterface(userInterface: any): void;
}

declare const MSLayerDragController: {
  alloc(): MSLayerDragControllerUninitialized;
  class(): MSLayerDragController;
}

