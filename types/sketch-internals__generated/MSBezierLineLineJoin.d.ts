interface MSBezierLineLineJoinUninitialized<InitializedType = MSBezierLineLineJoin> extends MSBezierJoinUninitialized<MSBezierLineLineJoin> {}

interface MSBezierLineLineJoin extends MSBezierJoin {
}

declare const MSBezierLineLineJoin: {
  alloc(): MSBezierLineLineJoinUninitialized;
  class(): MSBezierLineLineJoin;
  joinWithSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): MSBezierLineLineJoin;
  joinWithSegment1_segment2_strategy(segment1: MSBezierSegment, segment2: MSBezierSegment, strategy: MSBezierJoinStrategy): MSBezierLineLineJoin;
  segmentsByJoiningSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

