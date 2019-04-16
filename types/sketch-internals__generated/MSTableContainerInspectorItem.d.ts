interface MSTableContainerInspectorItemUninitialized<InitializedType = MSTableContainerInspectorItem> extends MSInspectorItemUninitialized<MSTableContainerInspectorItem> {}
interface MSTableContainerInspectorItem extends MSInspectorItem {

  tableView(): NSTableView;
  setTableView(tableView: NSTableView): void;
}
declare const MSTableContainerInspectorItem: {
  alloc(): MSTableContainerInspectorItemUninitialized;
  class(): MSTableContainerInspectorItem;
}

