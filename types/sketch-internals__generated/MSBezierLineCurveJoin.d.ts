interface MSBezierLineCurveJoinUninitialized<InitializedType = MSBezierLineCurveJoin> extends MSBezierJoinUninitialized<MSBezierLineCurveJoin> {}
interface MSBezierLineCurveJoin extends MSBezierJoin {
}
declare const MSBezierLineCurveJoin: {
  alloc(): MSBezierLineCurveJoinUninitialized;
  class(): MSBezierLineCurveJoin;
}

