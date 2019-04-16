interface BCOperationUninitialized<InitializedType = BCOperation> extends NSOperationUninitialized<BCOperation> {}
interface BCOperation extends NSOperation {

  finished(): boolean;
  setFinished(finished: boolean): void;
  executing(): boolean;
  setExecuting(executing: boolean): void;
  cancelled(): boolean;
  setCancelled(cancelled: boolean): void;
}
declare const BCOperation: {
  alloc(): BCOperationUninitialized;
  class(): BCOperation;
}

