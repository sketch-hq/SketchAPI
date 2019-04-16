interface NSBlockOperationUninitialized<InitializedType = NSBlockOperation> extends NSOperationUninitialized<NSBlockOperation> {}
interface NSBlockOperation extends NSOperation {
  addExecutionBlock(block: Block): void;

  executionBlocks(): NSArray<any>;
}
declare const NSBlockOperation: {
  alloc(): NSBlockOperationUninitialized;
  class(): NSBlockOperation;  blockOperationWithBlock(block: Block): NSBlockOperation;

}

