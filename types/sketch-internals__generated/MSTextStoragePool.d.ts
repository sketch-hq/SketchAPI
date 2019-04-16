interface MSTextStoragePoolUninitialized<InitializedType = MSTextStoragePool> extends BCObjectPoolUninitialized<MSTextStoragePool> {
  initWithTextLayer(textLayer: MSImmutableTextLayer): InitializedType;
}
interface MSTextStoragePool extends BCObjectPool {
  vendTextStorage(): NSTextStorage;
  recycleTextStorage(textStorage: NSTextStorage): void;
}
declare const MSTextStoragePool: {
  alloc(): MSTextStoragePoolUninitialized;
  class(): MSTextStoragePool;
}

