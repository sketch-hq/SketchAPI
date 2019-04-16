interface MSClosePathActionUninitialized<InitializedType = MSClosePathAction> extends MSDocumentActionUninitialized<MSClosePathAction> {}

interface MSClosePathAction extends MSDocumentAction {
  closePath(sender: any): IBAction;
}

declare const MSClosePathAction: {
  alloc(): MSClosePathActionUninitialized;
  class(): MSClosePathAction;
}

