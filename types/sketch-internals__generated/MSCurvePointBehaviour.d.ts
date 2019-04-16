interface MSCurvePointBehaviourUninitialized<InitializedType = MSCurvePointBehaviour> extends NSObjectUninitialized<MSCurvePointBehaviour> {}
interface MSCurvePointBehaviour extends NSObject {
}
declare const MSCurvePointBehaviour: {
  alloc(): MSCurvePointBehaviourUninitialized;
  class(): MSCurvePointBehaviour;  didAssignBehaviorToHandle_ofPoint_previousMode(handle: MSPointType, point: MSCurvePoint, oldMode: MSCurveMode): void;
  curveFromChangedInPoint(point: MSCurvePoint): void;
  curveToChangedInPoint(point: MSCurvePoint): void;

}

