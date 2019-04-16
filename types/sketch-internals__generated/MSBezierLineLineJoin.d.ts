interface MSBezierLineLineJoinUninitialized<InitializedType = MSBezierLineLineJoin> extends MSBezierJoinUninitialized<MSBezierLineLineJoin> {}
interface MSBezierLineLineJoin extends MSBezierJoin {
}
declare const MSBezierLineLineJoin: {
  alloc(): MSBezierLineLineJoinUninitialized;
  class(): MSBezierLineLineJoin;
}

