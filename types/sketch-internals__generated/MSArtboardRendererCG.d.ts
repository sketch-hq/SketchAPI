interface MSArtboardRendererCGUninitialized<InitializedType = MSArtboardRendererCG> extends MSGroupRendererCGUninitialized<MSArtboardRendererCG> {}

interface MSArtboardRendererCG extends MSGroupRendererCG {
  renderSubLayersOfGroup_ignoreDrawingArea_context(group: MSImmutableLayerGroup, ignoreDrawingArea: boolean, context: MSRenderingContext): void;
}

declare const MSArtboardRendererCG: {
  alloc(): MSArtboardRendererCGUninitialized;
  class(): MSArtboardRendererCG;
}

