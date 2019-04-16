interface MSPathRendererCGUninitialized<InitializedType = MSPathRendererCG> extends NSObjectUninitialized<MSPathRendererCG> {}
interface MSPathRendererCG extends NSObject, IMSPathRenderer {
}
declare const MSPathRendererCG: {
  alloc(): MSPathRendererCGUninitialized;
  class(): MSPathRendererCG;
}

