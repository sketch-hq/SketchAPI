interface IMSExportFormatContainer {
  containingLayer(): MSLayer;
  exportFormats(): NSArray<any>;
  removeExportFormat(exportFormat: MSExportFormat): void;
}

