interface MSExportFormatUninitialized<InitializedType = MSExportFormat> extends _MSExportFormatUninitialized<MSExportFormat> {}

interface MSExportFormat extends _MSExportFormat {
  container(): any;
  parentLayer(): MSLayer;
  remove(): void;
  isScalableExport(): boolean;
}

declare const MSExportFormat: {
  alloc(): MSExportFormatUninitialized;
  class(): MSExportFormat;
  formatWithScale_name_fileFormat(scale: CGFloat, name: NSString | string, format: NSString | string): MSExportFormat;
  formatWithScale_name_fileFormat_absoluteSize_namingScheme(scale: CGFloat, name: NSString | string, format: NSString | string, absoluteSize: CGFloat, namingScheme: MSExportFormatNamingScheme): MSExportFormat;
  validFormats(): NSSet<any>;
  exportableFilenameBodyForLayerName_exportFormat(layerName: NSString | string, format: MSImmutableExportFormat): NSString;
  exportableFilenameForLayerName_exportFormat(layerName: NSString | string, format: MSImmutableExportFormat): NSString;
}

