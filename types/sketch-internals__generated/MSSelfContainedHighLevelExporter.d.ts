interface MSSelfContainedHighLevelExporterUninitialized<InitializedType = MSSelfContainedHighLevelExporter> extends MSHighLevelExporterUninitialized<MSSelfContainedHighLevelExporter> {
  initWithOptions(options: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithOptions_driver(options: NSDictionary<any, any> | {[key: string]: any}, driver: MSRenderingDriver): InitializedType;
}
interface MSSelfContainedHighLevelExporter extends MSHighLevelExporter, IMSHighLevelExportDelegate {

  results(): NSDictionary<any, any>;
}
declare const MSSelfContainedHighLevelExporter: {
  alloc(): MSSelfContainedHighLevelExporterUninitialized;
  class(): MSSelfContainedHighLevelExporter;
}

