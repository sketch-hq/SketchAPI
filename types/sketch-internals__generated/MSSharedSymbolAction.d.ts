interface MSSharedSymbolActionUninitialized<InitializedType = MSSharedSymbolAction> extends MSSharedObjectActionUninitialized<MSSharedSymbolAction> {}
interface MSSharedSymbolAction extends MSSharedObjectAction {

  menuBuilder(): MSForeignObjectMenuBuilder;
}
declare const MSSharedSymbolAction: {
  alloc(): MSSharedSymbolActionUninitialized;
  class(): MSSharedSymbolAction;
}

