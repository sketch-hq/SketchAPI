interface _MSImmutableShapeGroupUninitialized<InitializedType = _MSImmutableShapeGroup> extends MSImmutableLayerGroupUninitialized<_MSImmutableShapeGroup> {}

interface _MSImmutableShapeGroup extends MSImmutableLayerGroup {
}

declare const _MSImmutableShapeGroup: {
  alloc(): _MSImmutableShapeGroupUninitialized;
  class(): _MSImmutableShapeGroup;
}

