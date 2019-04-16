interface MSCurvePointMirroredBehaviourUninitialized<InitializedType = MSCurvePointMirroredBehaviour> extends MSCurvePointBehaviourUninitialized<MSCurvePointMirroredBehaviour> {}

interface MSCurvePointMirroredBehaviour extends MSCurvePointBehaviour {
}

declare const MSCurvePointMirroredBehaviour: {
  alloc(): MSCurvePointMirroredBehaviourUninitialized;
  class(): MSCurvePointMirroredBehaviour;
  didAssignBehaviorToHandle_ofPoint_previousMode(handle: MSPointType, point: MSCurvePoint, oldMode: MSCurveMode): void;
  curveFromChangedInPoint(point: MSCurvePoint): void;
  curveToChangedInPoint(point: MSCurvePoint): void;
  accessInstanceVariablesDirectly(): boolean;

}

