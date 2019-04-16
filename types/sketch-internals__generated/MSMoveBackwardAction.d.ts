interface MSMoveBackwardActionUninitialized<InitializedType = MSMoveBackwardAction> extends MSBaseMoveBackwardActionUninitialized<MSMoveBackwardAction> {}
interface MSMoveBackwardAction extends MSBaseMoveBackwardAction {
  moveBackward(sender: any): IBAction;
}
declare const MSMoveBackwardAction: {
  alloc(): MSMoveBackwardActionUninitialized;
  class(): MSMoveBackwardAction;
}

