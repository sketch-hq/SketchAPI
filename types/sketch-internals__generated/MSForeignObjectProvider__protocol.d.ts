interface IMSForeignObjectProvider {
  localObjectsForDocument(document: MSDocumentData): NSArray<any>;
  currentDocumentIsLibrary(library: MSAssetLibrary): boolean;
  masterObjectForInstance(instance: MSModelObject): MSShareableObject;
  masterIsOutOfSyncWithInstance(instance: MSModelObject): boolean;

  foreignObjects(): NSArray<any>;
  currentDocument(): MSDocumentData;
  libraryController(): MSAssetLibraryController;
  objectType(): MSShareableObjectType;
}

