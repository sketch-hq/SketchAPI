interface MSCurveModeStraightActionUninitialized<InitializedType = MSCurveModeStraightAction> extends MSCurveModeAdjustActionUninitialized<MSCurveModeStraightAction> {}

interface MSCurveModeStraightAction extends MSCurveModeAdjustAction {
}

declare const MSCurveModeStraightAction: {
  alloc(): MSCurveModeStraightActionUninitialized;
  class(): MSCurveModeStraightAction;
}

