interface MSExportPresetUninitialized<InitializedType = MSExportPreset> extends _MSExportPresetUninitialized<MSExportPreset> {
  initWithName_formats(name: NSString | string, formats: NSArray<any> | any[]): InitializedType;
}

interface MSExportPreset extends _MSExportPreset, IMSExportFormatContainer {
  containingLayer(): MSLayer;
  exportFormats(): NSArray<any>;
  removeExportFormat(exportFormat: MSExportFormat): void;

  displayName(): NSString;
}

declare const MSExportPreset: {
  alloc(): MSExportPresetUninitialized;
  class(): MSExportPreset;
}

