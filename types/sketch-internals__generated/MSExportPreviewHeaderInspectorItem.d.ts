interface MSExportPreviewHeaderInspectorItemUninitialized<InitializedType = MSExportPreviewHeaderInspectorItem> extends MSInspectorItemUninitialized<MSExportPreviewHeaderInspectorItem> {}
interface MSExportPreviewHeaderInspectorItem extends MSInspectorItem {

  collapsed(): boolean;
  setCollapsed(collapsed: boolean): void;
  hideSeparator(): boolean;
  setHideSeparator(hideSeparator: boolean): void;
}
declare const MSExportPreviewHeaderInspectorItem: {
  alloc(): MSExportPreviewHeaderInspectorItemUninitialized;
  class(): MSExportPreviewHeaderInspectorItem;
}

