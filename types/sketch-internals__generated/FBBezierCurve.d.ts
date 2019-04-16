interface FBBezierCurveUninitialized<InitializedType = FBBezierCurve> extends NSObjectUninitialized<FBBezierCurve> {
  initWithEndPoint1_controlPoint1_controlPoint2_endPoint2_contour(endPoint1: FBPoint, controlPoint1: FBPoint, controlPoint2: FBPoint, endPoint2: FBPoint, contour: FBBezierContour): InitializedType;
  initWithLineStartPoint_endPoint_contour(startPoint: FBPoint, endPoint: FBPoint, contour: FBBezierContour): InitializedType;
}
interface FBBezierCurve extends NSObject {
  checkForLine(): void;
  doesHaveIntersectionsWithBezierCurve(curve: FBBezierCurve): boolean;
  intersectionsWithBezierCurve_overlapRange_withBlock(curve: FBBezierCurve, intersectRange: FBBezierIntersectRange, block: FBCurveIntersectionBlock): void;
  pointAtParameter(parameter: FBFloat): FBPoint;
  pointAtParameter_leftBezierCurve_rightBezierCurve(parameter: FBFloat, leftBezierCurve: FBBezierCurve, rightBezierCurve: FBBezierCurve): FBPoint;
  subcurveWithRange(range: FBRange): FBBezierCurve;
  splitSubcurvesWithRange_left_middle_right(range: FBRange, leftCurve: FBBezierCurve, middleCurve: FBBezierCurve, rightCurve: FBBezierCurve): void;
  lengthAtParameter(parameter: FBFloat): FBFloat;
  length(): FBFloat;
  pointFromRightOffset(offset: FBFloat): FBPoint;
  pointFromLeftOffset(offset: FBFloat): FBPoint;
  tangentFromRightOffset(offset: FBFloat): FBPoint;
  tangentFromLeftOffset(offset: FBFloat): FBPoint;
  tangentAtParameter(parameter: FBFloat): FBPoint;
  closestLocationToPoint(point: FBPoint): FBBezierCurveLocation;
  reversedCurve(): FBBezierCurve;
  curveWithTransform(t: CGAffineTransform): FBBezierCurve;
  bezierPath(): FBBezierPath;
  clone(): FBBezierCurve;
  edgesWithFlatness(flatness: CGFloat): NSArray<any>;
  mightIntersectWith(curve: FBBezierCurve): boolean;
  firstCrossingUsingNonself(useNonself: boolean): FBEdgeCrossing;
  lastCrossingUsingNonself(useNonself: boolean): FBEdgeCrossing;
  hasCrossingsUsingNonself(useNonself: boolean): boolean;
  crossingsWithBlock(block: Block): void;
  crossingsCopyWithBlock(block: Block): void;
  removeCrossingsInNonCrossingOverlapRuns(): void;
  nextCrossing(crossing: FBEdgeCrossing): FBEdgeCrossing;
  previousCrossing(crossing: FBEdgeCrossing): FBEdgeCrossing;
  intersectingEdgesWithBlock(block: Block): void;
  selfIntersectingEdgesWithBlock(block: Block): void;
  addCrossing(crossing: FBEdgeCrossing): void;
  removeCrossing(crossing: FBEdgeCrossing): void;
  removeDuplicateCrossings(): void;
  removeAllCrossings(): void;
  reorderCoincidentCrossingA_crossingB(crossingA: FBEdgeCrossing, crossingB: FBEdgeCrossing): void;
  crossesEdge_atIntersection(edge2: FBBezierCurve, intersection: FBBezierIntersection): boolean;
  crossesEdge_atIntersectRange(edge2: FBBezierCurve, intersectRange: FBBezierIntersectRange): boolean;
  isNext(other: FBBezierCurve): boolean;
  debugDrawColor_controlPointColor_scale(color: NSColor, controlPointColor: NSColor, scale: CGFloat): void;

  endPoint1(): FBPoint;
  controlPoint1(): FBPoint;
  controlPoint2(): FBPoint;
  endPoint2(): FBPoint;
  isStraightLine(): boolean;
  bounds(): FBRect;
  boundingRect(): FBRect;
  flatness(): FBFloat;
  point(): boolean;
  isPointOrHorizontalLine(): boolean;
  isStartHorizontal(): boolean;
  isEndHorizontal(): boolean;
  isHorizontalLine(): boolean;
  looksLikeLine(): boolean;
  contour(): FBBezierContour;
  setContour(contour: FBBezierContour): void;
  index(): NSUInteger;
  setIndex(index: NSUInteger): void;
  startShared(): boolean;
  setStartShared(startShared: boolean): void;
  next(): FBBezierCurve;
  previous(): FBBezierCurve;
  nextNonpoint(): FBBezierCurve;
  previousNonpoint(): FBBezierCurve;
  nextNonpointNonHorizontalLine(): FBBezierCurve;
  previousNonpointNonHorizontalLine(): FBBezierCurve;
  firstCrossing(): FBEdgeCrossing;
  lastCrossing(): FBEdgeCrossing;
  crossings(): NSArray<any>;
  hasCrossings(): boolean;
}
declare const FBBezierCurve: {
  alloc(): FBBezierCurveUninitialized;
  class(): FBBezierCurve;  bezierCurvesFromBezierPath(path: FBBezierPath): NSArray<any>;
  bezierCurveWithLineStartPoint_endPoint(startPoint: FBPoint, endPoint: FBPoint): FBBezierCurve;
  bezierCurveWithEndPoint1_controlPoint1_controlPoint2_endPoint2(endPoint1: FBPoint, controlPoint1: FBPoint, controlPoint2: FBPoint, endPoint2: FBPoint): FBBezierCurve;

}

