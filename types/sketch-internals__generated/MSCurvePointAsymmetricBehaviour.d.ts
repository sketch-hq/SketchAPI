interface MSCurvePointAsymmetricBehaviourUninitialized<InitializedType = MSCurvePointAsymmetricBehaviour> extends MSCurvePointBehaviourUninitialized<MSCurvePointAsymmetricBehaviour> {}

interface MSCurvePointAsymmetricBehaviour extends MSCurvePointBehaviour {
}

declare const MSCurvePointAsymmetricBehaviour: {
  alloc(): MSCurvePointAsymmetricBehaviourUninitialized;
  class(): MSCurvePointAsymmetricBehaviour;
  didAssignBehaviorToHandle_ofPoint_previousMode(handle: MSPointType, point: MSCurvePoint, oldMode: MSCurveMode): void;
  curveFromChangedInPoint(point: MSCurvePoint): void;
  curveToChangedInPoint(point: MSCurvePoint): void;
}

