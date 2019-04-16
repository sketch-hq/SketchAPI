interface MSChangePageActionUninitialized<InitializedType = MSChangePageAction> extends MSDocumentActionUninitialized<MSChangePageAction> {}

interface MSChangePageAction extends MSDocumentAction {
}

declare const MSChangePageAction: {
  alloc(): MSChangePageActionUninitialized;
  class(): MSChangePageAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

