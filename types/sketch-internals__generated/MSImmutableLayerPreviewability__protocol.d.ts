interface IMSImmutableLayerPreviewability {
  previewImagesRequireRefreshWithDocumentData(documentData: MSImmutableDocumentData): boolean;
  refreshPreviewImagesWithDocumentData(documentData: MSImmutableDocumentData): void;
}

