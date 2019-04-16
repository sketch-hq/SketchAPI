interface MSAlignCenterActionUninitialized<InitializedType = MSAlignCenterAction> extends MSBaseAlignActionUninitialized<MSAlignCenterAction> {}
interface MSAlignCenterAction extends MSBaseAlignAction {
}
declare const MSAlignCenterAction: {
  alloc(): MSAlignCenterActionUninitialized;
  class(): MSAlignCenterAction;
}

