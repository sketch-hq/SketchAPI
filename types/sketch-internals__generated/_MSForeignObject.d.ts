interface _MSForeignObjectUninitialized<InitializedType = _MSForeignObject> extends MSModelObjectUninitialized<_MSForeignObject> {}
interface _MSForeignObject extends MSModelObject {

  libraryID(): NSString;
  setLibraryID(libraryID: NSString | string): void;
  sourceLibraryName(): NSString;
  setSourceLibraryName(sourceLibraryName: NSString | string): void;
  symbolPrivate(): boolean;
  setSymbolPrivate(symbolPrivate: boolean): void;
}
declare const _MSForeignObject: {
  alloc(): _MSForeignObjectUninitialized;
  class(): _MSForeignObject;
}

