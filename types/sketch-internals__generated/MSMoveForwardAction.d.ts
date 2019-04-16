interface MSMoveForwardActionUninitialized<InitializedType = MSMoveForwardAction> extends MSBaseMoveForwardActionUninitialized<MSMoveForwardAction> {}

interface MSMoveForwardAction extends MSBaseMoveForwardAction {
  moveForward(sender: any): IBAction;
}

declare const MSMoveForwardAction: {
  alloc(): MSMoveForwardActionUninitialized;
  class(): MSMoveForwardAction;
}

