interface MSSymbolMasterRendererCGUninitialized<InitializedType = MSSymbolMasterRendererCG> extends MSArtboardRendererCGUninitialized<MSSymbolMasterRendererCG> {}

interface MSSymbolMasterRendererCG extends MSArtboardRendererCG {
}

declare const MSSymbolMasterRendererCG: {
  alloc(): MSSymbolMasterRendererCGUninitialized;
  class(): MSSymbolMasterRendererCG;
}

