interface MSShapePathLayerUninitialized<InitializedType = MSShapePathLayer> extends _MSShapePathLayerUninitialized<MSShapePathLayer> {}
interface MSShapePathLayer extends _MSShapePathLayer, IMSPathLayer {
  resetPoints(): void;
  resetPointsBasedOnUserInteraction(): void;
  editable(): boolean;
  simplify(): void;
  reversePath(): void;
  applyAffineTransformToPath(transform: CGAffineTransform): void;
  adjustFrameAfterEditIntegral_fixAncestors(makeIntegral: boolean, fixAncestors: boolean): void;
  didEdit(): void;
  isNearlyEmpty(): boolean;
  pointCenteredAfterPointIndex(pointIndex: NSUInteger): NSPoint;
  indexOfSegmentAtPoint_tolerance(point: NSPoint, tolerance: NSSize): NSUInteger;
  flattenedLayer(): MSShapePathLayer;
  pointsAroundIndex(index: NSUInteger): NSArray<any>;
  isRectangle(): boolean;
  isPolygon(): boolean;
  adjustGeometryToBoundsRect(targetBounds: NSRect): void;
  cornerForLinePointAtIndex(index: NSUInteger): BCCorner;
  insertionCursor(): NSCursor;

  slope(): CGFloat;
  isEditing(): boolean;
  setIsEditing(isEditing: boolean): void;
  hasRoundedCorners(): boolean;
  numberOfCurvePoints(): NSUInteger;
  canFlatten(): boolean;
  pathInFrame(): MSPath;
  setPathInFrame(pathInFrame: MSPath): void;
}
declare const MSShapePathLayer: {
  alloc(): MSShapePathLayerUninitialized;
  class(): MSShapePathLayer;  layerWithPath(path: MSPath): MSShapePathLayer;
  layerWithPath_integralFrame(path: MSPath, makeIntegral: boolean): MSShapePathLayer;
  layerWithShapeGroupSubpath(subPath: MSPath): MSShapePathLayer;
  shapeWithRect(rect: NSRect): MSRectangleShape;
  performBatchEdits(edits: Block): void;

}

