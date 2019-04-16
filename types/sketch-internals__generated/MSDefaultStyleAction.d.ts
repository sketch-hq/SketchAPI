interface MSDefaultStyleActionUninitialized<InitializedType = MSDefaultStyleAction> extends MSDocumentActionUninitialized<MSDefaultStyleAction> {}
interface MSDefaultStyleAction extends MSDocumentAction {
  setStyleAsDefault(sender: any): IBAction;
}
declare const MSDefaultStyleAction: {
  alloc(): MSDefaultStyleActionUninitialized;
  class(): MSDefaultStyleAction;
}

