interface FBBezierContourUninitialized<InitializedType = FBBezierContour> extends NSObjectUninitialized<FBBezierContour> {}
interface FBBezierContour extends NSObject, INSCopying {
  addCurve(curve: FBBezierCurve): void;
  addCurveFrom_to(startCrossing: FBEdgeCrossing, endCrossing: FBEdgeCrossing): void;
  addReverseCurve(curve: FBBezierCurve): void;
  addReverseCurveFrom_to(startCrossing: FBEdgeCrossing, endCrossing: FBEdgeCrossing): void;
  intersectionsWithRay_withBlock(testEdge: FBBezierCurve, block: Block): void;
  numberOfIntersectionsWithRay(testEdge: FBBezierCurve): NSUInteger;
  containsPoint_isAmbiguous(testPoint: FBPoint, ambiguous: boolean): boolean;
  markCrossingsAsEntryOrExitWithContour_markInside(otherContour: FBBezierContour, markInside: boolean): void;
  containsPointUsingNonZeroWindingRule(point: FBPoint): boolean;
  containsCrossingUsingNonZeroWindingRule(testIntersection: FBBezierIntersection): boolean;
  bezierPath(): FBBezierPath;
  close(): void;
  bezierPathFromEdge_toEdge(curve1: FBBezierCurve, curve2: FBBezierCurve): FBBezierPath;
  reversedContour(): FBBezierContour;
  contourMadeClockwiseIfNecessary(): FBBezierContour;
  contourWithTransform(t: CGAffineTransform): FBBezierContour;
  contourByMergingLinearRuns(): FBBezierContour;
  addOverlap(overlap: FBContourOverlap): void;
  removeAllOverlaps(): void;
  isEquivalent(other: FBBezierContour): boolean;
  startEdge(): FBBezierCurve;
  testRayForContainment(bounds: FBRect): FBBezierCurve;
  closestLocationToPoint(point: FBPoint): FBCurveLocation;
  clone(): FBBezierContour;
  crossesOwnContour(contour: FBBezierContour): boolean;
  contourWithFlatness(flatness: CGFloat): FBBezierContour;
  markSelfCrossingsAsEntryOrExit(): void;
  sortCoincidentCrossings(): void;
  crossingContainmentRay(testPoint: FBPoint): FBBezierCurve;
  debugPathForIntersectionType_withTransform_andSizeTransform(itersectionType: NSInteger, transform: CGAffineTransform, sizeTransform: CGAffineTransform): FBBezierPath;
  debugPathForJointsWithTransform_andSizeTransform(transform: CGAffineTransform, sizeTransform: CGAffineTransform): FBBezierPath;
  debugPathForContainmentOfCrossing_transform(testIntersection: FBBezierIntersection, transform: CGAffineTransform): FBBezierPath;
  debugPathForWindingRuleContainmentWithTransform_andSizeTransform(transform: CGAffineTransform, sizeTransform: CGAffineTransform): FBBezierPath;
  forEachEdgeOverlapDo(block: Block): void;
  doesOverlapContainCrossing(crossing: FBEdgeCrossing): boolean;
  doesOverlapContainParameter_onEdge(parameter: FBFloat, edge: FBBezierCurve): boolean;
  debugDrawColor_scale(color: NSColor, scale: CGFloat): void;

  edges(): NSArray<any>;
  nonPointEdges(): NSArray<any>;
  bounds(): FBRect;
  boundingRect(): FBRect;
  firstPoint(): FBPoint;
  inside(): FBContourInside;
  setInside(inside: FBContourInside): void;
  intersectingContours(): NSArray<any>;
  isEmpty(): boolean;
  isClosed(): boolean;
  direction(): FBContourDirection;
  CGPath(): CGPathRef;
  overlaps(): NSArray<any>;
  crossings(): NSArray<any>;
}
declare const FBBezierContour: {
  alloc(): FBBezierContourUninitialized;
  class(): FBBezierContour;  bezierContourWithCurve(curve: FBBezierCurve): FBBezierContour;

}

