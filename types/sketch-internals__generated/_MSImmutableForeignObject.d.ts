interface _MSImmutableForeignObjectUninitialized<InitializedType = _MSImmutableForeignObject> extends MSImmutableModelObjectUninitialized<_MSImmutableForeignObject> {}
interface _MSImmutableForeignObject extends MSImmutableModelObject {

  libraryID(): NSString;
  sourceLibraryName(): NSString;
  symbolPrivate(): boolean;
}
declare const _MSImmutableForeignObject: {
  alloc(): _MSImmutableForeignObjectUninitialized;
  class(): _MSImmutableForeignObject;
}

