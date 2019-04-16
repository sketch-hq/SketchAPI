interface MSTiffExporterUninitialized<InitializedType = MSTiffExporter> extends MSExporterUninitialized<MSTiffExporter> {}

interface MSTiffExporter extends MSExporter {
}

declare const MSTiffExporter: {
  alloc(): MSTiffExporterUninitialized;
  class(): MSTiffExporter;
  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSTiffExporter;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSTiffExporter;
  accessInstanceVariablesDirectly(): boolean;

}

