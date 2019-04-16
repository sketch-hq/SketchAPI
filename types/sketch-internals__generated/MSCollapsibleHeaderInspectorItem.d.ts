interface MSCollapsibleHeaderInspectorItemUninitialized<InitializedType = MSCollapsibleHeaderInspectorItem> extends MSHeaderInspectorItemUninitialized<MSCollapsibleHeaderInspectorItem> {}
interface MSCollapsibleHeaderInspectorItem extends MSHeaderInspectorItem {
  toggleCollapsed(sender: any): IBAction;

  collapsed(): boolean;
  setCollapsed(collapsed: boolean): void;
}
declare const MSCollapsibleHeaderInspectorItem: {
  alloc(): MSCollapsibleHeaderInspectorItemUninitialized;
  class(): MSCollapsibleHeaderInspectorItem;
}

