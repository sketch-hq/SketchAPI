interface MSJPGExporterUninitialized<InitializedType = MSJPGExporter> extends MSExporterUninitialized<MSJPGExporter> {}

interface MSJPGExporter extends MSExporter {
}

declare const MSJPGExporter: {
  alloc(): MSJPGExporterUninitialized;
  class(): MSJPGExporter;
  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSJPGExporter;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSJPGExporter;
  accessInstanceVariablesDirectly(): boolean;

}

