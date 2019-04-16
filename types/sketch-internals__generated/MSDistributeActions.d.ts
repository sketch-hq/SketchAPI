interface MSDistributeActionsUninitialized<InitializedType = MSDistributeActions> extends MSActionGroupUninitialized<MSDistributeActions> {}
interface MSDistributeActions extends MSActionGroup {
}
declare const MSDistributeActions: {
  alloc(): MSDistributeActionsUninitialized;
  class(): MSDistributeActions;
}

