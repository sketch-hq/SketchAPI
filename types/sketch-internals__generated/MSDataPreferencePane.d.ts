interface MSDataPreferencePaneUninitialized<InitializedType = MSDataPreferencePane> extends MSPreferencePaneUninitialized<MSDataPreferencePane> {}
interface MSDataPreferencePane extends MSPreferencePane, INSTableViewDelegate, INSTableViewDataSource, INSTextFieldDelegate {

  tableView(): MSDataTableView;
  setTableView(tableView: MSDataTableView): void;
  dataArrayController(): NSArrayController;
  setDataArrayController(dataArrayController: NSArrayController): void;
  data(): NSArray<any>;
  dataSupplierManager(): MSDataSupplierManager;
}
declare const MSDataPreferencePane: {
  alloc(): MSDataPreferencePaneUninitialized;
  class(): MSDataPreferencePane;
}

