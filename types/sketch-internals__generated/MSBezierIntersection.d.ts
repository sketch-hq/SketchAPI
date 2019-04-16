interface MSBezierIntersectionUninitialized<InitializedType = MSBezierIntersection> extends NSObjectUninitialized<MSBezierIntersection> {
  initWithSegment1_segment2_segment1Offset_segment2Offset(segment1: MSBezierSegment, segment2: MSBezierSegment, segment1Offset: CGFloat, segment2Offset: CGFloat): InitializedType;
}
interface MSBezierIntersection extends NSObject {

  segment1(): MSBezierSegment;
  segment2(): MSBezierSegment;
  segment1Offset(): CGFloat;
  segment2Offset(): CGFloat;
}
declare const MSBezierIntersection: {
  alloc(): MSBezierIntersectionUninitialized;
  class(): MSBezierIntersection;  intersectionWithSegment1_segment2_segment1Offset_segment2Offset(segment1: MSBezierSegment, segment2: MSBezierSegment, segment1Offset: CGFloat, segment2Offset: CGFloat): MSBezierIntersection;

}

