interface IMSRenderingContextCacheProvider {
  cacheForZoomLevel(zoomLevel: CGFloat): BCCache;

  zoomIndependentCache(): BCCache;
}

