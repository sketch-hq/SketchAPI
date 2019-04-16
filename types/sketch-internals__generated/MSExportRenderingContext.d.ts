interface MSExportRenderingContextUninitialized<InitializedType = MSExportRenderingContext> extends MSRenderingContextCGUninitialized<MSExportRenderingContext> {}

interface MSExportRenderingContext extends MSRenderingContextCG {

  exportRequest(): MSExportRequest;
  setExportRequest(exportRequest: MSExportRequest): void;
}

declare const MSExportRenderingContext: {
  alloc(): MSExportRenderingContextUninitialized;
  class(): MSExportRenderingContext;
}

