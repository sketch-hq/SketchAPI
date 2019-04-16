interface MSToggleBorderActionUninitialized<InitializedType = MSToggleBorderAction> extends MSToggleStylePartActionUninitialized<MSToggleBorderAction> {}
interface MSToggleBorderAction extends MSToggleStylePartAction {
}
declare const MSToggleBorderAction: {
  alloc(): MSToggleBorderActionUninitialized;
  class(): MSToggleBorderAction;
}

