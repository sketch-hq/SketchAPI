interface MSBezierFilletUninitialized<InitializedType = MSBezierFillet> extends NSObjectUninitialized<MSBezierFillet> {
  initWithSegment1_segment2_segment1Offset_segment2Offset_arcEndPoint1_arcEndPoint2_arcCenter_arcRadius(segment1: MSBezierSegment, segment2: MSBezierSegment, segment1Offset: CGFloat, segment2Offset: CGFloat, arcEndPoint1: CGPoint, arcEndPoint2: CGPoint, arcCenter: CGPoint, arcRadius: CGFloat): InitializedType;
}
interface MSBezierFillet extends NSObject {
  reversedFillet(): MSBezierFillet;
  arcSegments(): NSArray<any>;
  addArcToBezierPath_orCGPath(bezierPath: NSBezierPath, pathRef: CGMutablePathRef): void;

  segment1(): MSBezierSegment;
  segment2(): MSBezierSegment;
  segment1Offset(): CGFloat;
  segment2Offset(): CGFloat;
  arcRadius(): CGFloat;
  arcEndPoint1(): CGPoint;
  arcEndPoint2(): CGPoint;
  arcCenter(): CGPoint;
  startAngle(): CGFloat;
  endAngle(): CGFloat;
  clockwise(): boolean;
}
declare const MSBezierFillet: {
  alloc(): MSBezierFilletUninitialized;
  class(): MSBezierFillet;  bezierFilletWithSegment1_segment2_segment1Offset(segment1: MSBezierSegment, segment2: MSBezierSegment, segment1Offset: CGFloat): MSBezierFillet;
  bezierFilletWithSegment1_segment2_filletRadius(segment1: MSBezierSegment, segment2: MSBezierSegment, filletRadius: CGFloat): MSBezierFillet;
  zeroRadiusFilletWithSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): MSBezierFillet;

}

