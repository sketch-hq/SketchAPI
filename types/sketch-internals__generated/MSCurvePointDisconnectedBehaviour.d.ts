interface MSCurvePointDisconnectedBehaviourUninitialized<InitializedType = MSCurvePointDisconnectedBehaviour> extends MSCurvePointBehaviourUninitialized<MSCurvePointDisconnectedBehaviour> {}
interface MSCurvePointDisconnectedBehaviour extends MSCurvePointBehaviour {
}
declare const MSCurvePointDisconnectedBehaviour: {
  alloc(): MSCurvePointDisconnectedBehaviourUninitialized;
  class(): MSCurvePointDisconnectedBehaviour;
}

