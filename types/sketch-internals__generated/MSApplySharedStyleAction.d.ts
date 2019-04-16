interface MSApplySharedStyleActionUninitialized<InitializedType = MSApplySharedStyleAction> extends MSDocumentActionUninitialized<MSApplySharedStyleAction> {}

interface MSApplySharedStyleAction extends MSDocumentAction {
}

declare const MSApplySharedStyleAction: {
  alloc(): MSApplySharedStyleActionUninitialized;
  class(): MSApplySharedStyleAction;
}

