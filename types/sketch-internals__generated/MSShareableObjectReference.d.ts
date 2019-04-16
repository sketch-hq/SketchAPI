interface MSShareableObjectReferenceUninitialized<InitializedType = MSShareableObjectReference> extends NSObjectUninitialized<MSShareableObjectReference> {}
interface MSShareableObjectReference extends NSObject, IBCSortable, IMSSharedObjectStyling {
  foreignObjectCollectionInDocument(document: MSDocumentData): NSArray<any>;

  sourceLibrary(): MSAssetLibrary;
  shareableObject(): MSShareableObject;
  shareableObjectType(): MSShareableObjectType;
  sharedObjectID(): NSString;
  locationPath(): NSString;
}
declare const MSShareableObjectReference: {
  alloc(): MSShareableObjectReferenceUninitialized;
  class(): MSShareableObjectReference;  referenceForShareableObject(object: MSModelObject): MSShareableObjectReference;
  referenceForShareableObject_inLibrary(object: MSModelObject, library: MSAssetLibrary | null): MSShareableObjectReference;

}

