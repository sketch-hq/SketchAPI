interface MSImmutableArrayUninitialized<InitializedType = MSImmutableArray> extends MSImmutableModelObjectUninitialized<MSImmutableArray> {}
interface MSImmutableArray extends MSImmutableModelObject {
}
declare const MSImmutableArray: {
  alloc(): MSImmutableArrayUninitialized;
  class(): MSImmutableArray;
}

