interface MSDistributeVerticallyActionUninitialized<InitializedType = MSDistributeVerticallyAction> extends MSDistributeActionUninitialized<MSDistributeVerticallyAction> {}

interface MSDistributeVerticallyAction extends MSDistributeAction {
  distributeVertically(sender: any): IBAction;
}

declare const MSDistributeVerticallyAction: {
  alloc(): MSDistributeVerticallyActionUninitialized;
  class(): MSDistributeVerticallyAction;
}

