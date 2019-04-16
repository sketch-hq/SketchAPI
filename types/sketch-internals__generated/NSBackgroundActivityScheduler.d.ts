interface NSBackgroundActivitySchedulerUninitialized<InitializedType = NSBackgroundActivityScheduler> extends NSObjectUninitialized<NSBackgroundActivityScheduler> {
  initWithIdentifier(identifier: NSString | string): InitializedType;
}
interface NSBackgroundActivityScheduler extends NSObject {
  scheduleWithBlock(block: Block): void;
  invalidate(): void;

  identifier(): NSString;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  repeats(): boolean;
  setRepeats(repeats: boolean): void;
  interval(): NSTimeInterval;
  setInterval(interval: NSTimeInterval): void;
  tolerance(): NSTimeInterval;
  setTolerance(tolerance: NSTimeInterval): void;
  shouldDefer(): boolean;
}
declare const NSBackgroundActivityScheduler: {
  alloc(): NSBackgroundActivitySchedulerUninitialized;
  class(): NSBackgroundActivityScheduler;
}

