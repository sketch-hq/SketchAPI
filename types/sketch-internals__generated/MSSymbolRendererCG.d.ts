interface MSSymbolRendererCGUninitialized<InitializedType = MSSymbolRendererCG> extends MSArtboardRendererCGUninitialized<MSSymbolRendererCG> {}
interface MSSymbolRendererCG extends MSArtboardRendererCG {
}
declare const MSSymbolRendererCG: {
  alloc(): MSSymbolRendererCGUninitialized;
  class(): MSSymbolRendererCG;
}

