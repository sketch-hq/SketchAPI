interface MSExportInspectorViewControllerUninitialized<InitializedType = MSExportInspectorViewController> extends MSInspectorItemUninitialized<MSExportInspectorViewController> {}
interface MSExportInspectorViewController extends MSInspectorItem {

  views(): NSArray<any>;
  hasExports(): boolean;
}
declare const MSExportInspectorViewController: {
  alloc(): MSExportInspectorViewControllerUninitialized;
  class(): MSExportInspectorViewController;
}

