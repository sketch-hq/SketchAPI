interface MSForeignObjectUninitialized<InitializedType = MSForeignObject> extends _MSForeignObjectUninitialized<MSForeignObject> {
  initWithOriginalObject_inLibrary(original: MSModelObject, library: any): InitializedType;
}

interface MSForeignObject extends _MSForeignObject {
  isOutOfDateWithLibrary(library: any): boolean;
  syncWithRemote(remote: MSModelObject): void;
  unlinkFromRemote(): MSModelObject;
  masterFromLibrary(library: any): MSModelObject;
  matchingForeignObjectInDocument(doc: MSDocumentData): MSForeignObject;
  isLocalToDocument(doc: MSDocumentData): boolean;

  localObject(): MSModelObject;
  setLocalObject(localObject: MSModelObject): void;
  remoteShareID(): NSString;
}

declare const MSForeignObject: {
  alloc(): MSForeignObjectUninitialized;
  class(): MSForeignObject;
  masterFromDocument_withID(document: MSDocumentData, documentLocalID: NSString | string): MSModelObject;
  foreignObjectCollectionInDocument(document: MSDocumentData): NSArray<any>;
}

