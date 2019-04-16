interface MSReplaceWithSymbolActionUninitialized<InitializedType = MSReplaceWithSymbolAction> extends MSSharedSymbolActionUninitialized<MSReplaceWithSymbolAction> {}
interface MSReplaceWithSymbolAction extends MSSharedSymbolAction {
}
declare const MSReplaceWithSymbolAction: {
  alloc(): MSReplaceWithSymbolActionUninitialized;
  class(): MSReplaceWithSymbolAction;
}

