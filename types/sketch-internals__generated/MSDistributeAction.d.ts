interface MSDistributeActionUninitialized<InitializedType = MSDistributeAction> extends MSDocumentActionUninitialized<MSDistributeAction> {}
interface MSDistributeAction extends MSDocumentAction {
  distributeAlongAxis(axis: BCAxis): void;
}
declare const MSDistributeAction: {
  alloc(): MSDistributeActionUninitialized;
  class(): MSDistributeAction;
}

