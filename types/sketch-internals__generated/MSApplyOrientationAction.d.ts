interface MSApplyOrientationActionUninitialized<InitializedType = MSApplyOrientationAction> extends MSDocumentActionUninitialized<MSApplyOrientationAction> {}
interface MSApplyOrientationAction extends MSDocumentAction {
}
declare const MSApplyOrientationAction: {
  alloc(): MSApplyOrientationActionUninitialized;
  class(): MSApplyOrientationAction;
}

