interface NSRecursiveLockUninitialized<InitializedType = NSRecursiveLock> extends NSObjectUninitialized<NSRecursiveLock> {}
interface NSRecursiveLock extends NSObject, INSLocking {
  tryLock(): boolean;
  lockBeforeDate(limit: NSDate): boolean;

  name(): NSString;
  setName(name: NSString | string): void;
}
declare const NSRecursiveLock: {
  alloc(): NSRecursiveLockUninitialized;
  class(): NSRecursiveLock;
}

