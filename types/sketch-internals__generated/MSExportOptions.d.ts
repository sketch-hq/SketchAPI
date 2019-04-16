interface MSExportOptionsUninitialized<InitializedType = MSExportOptions> extends _MSExportOptionsUninitialized<MSExportOptions> {}
interface MSExportOptions extends _MSExportOptions, IMSExportFormatContainer {
  addExportFormat(): MSExportFormat;
}
declare const MSExportOptions: {
  alloc(): MSExportOptionsUninitialized;
  class(): MSExportOptions;  nextMostAppropriateExportFormatToAdd(existingExportFormats: NSArray<any> | any[]): MSExportFormat;

}

