interface NSConditionUninitialized<InitializedType = NSCondition> extends NSObjectUninitialized<NSCondition> {}
interface NSCondition extends NSObject, INSLocking {
  wait(): void;
  waitUntilDate(limit: NSDate): boolean;
  signal(): void;
  broadcast(): void;

  name(): NSString;
  setName(name: NSString | string): void;
}
declare const NSCondition: {
  alloc(): NSConditionUninitialized;
  class(): NSCondition;
}

