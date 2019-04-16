interface MSExportInitialHeaderItemUninitialized<InitializedType = MSExportInitialHeaderItem> extends MSHeaderInspectorItemUninitialized<MSExportInitialHeaderItem> {}
interface MSExportInitialHeaderItem extends MSHeaderInspectorItem {
}
declare const MSExportInitialHeaderItem: {
  alloc(): MSExportInitialHeaderItemUninitialized;
  class(): MSExportInitialHeaderItem;
}

