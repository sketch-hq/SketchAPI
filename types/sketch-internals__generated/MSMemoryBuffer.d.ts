interface MSMemoryBufferUninitialized<InitializedType = MSMemoryBuffer> extends NSObjectUninitialized<MSMemoryBuffer> {
  initWithSize(size: size_t): InitializedType;
}
interface MSMemoryBuffer extends NSObject {
  zerofill(bytesToFill: size_t): void;

  size(): size_t;
  bytes(): void;
}
declare const MSMemoryBuffer: {
  alloc(): MSMemoryBufferUninitialized;
  class(): MSMemoryBuffer;
}

