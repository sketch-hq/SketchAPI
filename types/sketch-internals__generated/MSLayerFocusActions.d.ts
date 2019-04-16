interface MSLayerFocusActionsUninitialized<InitializedType = MSLayerFocusActions> extends MSActionGroupUninitialized<MSLayerFocusActions> {}
interface MSLayerFocusActions extends MSActionGroup {
}
declare const MSLayerFocusActions: {
  alloc(): MSLayerFocusActionsUninitialized;
  class(): MSLayerFocusActions;
}

