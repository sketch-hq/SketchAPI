interface IMSDocumentDataDelegate {
  documentData_temporarilyHideSelectionForLayers(data: MSDocumentData, layers: NSArray<any> | any[]): void;
  documentDidChange(document: MSDocumentData): void;
  documentData_storeMetadata_forKey_object(data: MSDocumentData, metadata: any, key: NSString | string, object: MSModelObject): void;
  documentData_metadataForKey_object(data: MSDocumentData, key: NSString | string, object: MSModelObject): any;
  layerTreeLayoutDidChange(): void;
  refreshOverlay(): void;
  visibleCanvasRectForDocumentData(data: MSDocumentData): CGRect;
  validateSelectionOfLayer_proposedIDsOfLayersToSelect(layer: MSLayer, proposedIDs: NSMutableSet<any>): boolean;
}

