interface MSCurveModeMirroredActionUninitialized<InitializedType = MSCurveModeMirroredAction> extends MSCurveModeAdjustActionUninitialized<MSCurveModeMirroredAction> {}
interface MSCurveModeMirroredAction extends MSCurveModeAdjustAction {
}
declare const MSCurveModeMirroredAction: {
  alloc(): MSCurveModeMirroredActionUninitialized;
  class(): MSCurveModeMirroredAction;
}

