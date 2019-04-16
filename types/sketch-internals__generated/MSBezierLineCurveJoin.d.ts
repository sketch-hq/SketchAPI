interface MSBezierLineCurveJoinUninitialized<InitializedType = MSBezierLineCurveJoin> extends MSBezierJoinUninitialized<MSBezierLineCurveJoin> {}

interface MSBezierLineCurveJoin extends MSBezierJoin {
}

declare const MSBezierLineCurveJoin: {
  alloc(): MSBezierLineCurveJoinUninitialized;
  class(): MSBezierLineCurveJoin;
  joinWithSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): MSBezierLineCurveJoin;
  joinWithSegment1_segment2_strategy(segment1: MSBezierSegment, segment2: MSBezierSegment, strategy: MSBezierJoinStrategy): MSBezierLineCurveJoin;
  segmentsByJoiningSegment1_segment2(segment1: MSBezierSegment, segment2: MSBezierSegment): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

