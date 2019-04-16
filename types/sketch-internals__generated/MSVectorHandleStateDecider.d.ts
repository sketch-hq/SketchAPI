interface MSVectorHandleStateDeciderUninitialized<InitializedType = MSVectorHandleStateDecider> extends NSObjectUninitialized<MSVectorHandleStateDecider> {}
interface MSVectorHandleStateDecider extends NSObject {
  reset(): void;
  isHandleAtIndexPathSelected(indexPath: NSIndexPath): boolean;
  isHandleAtIndexPathVisible(indexPath: NSIndexPath): boolean;
  stateOfCurvePointAtIndexPath_curveToState_curveFromState(indexPath: NSIndexPath, curveToState: MSHandleState, curveFromState: MSHandleState): MSHandleState;
  indexPathOfHandleAtPoint_tolerance(point: NSPoint, tolerance: CGFloat): NSIndexPath;

  visibilityAroundSelectedHandles(): MSCurveAdjustmentHandleVisibility;
  setVisibilityAroundSelectedHandles(visibilityAroundSelectedHandles: MSCurveAdjustmentHandleVisibility): void;
  visibilityAroundHighlight(): MSCurveAdjustmentHandleVisibility;
  setVisibilityAroundHighlight(visibilityAroundHighlight: MSCurveAdjustmentHandleVisibility): void;
  selectionContext(): MSShapeChangeContext;
  setSelectionContext(selectionContext: MSShapeChangeContext): void;
  indexPathForHighlightedComponent(): NSIndexPath;
  setIndexPathForHighlightedComponent(indexPathForHighlightedComponent: NSIndexPath): void;
}
declare const MSVectorHandleStateDecider: {
  alloc(): MSVectorHandleStateDeciderUninitialized;
  class(): MSVectorHandleStateDecider;
}

