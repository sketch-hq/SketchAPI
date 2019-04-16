interface MSCurveModeDisconnectedActionUninitialized<InitializedType = MSCurveModeDisconnectedAction> extends MSCurveModeAdjustActionUninitialized<MSCurveModeDisconnectedAction> {}

interface MSCurveModeDisconnectedAction extends MSCurveModeAdjustAction {
}

declare const MSCurveModeDisconnectedAction: {
  alloc(): MSCurveModeDisconnectedActionUninitialized;
  class(): MSCurveModeDisconnectedAction;
}

