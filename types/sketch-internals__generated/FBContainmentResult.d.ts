interface FBContainmentResultUninitialized<InitializedType = FBContainmentResult> extends NSObjectUninitialized<FBContainmentResult> {
  initWithTestContour_inGraph_evenOddInside_nonZeroInside_testEdge_intersections(testContour: FBBezierContour, graph: FBBezierGraph, evenOdd: FBContourInside, nonZero: FBContourInside, testEdge: FBBezierCurve | null, intersections: NSArray<any> | any[]): InitializedType;
}
interface FBContainmentResult extends NSObject {

  evenOdd(): FBContourInside;
  nonZero(): FBContourInside;
  testEdge(): FBBezierCurve;
  intersections(): NSArray<any>;
  testContour(): FBBezierContour;
  graph(): FBBezierGraph;
  container(): FBBezierContour;
}
declare const FBContainmentResult: {
  alloc(): FBContainmentResultUninitialized;
  class(): FBContainmentResult;
}

