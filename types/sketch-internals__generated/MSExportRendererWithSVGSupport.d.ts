interface MSExportRendererWithSVGSupportUninitialized<InitializedType = MSExportRendererWithSVGSupport> extends MSExporterUninitialized<MSExportRendererWithSVGSupport> {}
interface MSExportRendererWithSVGSupport extends MSExporter {
}
declare const MSExportRendererWithSVGSupport: {
  alloc(): MSExportRendererWithSVGSupportUninitialized;
  class(): MSExportRendererWithSVGSupport;
}

