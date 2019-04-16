interface MSEPSExporterUninitialized<InitializedType = MSEPSExporter> extends MSExporterUninitialized<MSEPSExporter> {}
interface MSEPSExporter extends MSExporter {
}
declare const MSEPSExporter: {
  alloc(): MSEPSExporterUninitialized;
  class(): MSEPSExporter;
}

