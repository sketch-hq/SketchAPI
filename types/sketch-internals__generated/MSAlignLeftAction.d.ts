interface MSAlignLeftActionUninitialized<InitializedType = MSAlignLeftAction> extends MSBaseAlignActionUninitialized<MSAlignLeftAction> {}
interface MSAlignLeftAction extends MSBaseAlignAction {
}
declare const MSAlignLeftAction: {
  alloc(): MSAlignLeftActionUninitialized;
  class(): MSAlignLeftAction;
}

