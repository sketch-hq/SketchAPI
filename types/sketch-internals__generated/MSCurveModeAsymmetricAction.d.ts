interface MSCurveModeAsymmetricActionUninitialized<InitializedType = MSCurveModeAsymmetricAction> extends MSCurveModeAdjustActionUninitialized<MSCurveModeAsymmetricAction> {}
interface MSCurveModeAsymmetricAction extends MSCurveModeAdjustAction {
}
declare const MSCurveModeAsymmetricAction: {
  alloc(): MSCurveModeAsymmetricActionUninitialized;
  class(): MSCurveModeAsymmetricAction;
}

