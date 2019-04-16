interface MSDuplicateActionUninitialized<InitializedType = MSDuplicateAction> extends MSDocumentActionUninitialized<MSDuplicateAction> {}

interface MSDuplicateAction extends MSDocumentAction {
}

declare const MSDuplicateAction: {
  alloc(): MSDuplicateActionUninitialized;
  class(): MSDuplicateAction;
}

