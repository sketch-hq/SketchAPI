interface MSBezierCurveCurveJoinUninitialized<InitializedType = MSBezierCurveCurveJoin> extends MSBezierLineCurveJoinUninitialized<MSBezierCurveCurveJoin> {}
interface MSBezierCurveCurveJoin extends MSBezierLineCurveJoin {
}
declare const MSBezierCurveCurveJoin: {
  alloc(): MSBezierCurveCurveJoinUninitialized;
  class(): MSBezierCurveCurveJoin;
}

