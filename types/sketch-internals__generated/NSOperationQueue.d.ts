interface NSOperationQueueUninitialized<InitializedType = NSOperationQueue> extends NSObjectUninitialized<NSOperationQueue> {}
interface NSOperationQueue extends NSObject {
  addOperation(op: NSOperation): void;
  addOperations_waitUntilFinished(ops: NSArray<any> | any[], wait: boolean): void;
  addOperationWithBlock(block: Block): void;
  cancelAllOperations(): void;
  waitUntilAllOperationsAreFinished(): void;

  operations(): NSArray<any>;
  operationCount(): NSUInteger;
  maxConcurrentOperationCount(): NSInteger;
  setMaxConcurrentOperationCount(maxConcurrentOperationCount: NSInteger): void;
  suspended(): boolean;
  setSuspended(suspended: boolean): void;
  name(): NSString;
  setName(name: NSString | string): void;
  qualityOfService(): NSQualityOfService;
  setQualityOfService(qualityOfService: NSQualityOfService): void;
  underlyingQueue(): dispatch_queue_t;
  setUnderlyingQueue(underlyingQueue: dispatch_queue_t): void;
}
declare const NSOperationQueue: {
  alloc(): NSOperationQueueUninitialized;
  class(): NSOperationQueue;
  currentQueue(): NSOperationQueue;
  mainQueue(): NSOperationQueue;

}

