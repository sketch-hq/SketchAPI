interface FBBezierIntersectRangeUninitialized<InitializedType = FBBezierIntersectRange> extends NSObjectUninitialized<FBBezierIntersectRange> {
  initWithCurve1_parameterRange1_curve2_parameterRange2_reversed(curve1: FBBezierCurve, parameterRange1: FBRange, curve2: FBBezierCurve, parameterRange2: FBRange, reversed: boolean): InitializedType;
}
interface FBBezierIntersectRange extends NSObject {
  merge(other: FBBezierIntersectRange): void;
  flip(): FBBezierIntersectRange;

  curve1(): FBBezierCurve;
  parameterRange1(): FBRange;
  curve1LeftBezier(): FBBezierCurve;
  curve1RightBezier(): FBBezierCurve;
  curve1OverlappingBezier(): FBBezierCurve;
  curve2(): FBBezierCurve;
  parameterRange2(): FBRange;
  reversed(): boolean;
  curve2LeftBezier(): FBBezierCurve;
  curve2RightBezier(): FBBezierCurve;
  curve2OverlappingBezier(): FBBezierCurve;
  startIntersection(): FBBezierIntersection;
  middleIntersection(): FBBezierIntersection;
  stopIntersection(): FBBezierIntersection;
  atStartOfCurve1(): boolean;
  atStopOfCurve1(): boolean;
  atStartOfCurve2(): boolean;
  atStopOfCurve2(): boolean;
}
declare const FBBezierIntersectRange: {
  alloc(): FBBezierIntersectRangeUninitialized;
  class(): FBBezierIntersectRange;  intersectRangeWithCurve1_parameterRange1_curve2_parameterRange2_reversed(curve1: FBBezierCurve, parameterRange1: FBRange, curve2: FBBezierCurve, parameterRange2: FBRange, reversed: boolean): FBBezierIntersectRange;

}

