interface MSTiffExporterUninitialized<InitializedType = MSTiffExporter> extends MSExporterUninitialized<MSTiffExporter> {}
interface MSTiffExporter extends MSExporter {
}
declare const MSTiffExporter: {
  alloc(): MSTiffExporterUninitialized;
  class(): MSTiffExporter;
}

