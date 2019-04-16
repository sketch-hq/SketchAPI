interface MSColorHeaderInspectorItemUninitialized<InitializedType = MSColorHeaderInspectorItem> extends MSCollapsibleHeaderInspectorItemUninitialized<MSColorHeaderInspectorItem> {}
interface MSColorHeaderInspectorItem extends MSCollapsibleHeaderInspectorItem {
}
declare const MSColorHeaderInspectorItem: {
  alloc(): MSColorHeaderInspectorItemUninitialized;
  class(): MSColorHeaderInspectorItem;
}

