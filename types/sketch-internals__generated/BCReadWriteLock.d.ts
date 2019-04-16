interface BCReadWriteLockUninitialized<InitializedType = BCReadWriteLock> extends NSObjectUninitialized<BCReadWriteLock> {}
interface BCReadWriteLock extends NSObject {
  protectedRead(block: BCVoidBlock): void;
  protectedWrite(block: BCVoidBlock): void;
}
declare const BCReadWriteLock: {
  alloc(): BCReadWriteLockUninitialized;
  class(): BCReadWriteLock;
}

