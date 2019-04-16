interface MSCurvePointStraightBehaviourUninitialized<InitializedType = MSCurvePointStraightBehaviour> extends MSCurvePointBehaviourUninitialized<MSCurvePointStraightBehaviour> {}
interface MSCurvePointStraightBehaviour extends MSCurvePointBehaviour {
}
declare const MSCurvePointStraightBehaviour: {
  alloc(): MSCurvePointStraightBehaviourUninitialized;
  class(): MSCurvePointStraightBehaviour;
}

