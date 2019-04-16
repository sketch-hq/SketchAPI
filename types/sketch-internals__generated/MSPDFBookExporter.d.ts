interface MSPDFBookExporterUninitialized<InitializedType = MSPDFBookExporter> extends NSObjectUninitialized<MSPDFBookExporter> {}
interface MSPDFBookExporter extends NSObject {
}
declare const MSPDFBookExporter: {
  alloc(): MSPDFBookExporterUninitialized;
  class(): MSPDFBookExporter;  exportPages_defaultFilename(pages: NSArray<any> | any[], defaultFilename: NSString | string): void;

}

