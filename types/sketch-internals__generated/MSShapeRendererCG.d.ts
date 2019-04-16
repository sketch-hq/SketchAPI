interface MSShapeRendererCGUninitialized<InitializedType = MSShapeRendererCG> extends MSGroupRendererCGUninitialized<MSShapeRendererCG> {}
interface MSShapeRendererCG extends MSGroupRendererCG {
}
declare const MSShapeRendererCG: {
  alloc(): MSShapeRendererCGUninitialized;
  class(): MSShapeRendererCG;
}

