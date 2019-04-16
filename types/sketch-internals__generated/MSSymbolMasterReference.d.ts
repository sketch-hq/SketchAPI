interface MSSymbolMasterReferenceUninitialized<InitializedType = MSSymbolMasterReference> extends MSShareableObjectReferenceUninitialized<MSSymbolMasterReference> {}

interface MSSymbolMasterReference extends MSShareableObjectReference {

  symbolMaster(): MSSymbolMaster;
  descriptor(): MSSymbolMasterReferenceDescriptor;
}

declare const MSSymbolMasterReference: {
  alloc(): MSSymbolMasterReferenceUninitialized;
  class(): MSSymbolMasterReference;
  referenceForShareableObject(object: MSModelObject): MSSymbolMasterReference;
  referenceForShareableObject_inLibrary(object: MSModelObject, library: MSAssetLibrary | null): MSSymbolMasterReference;
  accessInstanceVariablesDirectly(): boolean;

}

