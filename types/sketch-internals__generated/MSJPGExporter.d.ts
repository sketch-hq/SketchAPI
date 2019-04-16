interface MSJPGExporterUninitialized<InitializedType = MSJPGExporter> extends MSExporterUninitialized<MSJPGExporter> {}
interface MSJPGExporter extends MSExporter {
}
declare const MSJPGExporter: {
  alloc(): MSJPGExporterUninitialized;
  class(): MSJPGExporter;
}

