interface MSSliceExportOptionsUninitialized<InitializedType = MSSliceExportOptions> extends NSViewControllerUninitialized<MSSliceExportOptions> {}
interface MSSliceExportOptions extends NSViewController {
}
declare const MSSliceExportOptions: {
  alloc(): MSSliceExportOptionsUninitialized;
  class(): MSSliceExportOptions;  exportOptionsForRequests(requests: NSArray<any> | any[]): MSSliceExportOptions;

}

