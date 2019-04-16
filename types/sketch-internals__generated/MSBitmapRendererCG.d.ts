interface MSBitmapRendererCGUninitialized<InitializedType = MSBitmapRendererCG> extends MSLayerRendererCGUninitialized<MSBitmapRendererCG> {}
interface MSBitmapRendererCG extends MSLayerRendererCG {
}
declare const MSBitmapRendererCG: {
  alloc(): MSBitmapRendererCGUninitialized;
  class(): MSBitmapRendererCG;
}

