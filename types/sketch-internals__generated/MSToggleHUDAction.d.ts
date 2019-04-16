interface MSToggleHUDActionUninitialized<InitializedType = MSToggleHUDAction> extends MSActionUninitialized<MSToggleHUDAction> {}
interface MSToggleHUDAction extends MSAction {
  toggleHUD(sender: any): IBAction;
}
declare const MSToggleHUDAction: {
  alloc(): MSToggleHUDActionUninitialized;
  class(): MSToggleHUDAction;
}

