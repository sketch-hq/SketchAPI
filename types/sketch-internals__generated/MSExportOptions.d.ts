interface MSExportOptionsUninitialized<InitializedType = MSExportOptions> extends _MSExportOptionsUninitialized<MSExportOptions> {}

interface MSExportOptions extends _MSExportOptions, IMSExportFormatContainer {
  addExportFormat(): MSExportFormat;
  containingLayer(): MSLayer;
  exportFormats(): NSArray<any>;
  removeExportFormat(exportFormat: MSExportFormat): void;
}

declare const MSExportOptions: {
  alloc(): MSExportOptionsUninitialized;
  class(): MSExportOptions;
  nextMostAppropriateExportFormatToAdd(existingExportFormats: NSArray<any> | any[]): MSExportFormat;
}

