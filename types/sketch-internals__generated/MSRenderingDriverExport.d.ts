interface MSRenderingDriverExportUninitialized<InitializedType = MSRenderingDriverExport> extends MSRenderingDriverCGUninitialized<MSRenderingDriverExport> {}
interface MSRenderingDriverExport extends MSRenderingDriverCG {
}
declare const MSRenderingDriverExport: {
  alloc(): MSRenderingDriverExportUninitialized;
  class(): MSRenderingDriverExport;
}

