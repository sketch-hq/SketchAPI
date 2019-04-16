interface MSRotateActionUninitialized<InitializedType = MSRotateAction> extends MSEventHandlerActionUninitialized<MSRotateAction> {}
interface MSRotateAction extends MSEventHandlerAction {
  rotate(sender: any): IBAction;
}
declare const MSRotateAction: {
  alloc(): MSRotateActionUninitialized;
  class(): MSRotateAction;
}

