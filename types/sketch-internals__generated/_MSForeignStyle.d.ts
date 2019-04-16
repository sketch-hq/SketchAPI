interface _MSForeignStyleUninitialized<InitializedType = _MSForeignStyle> extends MSForeignObjectUninitialized<_MSForeignStyle> {}

interface _MSForeignStyle extends MSForeignObject {

  remoteStyleID(): NSString;
  setRemoteStyleID(remoteStyleID: NSString | string): void;
  localSharedStyle(): MSSharedStyle;
  setLocalSharedStyle(localSharedStyle: MSSharedStyle): void;
}

declare const _MSForeignStyle: {
  alloc(): _MSForeignStyleUninitialized;
  class(): _MSForeignStyle;
  masterFromDocument_withID(document: MSDocumentData, documentLocalID: NSString | string): MSModelObject;
  foreignObjectCollectionInDocument(document: MSDocumentData): NSArray<any>;
}

