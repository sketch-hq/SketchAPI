interface MSMoveToBackActionUninitialized<InitializedType = MSMoveToBackAction> extends MSBaseMoveBackwardActionUninitialized<MSMoveToBackAction> {}

interface MSMoveToBackAction extends MSBaseMoveBackwardAction {
  moveToBack(sender: any): IBAction;
}

declare const MSMoveToBackAction: {
  alloc(): MSMoveToBackActionUninitialized;
  class(): MSMoveToBackAction;
}

