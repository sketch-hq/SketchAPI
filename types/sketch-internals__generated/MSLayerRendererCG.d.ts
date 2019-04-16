interface MSLayerRendererCGUninitialized<InitializedType = MSLayerRendererCG> extends NSObjectUninitialized<MSLayerRendererCG> {}
interface MSLayerRendererCG extends NSObject, IMSLayerRenderer {
}
declare const MSLayerRendererCG: {
  alloc(): MSLayerRendererCGUninitialized;
  class(): MSLayerRendererCG;
}

