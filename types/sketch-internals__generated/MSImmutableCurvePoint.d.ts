interface MSImmutableCurvePointUninitialized<InitializedType = MSImmutableCurvePoint> extends _MSImmutableCurvePointUninitialized<MSImmutableCurvePoint> {}
interface MSImmutableCurvePoint extends _MSImmutableCurvePoint, IMSCurvePoint {

  isStraight(): boolean;
  isRounded(): boolean;
  isEffectivelyStraight(): boolean;
}
declare const MSImmutableCurvePoint: {
  alloc(): MSImmutableCurvePointUninitialized;
  class(): MSImmutableCurvePoint;
}

