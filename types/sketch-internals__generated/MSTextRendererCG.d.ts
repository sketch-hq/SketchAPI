interface MSTextRendererCGUninitialized<InitializedType = MSTextRendererCG> extends MSLayerRendererCGUninitialized<MSTextRendererCG> {}

interface MSTextRendererCG extends MSLayerRendererCG {
}

declare const MSTextRendererCG: {
  alloc(): MSTextRendererCGUninitialized;
  class(): MSTextRendererCG;
  accessInstanceVariablesDirectly(): boolean;

}

