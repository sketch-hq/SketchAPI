interface NSThreadUninitialized<InitializedType = NSThread> extends NSObjectUninitialized<NSThread> {
  init(): InitializedType;
  initWithTarget_selector_object(target: any, selector: string, argument: any | null): InitializedType;
  initWithBlock(block: Block): InitializedType;
}
interface NSThread extends NSObject {
  cancel(): void;
  start(): void;
  main(): void;

  threadDictionary(): NSMutableDictionary<any, any>;
  threadPriority(): number;
  setThreadPriority(threadPriority: number): void;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  name(): NSString;
  setName(name: NSString | string): void;
  stackSize(): NSUInteger;
  setStackSize(stackSize: NSUInteger): void;
  executing(): boolean;
  finished(): boolean;
  cancelled(): boolean;
}
declare const NSThread: {
  alloc(): NSThreadUninitialized;
  class(): NSThread;  detachNewThreadWithBlock(block: Block): void;
  detachNewThreadSelector_toTarget_withObject(selector: string, target: any, argument: any | null): void;
  isMultiThreaded(): boolean;
  sleepUntilDate(date: NSDate): void;
  sleepForTimeInterval(ti: NSTimeInterval): void;
  exit(): void;
  threadPriority(): number;
  setThreadPriority(p: number): boolean;

  currentThread(): NSThread;
  callStackReturnAddresses(): NSArray<any>;
  callStackSymbols(): NSArray<any>;
  isMainThread(): boolean;
  mainThread(): NSThread;

}

