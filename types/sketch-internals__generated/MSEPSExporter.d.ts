interface MSEPSExporterUninitialized<InitializedType = MSEPSExporter> extends MSExporterUninitialized<MSEPSExporter> {}

interface MSEPSExporter extends MSExporter {
}

declare const MSEPSExporter: {
  alloc(): MSEPSExporterUninitialized;
  class(): MSEPSExporter;
  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSEPSExporter;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSEPSExporter;
}

