interface MSExportSelectedInspectorItemUninitialized<InitializedType = MSExportSelectedInspectorItem> extends MSInspectorItemUninitialized<MSExportSelectedInspectorItem> {}
interface MSExportSelectedInspectorItem extends MSInspectorItem {
}
declare const MSExportSelectedInspectorItem: {
  alloc(): MSExportSelectedInspectorItemUninitialized;
  class(): MSExportSelectedInspectorItem;
}

