interface MSImmutableShapeGroupUninitialized<InitializedType = MSImmutableShapeGroup> extends _MSImmutableShapeGroupUninitialized<MSImmutableShapeGroup> {}
interface MSImmutableShapeGroup extends _MSImmutableShapeGroup, IMSShapeGroup, IMSImmutablePathLayer {
}
declare const MSImmutableShapeGroup: {
  alloc(): MSImmutableShapeGroupUninitialized;
  class(): MSImmutableShapeGroup;
}

