interface _MSImmutableShapePathUninitialized<InitializedType = _MSImmutableShapePath> extends MSImmutableModelObjectUninitialized<_MSImmutableShapePath> {}
interface _MSImmutableShapePath extends MSImmutableModelObject {

  isClosed(): boolean;
  pointRadiusBehaviour(): MSPointRadiusBehaviour;
  points(): NSArray<any>;
}
declare const _MSImmutableShapePath: {
  alloc(): _MSImmutableShapePathUninitialized;
  class(): _MSImmutableShapePath;
}

