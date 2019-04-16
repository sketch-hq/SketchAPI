interface MSBaseSharedObjectActionUninitialized<InitializedType = MSBaseSharedObjectAction> extends MSDocumentActionUninitialized<MSBaseSharedObjectAction> {}

interface MSBaseSharedObjectAction extends MSDocumentAction {
  performSharedObjectAction(): void;

  updater(): MSShareableObjectUpdater;
  needsRenameAfterAction(): boolean;
}

declare const MSBaseSharedObjectAction: {
  alloc(): MSBaseSharedObjectActionUninitialized;
  class(): MSBaseSharedObjectAction;
}

