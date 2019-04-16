interface BCCacheDeferredCreationUninitialized<InitializedType = BCCacheDeferredCreation> extends NSObjectUninitialized<BCCacheDeferredCreation> {}
interface BCCacheDeferredCreation extends NSObject {
}
declare const BCCacheDeferredCreation: {
  alloc(): BCCacheDeferredCreationUninitialized;
  class(): BCCacheDeferredCreation;  createWithBlock(block: BCCacheCreateObjectBlock): BCCacheDeferredCreation;

}

