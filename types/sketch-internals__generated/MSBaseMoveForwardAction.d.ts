interface MSBaseMoveForwardActionUninitialized<InitializedType = MSBaseMoveForwardAction> extends MSBaseMoveActionUninitialized<MSBaseMoveForwardAction> {}

interface MSBaseMoveForwardAction extends MSBaseMoveAction {
}

declare const MSBaseMoveForwardAction: {
  alloc(): MSBaseMoveForwardActionUninitialized;
  class(): MSBaseMoveForwardAction;
}

