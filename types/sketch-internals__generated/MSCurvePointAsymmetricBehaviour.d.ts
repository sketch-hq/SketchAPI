interface MSCurvePointAsymmetricBehaviourUninitialized<InitializedType = MSCurvePointAsymmetricBehaviour> extends MSCurvePointBehaviourUninitialized<MSCurvePointAsymmetricBehaviour> {}
interface MSCurvePointAsymmetricBehaviour extends MSCurvePointBehaviour {
}
declare const MSCurvePointAsymmetricBehaviour: {
  alloc(): MSCurvePointAsymmetricBehaviourUninitialized;
  class(): MSCurvePointAsymmetricBehaviour;
}

