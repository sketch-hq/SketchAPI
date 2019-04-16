interface MSDocumentImporterUninitialized<InitializedType = MSDocumentImporter> extends NSObjectUninitialized<MSDocumentImporter> {}
interface MSDocumentImporter extends NSObject {

  group(): MSLayerGroup;
  view(): MSContentDrawView;
}
declare const MSDocumentImporter: {
  alloc(): MSDocumentImporterUninitialized;
  class(): MSDocumentImporter;  importFromURL_inPage_importer(url: NSURL, page: MSPage, importer: any): void;

}

