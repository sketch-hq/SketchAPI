interface INSCacheDelegate {
  cache_willEvictObject(cache: NSCache, obj: any): void;
}

