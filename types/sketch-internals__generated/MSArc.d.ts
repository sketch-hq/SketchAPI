interface MSArcUninitialized<InitializedType = MSArc> extends NSObjectUninitialized<MSArc> {}
interface MSArc extends NSObject {
  absoluteErrorWithSegment(segment: MSBezierSegment): CGFloat;

  endPoint1(): CGPoint;
  endPoint2(): CGPoint;
  center(): CGPoint;
  radius(): CGFloat;
  clockwise(): boolean;
  startAngle(): CGFloat;
  endAngle(): CGFloat;
  startTangent(): BCLine;
  endTangent(): BCLine;
  startNormal(): CGVector;
  endNormal(): CGVector;
  isALine(): boolean;
}
declare const MSArc: {
  alloc(): MSArcUninitialized;
  class(): MSArc;  arcApproximationForSegment_maximumError(segment: MSBezierSegment, maximumError: CGFloat): NSArray<any>;
  arcApproximationForSegment_absoluteError(segment: MSBezierSegment, absoluteError: CGFloat): NSArray<any>;
  arcWithEndPoint1_endPoint2_center_clockwise(endPoint1: CGPoint, endPoint2: CGPoint, center: CGPoint, clockwise: boolean): MSArc;
  lineWithEndPoint1_endPoint2(endPoint1: CGPoint, endPoint2: CGPoint): MSArc;

}

