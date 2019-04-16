interface MSRotateClockwiseActionUninitialized<InitializedType = MSRotateClockwiseAction> extends MSEventHandlerActionUninitialized<MSRotateClockwiseAction> {}
interface MSRotateClockwiseAction extends MSEventHandlerAction {
  rotate90C(sender: any): IBAction;
}
declare const MSRotateClockwiseAction: {
  alloc(): MSRotateClockwiseActionUninitialized;
  class(): MSRotateClockwiseAction;
}

