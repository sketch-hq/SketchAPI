interface MSCreateSymbolActionUninitialized<InitializedType = MSCreateSymbolAction> extends MSDocumentActionUninitialized<MSCreateSymbolAction> {}

interface MSCreateSymbolAction extends MSDocumentAction {
  createSymbolAction(sender: any): IBAction;
}

declare const MSCreateSymbolAction: {
  alloc(): MSCreateSymbolActionUninitialized;
  class(): MSCreateSymbolAction;
}

