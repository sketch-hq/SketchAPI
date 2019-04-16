interface MSToggleGridActionUninitialized<InitializedType = MSToggleGridAction> extends MSToggleBaseActionUninitialized<MSToggleGridAction> {}
interface MSToggleGridAction extends MSToggleBaseAction {
  toggleGrid(sender: any): IBAction;
}
declare const MSToggleGridAction: {
  alloc(): MSToggleGridActionUninitialized;
  class(): MSToggleGridAction;
}

