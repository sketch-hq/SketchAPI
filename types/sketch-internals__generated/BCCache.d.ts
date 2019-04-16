interface BCCacheUninitialized<InitializedType = BCCache> extends NSObjectUninitialized<BCCache> {}
interface BCCache extends NSObject {
  cachedObjectForOwner_andKey(owner: any, key: any): NSObject;
  setCachedObject_forOwner_andKey(obj: any | null, owner: any, key: any): void;
  cachedObjectForOwner_andKey_orCreateWithBlock(owner: any, key: any, block: BCCacheCreateObjectBlock): NSObject;
  blockingCachedObjectForOwner_andKey_orCreateWithBlock(owner: any, key: any, block: BCCacheCreateObjectBlock): NSObject;
  populateCacheForObjectWithOwner_andKey_creationBlock(owner: any, key: any, block: BCCacheCreateObjectBlock): NSObject;
  removeCachedObjectForOwner_andKey(owner: any, key: any): void;
  removeCachedObjectsForOwner(owner: any): void;
  removeCachedObjectsExceptForOwners(ownersToKeep: NSSet<any>): void;
  removeAllCachedObjects(): void;

  count(): NSUInteger;
  allOwners(): NSSet<any>;
}
declare const BCCache: {
  alloc(): BCCacheUninitialized;
  class(): BCCache;
}

