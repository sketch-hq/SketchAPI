interface NSLockUninitialized<InitializedType = NSLock> extends NSObjectUninitialized<NSLock> {}
interface NSLock extends NSObject, INSLocking {
  tryLock(): boolean;
  lockBeforeDate(limit: NSDate): boolean;

  name(): NSString;
  setName(name: NSString | string): void;
}
declare const NSLock: {
  alloc(): NSLockUninitialized;
  class(): NSLock;
}

