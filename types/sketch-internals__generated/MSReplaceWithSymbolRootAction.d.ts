interface MSReplaceWithSymbolRootActionUninitialized<InitializedType = MSReplaceWithSymbolRootAction> extends MSSharedSymbolActionUninitialized<MSReplaceWithSymbolRootAction> {}
interface MSReplaceWithSymbolRootAction extends MSSharedSymbolAction {
  replaceWithSymbolRoot(sender: any): IBAction;
}
declare const MSReplaceWithSymbolRootAction: {
  alloc(): MSReplaceWithSymbolRootActionUninitialized;
  class(): MSReplaceWithSymbolRootAction;
}

