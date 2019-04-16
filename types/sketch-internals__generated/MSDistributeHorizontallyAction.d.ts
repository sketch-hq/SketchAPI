interface MSDistributeHorizontallyActionUninitialized<InitializedType = MSDistributeHorizontallyAction> extends MSDistributeActionUninitialized<MSDistributeHorizontallyAction> {}
interface MSDistributeHorizontallyAction extends MSDistributeAction {
  distributeHorizontally(sender: any): IBAction;
}
declare const MSDistributeHorizontallyAction: {
  alloc(): MSDistributeHorizontallyActionUninitialized;
  class(): MSDistributeHorizontallyAction;
}

