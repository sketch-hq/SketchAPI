interface MSCurvePointStraightBehaviourUninitialized<InitializedType = MSCurvePointStraightBehaviour> extends MSCurvePointBehaviourUninitialized<MSCurvePointStraightBehaviour> {}

interface MSCurvePointStraightBehaviour extends MSCurvePointBehaviour {
}

declare const MSCurvePointStraightBehaviour: {
  alloc(): MSCurvePointStraightBehaviourUninitialized;
  class(): MSCurvePointStraightBehaviour;
  didAssignBehaviorToHandle_ofPoint_previousMode(handle: MSPointType, point: MSCurvePoint, oldMode: MSCurveMode): void;
  curveFromChangedInPoint(point: MSCurvePoint): void;
  curveToChangedInPoint(point: MSCurvePoint): void;
  accessInstanceVariablesDirectly(): boolean;

}

