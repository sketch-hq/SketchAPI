interface FBBezierGraphUninitialized<InitializedType = FBBezierGraph> extends NSObjectUninitialized<FBBezierGraph> {
  initWithBezierPath(path: FBBezierPath): InitializedType;
}
interface FBBezierGraph extends NSObject {
  unionWithBezierGraph(graph: FBBezierGraph): FBBezierGraph;
  intersectWithBezierGraph(graph: FBBezierGraph): FBBezierGraph;
  differenceWithBezierGraph(graph: FBBezierGraph): FBBezierGraph;
  xorWithBezierGraph(graph: FBBezierGraph): FBBezierGraph;
  noneWithBezierGraph(graph: FBBezierGraph): FBBezierGraph;
  bezierPath(): FBBezierPath;
  bezierPathWithClass(bezierClass: any): any;
  closestLocationToPoint(point: FBPoint): FBCurveLocation;
  closestCrossingToPoint(point: FBPoint): FBEdgeCrossing;
  convertToNoneZeroWindingRule(): FBBezierGraph;
  convertToEvenOddWindingRule(): FBBezierGraph;
  bezierGraphBySplittingSelfCrossingContours(singleCrossingContoursOut: NSMutableArray<any> | any[]): FBBezierGraph;
  bezierGraphByTrimmingSelfCrossingContours(): FBBezierGraph;
  bezierGraphWithTransform(t: CGAffineTransform): FBBezierGraph;
  bezierGraphByMergingLinearRunsInContours(): FBBezierGraph;
  bezierGraphWithClockwiseFillsAnticlockwiseHoles(): FBBezierGraph;
  containmentResultForContour(testContour: FBBezierContour): FBContainmentResult;
  debuggingInsertCrossingsForUnionWithBezierGraph(otherGraph: FBBezierGraph): void;
  debuggingInsertCrossingsForIntersectWithBezierGraph(otherGraph: FBBezierGraph): void;
  debuggingInsertCrossingsForDifferenceWithBezierGraph(otherGraph: FBBezierGraph): void;
  debuggingInsertIntersectionsWithBezierGraph(otherGraph: FBBezierGraph): void;
  debuggingInsertCrossingsForFillConversion(): void;
  debugPathForContainmentOfContour(contour: FBBezierContour): FBBezierPath;
  debugPathForContainmentOfContour_transform(testContour: FBBezierContour, transform: CGAffineTransform): FBBezierPath;
  debugPathForJointsOfContour(testContour: FBBezierContour): FBBezierPath;
  debugFindCurvesThatShouldIntersectWith_withBlock(otherGraph: FBBezierGraph, block: Block): void;

  nonEmptyContours(): NSArray<any>;
  contours(): NSArray<any>;
  bounds(): FBRect;
  CGPath(): CGPathRef;
}
declare const FBBezierGraph: {
  alloc(): FBBezierGraphUninitialized;
  class(): FBBezierGraph;  bezierGraph(): FBBezierGraph;
  bezierGraphWithCGPath(path: CGPathRef): FBBezierGraph;
  bezierGraphWithBezierPath(path: FBBezierPath): FBBezierGraph;
  bezierGraphWithContours(contours: NSArray<any> | any[]): FBBezierGraph;

}

