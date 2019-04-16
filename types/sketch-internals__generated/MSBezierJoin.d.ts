interface MSBezierJoinUninitialized<InitializedType = MSBezierJoin> extends NSObjectUninitialized<MSBezierJoin> {
  initWithSegment1_segment2_joinedSegments(segment1: MSBezierSegment, segment2: MSBezierSegment, joinedSegments: NSArray<any> | any[] | null): InitializedType;
}
interface MSBezierJoin extends NSObject {

  segment1(): MSBezierSegment;
  segment2(): MSBezierSegment;
  joinedSegments(): NSArray<any>;
}
declare const MSBezierJoin: {
  alloc(): MSBezierJoinUninitialized;
  class(): MSBezierJoin;  joinWithSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): MSBezierJoin;
  joinWithSegment1_segment2_strategy(segment1: MSBezierSegment, segment2: MSBezierSegment, strategy: MSBezierJoinStrategy): MSBezierJoin;
  segmentsByJoiningSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): NSArray<any>;

}

