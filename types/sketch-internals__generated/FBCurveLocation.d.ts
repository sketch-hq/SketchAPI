interface FBCurveLocationUninitialized<InitializedType = FBCurveLocation> extends NSObjectUninitialized<FBCurveLocation> {
  initWithEdge_parameter_distance(edge: FBBezierCurve, parameter: FBFloat, distance: FBFloat): InitializedType;
}
interface FBCurveLocation extends NSObject {

  graph(): FBBezierGraph;
  setGraph(graph: FBBezierGraph): void;
  contour(): FBBezierContour;
  setContour(contour: FBBezierContour): void;
  edge(): FBBezierCurve;
  parameter(): FBFloat;
  distance(): FBFloat;
}
declare const FBCurveLocation: {
  alloc(): FBCurveLocationUninitialized;
  class(): FBCurveLocation;  curveLocationWithEdge_parameter_distance(edge: FBBezierCurve, parameter: FBFloat, distance: FBFloat): FBCurveLocation;

}

