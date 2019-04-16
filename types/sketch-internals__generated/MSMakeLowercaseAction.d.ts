interface MSMakeLowercaseActionUninitialized<InitializedType = MSMakeLowercaseAction> extends MSTextTransformActionUninitialized<MSMakeLowercaseAction> {}
interface MSMakeLowercaseAction extends MSTextTransformAction {
}
declare const MSMakeLowercaseAction: {
  alloc(): MSMakeLowercaseActionUninitialized;
  class(): MSMakeLowercaseAction;
}

