interface MSPDFExporterUninitialized<InitializedType = MSPDFExporter> extends MSExporterUninitialized<MSPDFExporter> {}
interface MSPDFExporter extends MSExporter {
}
declare const MSPDFExporter: {
  alloc(): MSPDFExporterUninitialized;
  class(): MSPDFExporter;
}

