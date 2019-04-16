interface MSExporterUninitialized<InitializedType = MSExporter> extends NSObjectUninitialized<MSExporter> {}
interface MSExporter extends NSObject {
  data(): NSData;
  image(): NSImage;
  previewImage(): NSImage;
  drawRect_context(dirtyRect: NSRect, contextRef: CGContextRef): void;
  exportToFileURL(fileURL: NSURL): boolean;
  bitmapImageRep(): NSBitmapImageRep;
  basicBitmapImageRep(): NSBitmapImageRep;
  boundsForVectorRender(): NSRect;

  request(): MSExportRequest;
  setRequest(request: MSExportRequest): void;
  isPrinting(): boolean;
  setIsPrinting(isPrinting: boolean): void;
  driver(): MSRenderingDriver;
  colorSpace(): NSColorSpace;
}
declare const MSExporter: {
  alloc(): MSExporterUninitialized;
  class(): MSExporter;  exporterForRequest_colorSpace(request: MSExportRequest, colorSpace: NSColorSpace | null): MSExporter;
  exporterForRequest_colorSpace_driver(request: MSExportRequest, colorSpace: NSColorSpace, driver: MSRenderingDriver): MSExporter;

}

