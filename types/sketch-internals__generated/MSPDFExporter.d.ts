interface MSPDFExporterUninitialized<InitializedType = MSPDFExporter> extends MSExporterUninitialized<MSPDFExporter> {}

interface MSPDFExporter extends MSExporter {
}

declare const MSPDFExporter: {
  alloc(): MSPDFExporterUninitialized;
  class(): MSPDFExporter;
  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSPDFExporter;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSPDFExporter;
  accessInstanceVariablesDirectly(): boolean;

}

