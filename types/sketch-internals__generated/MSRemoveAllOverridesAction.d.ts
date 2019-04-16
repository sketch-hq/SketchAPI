interface MSRemoveAllOverridesActionUninitialized<InitializedType = MSRemoveAllOverridesAction> extends MSDocumentActionUninitialized<MSRemoveAllOverridesAction> {}
interface MSRemoveAllOverridesAction extends MSDocumentAction {
  removeAllOverridesFromSelection(sender: any): IBAction;
}
declare const MSRemoveAllOverridesAction: {
  alloc(): MSRemoveAllOverridesActionUninitialized;
  class(): MSRemoveAllOverridesAction;
}

