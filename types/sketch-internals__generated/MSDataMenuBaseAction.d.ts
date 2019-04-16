interface MSDataMenuBaseActionUninitialized<InitializedType = MSDataMenuBaseAction> extends MSDocumentActionUninitialized<MSDataMenuBaseAction> {}

interface MSDataMenuBaseAction extends MSDocumentAction {
}

declare const MSDataMenuBaseAction: {
  alloc(): MSDataMenuBaseActionUninitialized;
  class(): MSDataMenuBaseAction;
}

