interface NSDistributedLockUninitialized<InitializedType = NSDistributedLock> extends NSObjectUninitialized<NSDistributedLock> {
  initWithPath(path: NSString | string): InitializedType;
}
interface NSDistributedLock extends NSObject {
  tryLock(): boolean;
  unlock(): void;
  breakLock(): void;

  lockDate(): NSDate;
}
declare const NSDistributedLock: {
  alloc(): NSDistributedLockUninitialized;
  class(): NSDistributedLock;  lockWithPath(path: NSString | string): NSDistributedLock;

}

