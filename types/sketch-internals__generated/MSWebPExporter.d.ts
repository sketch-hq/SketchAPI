interface MSWebPExporterUninitialized<InitializedType = MSWebPExporter> extends MSExporterUninitialized<MSWebPExporter> {}
interface MSWebPExporter extends MSExporter {
}
declare const MSWebPExporter: {
  alloc(): MSWebPExporterUninitialized;
  class(): MSWebPExporter;
}

