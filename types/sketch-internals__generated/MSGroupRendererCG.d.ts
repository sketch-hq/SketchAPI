interface MSGroupRendererCGUninitialized<InitializedType = MSGroupRendererCG> extends MSLayerRendererCGUninitialized<MSGroupRendererCG> {}

interface MSGroupRendererCG extends MSLayerRendererCG {
  renderSubLayersOfGroup_ignoreDrawingArea_context(group: MSImmutableLayerGroup, ignoreDrawingArea: boolean, context: MSRenderingContext): void;
}

declare const MSGroupRendererCG: {
  alloc(): MSGroupRendererCGUninitialized;
  class(): MSGroupRendererCG;
}

