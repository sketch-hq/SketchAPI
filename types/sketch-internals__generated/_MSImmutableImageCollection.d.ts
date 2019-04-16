interface _MSImmutableImageCollectionUninitialized<InitializedType = _MSImmutableImageCollection> extends MSImmutableModelObjectUninitialized<_MSImmutableImageCollection> {}

interface _MSImmutableImageCollection extends MSImmutableModelObject {

  images(): NSDictionary<any, any>;
}

declare const _MSImmutableImageCollection: {
  alloc(): _MSImmutableImageCollectionUninitialized;
  class(): _MSImmutableImageCollection;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

