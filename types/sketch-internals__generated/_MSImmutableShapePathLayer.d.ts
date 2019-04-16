interface _MSImmutableShapePathLayerUninitialized<InitializedType = _MSImmutableShapePathLayer> extends MSImmutableStyledLayerUninitialized<_MSImmutableShapePathLayer> {}
interface _MSImmutableShapePathLayer extends MSImmutableStyledLayer {

  edited(): boolean;
  isClosed(): boolean;
  pointRadiusBehaviour(): MSPointRadiusBehaviour;
  points(): NSArray<any>;
}
declare const _MSImmutableShapePathLayer: {
  alloc(): _MSImmutableShapePathLayerUninitialized;
  class(): _MSImmutableShapePathLayer;
}

