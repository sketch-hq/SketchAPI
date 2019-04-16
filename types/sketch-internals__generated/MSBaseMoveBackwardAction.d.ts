interface MSBaseMoveBackwardActionUninitialized<InitializedType = MSBaseMoveBackwardAction> extends MSBaseMoveActionUninitialized<MSBaseMoveBackwardAction> {}
interface MSBaseMoveBackwardAction extends MSBaseMoveAction {
}
declare const MSBaseMoveBackwardAction: {
  alloc(): MSBaseMoveBackwardActionUninitialized;
  class(): MSBaseMoveBackwardAction;
}

