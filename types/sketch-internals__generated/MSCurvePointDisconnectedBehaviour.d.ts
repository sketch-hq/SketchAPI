interface MSCurvePointDisconnectedBehaviourUninitialized<InitializedType = MSCurvePointDisconnectedBehaviour> extends MSCurvePointBehaviourUninitialized<MSCurvePointDisconnectedBehaviour> {}

interface MSCurvePointDisconnectedBehaviour extends MSCurvePointBehaviour {
}

declare const MSCurvePointDisconnectedBehaviour: {
  alloc(): MSCurvePointDisconnectedBehaviourUninitialized;
  class(): MSCurvePointDisconnectedBehaviour;
  didAssignBehaviorToHandle_ofPoint_previousMode(handle: MSPointType, point: MSCurvePoint, oldMode: MSCurveMode): void;
  curveFromChangedInPoint(point: MSCurvePoint): void;
  curveToChangedInPoint(point: MSCurvePoint): void;
  accessInstanceVariablesDirectly(): boolean;

}

