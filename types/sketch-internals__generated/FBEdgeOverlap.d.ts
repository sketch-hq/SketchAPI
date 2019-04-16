interface FBEdgeOverlapUninitialized<InitializedType = FBEdgeOverlap> extends NSObjectUninitialized<FBEdgeOverlap> {}
interface FBEdgeOverlap extends NSObject {

  range(): FBBezierIntersectRange;
  edge1(): FBBezierCurve;
  edge2(): FBBezierCurve;
}
declare const FBEdgeOverlap: {
  alloc(): FBEdgeOverlapUninitialized;
  class(): FBEdgeOverlap;
}

