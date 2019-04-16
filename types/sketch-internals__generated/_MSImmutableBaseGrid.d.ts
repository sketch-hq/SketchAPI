interface _MSImmutableBaseGridUninitialized<InitializedType = _MSImmutableBaseGrid> extends MSImmutableModelObjectUninitialized<_MSImmutableBaseGrid> {}
interface _MSImmutableBaseGrid extends MSImmutableModelObject {

  isEnabled(): boolean;
}
declare const _MSImmutableBaseGrid: {
  alloc(): _MSImmutableBaseGridUninitialized;
  class(): _MSImmutableBaseGrid;
}

