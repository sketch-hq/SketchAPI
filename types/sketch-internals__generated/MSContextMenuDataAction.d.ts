interface MSContextMenuDataActionUninitialized<InitializedType = MSContextMenuDataAction> extends MSDataMenuBaseActionUninitialized<MSContextMenuDataAction> {}
interface MSContextMenuDataAction extends MSDataMenuBaseAction {
  dataMenuRootAction(sender: any): IBAction;
}
declare const MSContextMenuDataAction: {
  alloc(): MSContextMenuDataActionUninitialized;
  class(): MSContextMenuDataAction;
}

