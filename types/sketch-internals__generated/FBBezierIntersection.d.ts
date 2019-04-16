interface FBBezierIntersectionUninitialized<InitializedType = FBBezierIntersection> extends NSObjectUninitialized<FBBezierIntersection> {
  initWithCurve1_parameter1_curve2_parameter2(curve1: FBBezierCurve, parameter1: FBFloat, curve2: FBBezierCurve, parameter2: FBFloat): InitializedType;
}
interface FBBezierIntersection extends NSObject {
  enumerateAliasesWithBlock(block: Block): void;
  curve1Direction(): FBPoint;
  curve2Direction(): FBPoint;
  curve1WindingCount(): NSInteger;
  curve2WindingCount(): NSInteger;

  location(): FBPoint;
  curve1(): FBBezierCurve;
  parameter1(): FBFloat;
  curve2(): FBBezierCurve;
  parameter2(): FBFloat;
  tangent(): boolean;
  curve1LeftBezier(): FBBezierCurve;
  curve1RightBezier(): FBBezierCurve;
  curve2LeftBezier(): FBBezierCurve;
  curve2RightBezier(): FBBezierCurve;
  atStartOfCurve1(): boolean;
  atStopOfCurve1(): boolean;
  atStartOfCurve2(): boolean;
  atStopOfCurve2(): boolean;
  isAtExactStartOfCurve1(): boolean;
  isAtExactStopOfCurve1(): boolean;
  isAtExactStartOfCurve2(): boolean;
  isAtExactStopOfCurve2(): boolean;
  atEndPointOfCurve1(): boolean;
  atEndPointOfCurve2(): boolean;
  atEndPointOfCurve(): boolean;
}
declare const FBBezierIntersection: {
  alloc(): FBBezierIntersectionUninitialized;
  class(): FBBezierIntersection;  intersectionWithCurve1_parameter1_curve2_parameter2(curve1: FBBezierCurve, parameter1: FBFloat, curve2: FBBezierCurve, parameter2: FBFloat): FBBezierIntersection;

}

