interface MSBaseInsertActionUninitialized<InitializedType = MSBaseInsertAction> extends MSDocumentActionUninitialized<MSBaseInsertAction> {}

interface MSBaseInsertAction extends MSDocumentAction {
}

declare const MSBaseInsertAction: {
  alloc(): MSBaseInsertActionUninitialized;
  class(): MSBaseInsertAction;
}

