interface MSCacheManagerUninitialized<InitializedType = MSCacheManager> extends NSObjectUninitialized<MSCacheManager> {
  init(): InitializedType;
  initWithZoomIndependentCache(zoomIndependentCache: BCCache): InitializedType;
}
interface MSCacheManager extends NSObject, IMSRenderingContextCacheProvider {
  clearCachesExceptForOwners(ownersToKeep: NSSet<any>): void;
  clearAllCaches(): void;

  modelCache(): BCCache;
}
declare const MSCacheManager: {
  alloc(): MSCacheManagerUninitialized;
  class(): MSCacheManager;
}

