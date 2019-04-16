interface MSRotateCounterclockwiseActionUninitialized<InitializedType = MSRotateCounterclockwiseAction> extends MSEventHandlerActionUninitialized<MSRotateCounterclockwiseAction> {}
interface MSRotateCounterclockwiseAction extends MSEventHandlerAction {
  rotate90CC(sender: any): IBAction;
}
declare const MSRotateCounterclockwiseAction: {
  alloc(): MSRotateCounterclockwiseActionUninitialized;
  class(): MSRotateCounterclockwiseAction;
}

