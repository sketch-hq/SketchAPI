interface MSWebPExporterUninitialized<InitializedType = MSWebPExporter> extends MSExporterUninitialized<MSWebPExporter> {}

interface MSWebPExporter extends MSExporter {
}

declare const MSWebPExporter: {
  alloc(): MSWebPExporterUninitialized;
  class(): MSWebPExporter;
  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSWebPExporter;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSWebPExporter;
  accessInstanceVariablesDirectly(): boolean;

}

