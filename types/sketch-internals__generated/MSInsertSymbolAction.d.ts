interface MSInsertSymbolActionUninitialized<InitializedType = MSInsertSymbolAction> extends MSSharedSymbolActionUninitialized<MSInsertSymbolAction> {}
interface MSInsertSymbolAction extends MSSharedSymbolAction {
}
declare const MSInsertSymbolAction: {
  alloc(): MSInsertSymbolActionUninitialized;
  class(): MSInsertSymbolAction;
}

