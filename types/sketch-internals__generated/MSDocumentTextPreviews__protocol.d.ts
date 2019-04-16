interface IMSDocumentTextPreviews extends NSObject {
  createPreviewPDFDataForTextLayers_document(layers: NSSet<any>, document: MSImmutableDocumentData): NSData;
}

