interface MSMoveToFrontActionUninitialized<InitializedType = MSMoveToFrontAction> extends MSBaseMoveForwardActionUninitialized<MSMoveToFrontAction> {}
interface MSMoveToFrontAction extends MSBaseMoveForwardAction {
  moveToFront(sender: any): IBAction;
}
declare const MSMoveToFrontAction: {
  alloc(): MSMoveToFrontActionUninitialized;
  class(): MSMoveToFrontAction;
}

