interface MSPDFImporterUninitialized<InitializedType = MSPDFImporter> extends NSObjectUninitialized<MSPDFImporter> {}
interface MSPDFImporter extends NSObject, IMSImporter {
  prepareToImportFromURL(url: NSURL): NSUInteger;
  importAsLayer(): MSLayer;
}
declare const MSPDFImporter: {
  alloc(): MSPDFImporterUninitialized;
  class(): MSPDFImporter;  pdfImporter(): MSPDFImporter;
  epsImporter(): MSPDFImporter;

}

