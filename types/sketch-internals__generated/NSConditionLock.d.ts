interface NSConditionLockUninitialized<InitializedType = NSConditionLock> extends NSObjectUninitialized<NSConditionLock> {
  initWithCondition(condition: NSInteger): InitializedType;
}
interface NSConditionLock extends NSObject, INSLocking {
  lockWhenCondition(condition: NSInteger): void;
  tryLock(): boolean;
  tryLockWhenCondition(condition: NSInteger): boolean;
  unlockWithCondition(condition: NSInteger): void;
  lockBeforeDate(limit: NSDate): boolean;
  lockWhenCondition_beforeDate(condition: NSInteger, limit: NSDate): boolean;

  condition(): NSInteger;
  name(): NSString;
  setName(name: NSString | string): void;
}
declare const NSConditionLock: {
  alloc(): NSConditionLockUninitialized;
  class(): NSConditionLock;
}

