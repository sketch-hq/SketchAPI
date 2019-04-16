interface MSBitmapBackedRenderingUninitialized<InitializedType = MSBitmapBackedRendering> extends NSObjectUninitialized<MSBitmapBackedRendering> {}
interface MSBitmapBackedRendering extends NSObject {
}
declare const MSBitmapBackedRendering: {
  alloc(): MSBitmapBackedRenderingUninitialized;
  class(): MSBitmapBackedRendering;  imageToCacheForLayer_context(layer: MSImmutableLayer, context: MSRenderingContextCG): MSLayerCachedImage;

}

