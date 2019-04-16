interface MSExportRendererWithSVGSupportUninitialized<InitializedType = MSExportRendererWithSVGSupport> extends MSExporterUninitialized<MSExportRendererWithSVGSupport> {}

interface MSExportRendererWithSVGSupport extends MSExporter {
}

declare const MSExportRendererWithSVGSupport: {
  alloc(): MSExportRendererWithSVGSupportUninitialized;
  class(): MSExportRendererWithSVGSupport;
  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSExportRendererWithSVGSupport;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSExportRendererWithSVGSupport;
  accessInstanceVariablesDirectly(): boolean;

}

