interface MSBackToInstanceActionUninitialized<InitializedType = MSBackToInstanceAction> extends MSDocumentActionUninitialized<MSBackToInstanceAction> {}
interface MSBackToInstanceAction extends MSDocumentAction {
  backToInstance(sender: any): IBAction;
}
declare const MSBackToInstanceAction: {
  alloc(): MSBackToInstanceActionUninitialized;
  class(): MSBackToInstanceAction;
}

