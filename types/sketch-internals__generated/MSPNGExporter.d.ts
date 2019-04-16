interface MSPNGExporterUninitialized<InitializedType = MSPNGExporter> extends MSExporterUninitialized<MSPNGExporter> {}

interface MSPNGExporter extends MSExporter {
}

declare const MSPNGExporter: {
  alloc(): MSPNGExporterUninitialized;
  class(): MSPNGExporter;
  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSPNGExporter;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSPNGExporter;
  accessInstanceVariablesDirectly(): boolean;

}

