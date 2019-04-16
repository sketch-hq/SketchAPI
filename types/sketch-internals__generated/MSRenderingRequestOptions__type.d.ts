declare enum MSRenderingRequestOptions {
  MSRenderingRequestOptionsNone = 0,
  MSRenderingRequestOptionsExporting = 1 << 0,
  MSRenderingRequestOptionsDrawingMask = 1 << 1,
  MSRenderingRequestOptionsDrawingPixelated = 1 << 2,
  MSRenderingRequestOptionsIncludeArtboardBackground = 1 << 3,
  MSRenderingRequestOptionsPrinting = 1 << 4,
  MSRenderingRequestOptionsFlipShadows = 1 << 5,
  MSRenderingRequestOptionsSkipLayerInclusionTests = 1 << 6,
  MSRenderingRequestOptionsVectorBacked = 1 << 7,
  MSRenderingRequestOptionsDefault,
}

