interface NSOperationUninitialized<InitializedType = NSOperation> extends NSObjectUninitialized<NSOperation> {}
interface NSOperation extends NSObject {
  start(): void;
  main(): void;
  cancel(): void;
  addDependency(op: NSOperation): void;
  removeDependency(op: NSOperation): void;
  waitUntilFinished(): void;

  cancelled(): boolean;
  executing(): boolean;
  finished(): boolean;
  concurrent(): boolean;
  asynchronous(): boolean;
  ready(): boolean;
  dependencies(): NSArray<any>;
  queuePriority(): NSOperationQueuePriority;
  setQueuePriority(queuePriority: NSOperationQueuePriority): void;
  threadPriority(): number;
  setThreadPriority(threadPriority: number): void;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  name(): NSString;
  setName(name: NSString | string): void;
}
declare const NSOperation: {
  alloc(): NSOperationUninitialized;
  class(): NSOperation;
}

