interface MSCurvePointMirroredBehaviourUninitialized<InitializedType = MSCurvePointMirroredBehaviour> extends MSCurvePointBehaviourUninitialized<MSCurvePointMirroredBehaviour> {}
interface MSCurvePointMirroredBehaviour extends MSCurvePointBehaviour {
}
declare const MSCurvePointMirroredBehaviour: {
  alloc(): MSCurvePointMirroredBehaviourUninitialized;
  class(): MSCurvePointMirroredBehaviour;
}

