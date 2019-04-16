interface _MSOvalShapeUninitialized<InitializedType = _MSOvalShape> extends MSShapePathLayerUninitialized<_MSOvalShape> {}
interface _MSOvalShape extends MSShapePathLayer {
}
declare const _MSOvalShape: {
  alloc(): _MSOvalShapeUninitialized;
  class(): _MSOvalShape;
}

