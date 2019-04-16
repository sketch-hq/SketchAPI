interface MSRefreshDataActionUninitialized<InitializedType = MSRefreshDataAction> extends MSDataActionUninitialized<MSRefreshDataAction> {}
interface MSRefreshDataAction extends MSDataAction {
  refreshDataOnCurrentSelection(sender: any): IBAction;
}
declare const MSRefreshDataAction: {
  alloc(): MSRefreshDataActionUninitialized;
  class(): MSRefreshDataAction;
}

