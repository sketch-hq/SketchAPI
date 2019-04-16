interface MSPNGExporterUninitialized<InitializedType = MSPNGExporter> extends MSExporterUninitialized<MSPNGExporter> {}
interface MSPNGExporter extends MSExporter {
}
declare const MSPNGExporter: {
  alloc(): MSPNGExporterUninitialized;
  class(): MSPNGExporter;
}

