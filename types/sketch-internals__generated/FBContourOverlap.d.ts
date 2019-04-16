interface FBContourOverlapUninitialized<InitializedType = FBContourOverlap> extends NSObjectUninitialized<FBContourOverlap> {}
interface FBContourOverlap extends NSObject {
  addOverlap_forEdge1_edge2(range: FBBezierIntersectRange, edge1: FBBezierCurve, edge2: FBBezierCurve): void;
  runsWithBlock(block: Block): void;
  reset(): void;
  isComplete(): boolean;
  isEmpty(): boolean;
  isBetweenContour_andContour(contour1: FBBezierContour, contour2: FBBezierContour): boolean;
  doesContainCrossing(crossing: FBEdgeCrossing): boolean;
  doesContainParameter_onEdge(parameter: FBFloat, edge: FBBezierCurve): boolean;

  contour1(): FBBezierContour;
  contour2(): FBBezierContour;
  overlapRuns(): NSArray<any>;
}
declare const FBContourOverlap: {
  alloc(): FBContourOverlapUninitialized;
  class(): FBContourOverlap;  contourOverlap(): FBContourOverlap;

}

