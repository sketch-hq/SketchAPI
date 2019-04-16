interface MSImmutableArrayUninitialized<InitializedType = MSImmutableArray> extends MSImmutableModelObjectUninitialized<MSImmutableArray> {}

interface MSImmutableArray extends MSImmutableModelObject {
}

declare const MSImmutableArray: {
  alloc(): MSImmutableArrayUninitialized;
  class(): MSImmutableArray;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

