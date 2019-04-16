interface MSManageSharedObjectBaseViewControllerUninitialized<InitializedType = MSManageSharedObjectBaseViewController> extends NSViewControllerUninitialized<MSManageSharedObjectBaseViewController> {}
interface MSManageSharedObjectBaseViewController extends NSViewController, INSTableViewDataSource, INSTableViewDelegate {
  deleteSelectedObjects(sender: any): IBAction;

  tableView(): NSTableView;
  setTableView(tableView: NSTableView): void;
  document(): MSDocument;
  setDocument(document: MSDocument): void;
  sharedObjectsSortedByName(): NSArray<any>;
}
declare const MSManageSharedObjectBaseViewController: {
  alloc(): MSManageSharedObjectBaseViewControllerUninitialized;
  class(): MSManageSharedObjectBaseViewController;
}

