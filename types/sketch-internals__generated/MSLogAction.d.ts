interface MSLogActionUninitialized<InitializedType = MSLogAction> extends MSActionUninitialized<MSLogAction> {}
interface MSLogAction extends MSAction, IMSPluginLogAction {
}
declare const MSLogAction: {
  alloc(): MSLogActionUninitialized;
  class(): MSLogAction;
}

