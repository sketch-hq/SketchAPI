interface MSEventHandlerActionUninitialized<InitializedType = MSEventHandlerAction> extends MSDocumentActionUninitialized<MSEventHandlerAction> {}
interface MSEventHandlerAction extends MSDocumentAction {
  eventHandlerClass(): any;
}
declare const MSEventHandlerAction: {
  alloc(): MSEventHandlerActionUninitialized;
  class(): MSEventHandlerAction;
}

