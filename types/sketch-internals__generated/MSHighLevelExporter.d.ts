interface MSHighLevelExporterUninitialized<InitializedType = MSHighLevelExporter> extends NSObjectUninitialized<MSHighLevelExporter> {
  initWithDelegate(delegate: any): InitializedType;
  initWithDelegate_driver(delegate: any, driver: MSRenderingDriver): InitializedType;
}
interface MSHighLevelExporter extends NSObject {
  formatsToExport(): NSArray<any>;
  exportLayers(layers: NSArray<any> | any[]): boolean;
  exportPage(page: MSPage): boolean;

  delegate(): any;
}
declare const MSHighLevelExporter: {
  alloc(): MSHighLevelExporterUninitialized;
  class(): MSHighLevelExporter;  exporterWithDelegate(delegate: any): MSHighLevelExporter;

}

