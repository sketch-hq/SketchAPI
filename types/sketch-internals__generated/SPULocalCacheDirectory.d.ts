interface SPULocalCacheDirectoryUninitialized<InitializedType = SPULocalCacheDirectory> extends NSObjectUninitialized<SPULocalCacheDirectory> {}
interface SPULocalCacheDirectory extends NSObject {
}
declare const SPULocalCacheDirectory: {
  alloc(): SPULocalCacheDirectoryUninitialized;
  class(): SPULocalCacheDirectory;  cachePathForBundleIdentifier(bundleIdentifier: NSString | string): NSString;
  removeOldItemsInDirectory(directory: NSString | string): void;
  createUniqueDirectoryInDirectory(directory: NSString | string): NSString;

}

