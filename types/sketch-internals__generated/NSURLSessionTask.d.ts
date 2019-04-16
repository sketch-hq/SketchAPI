interface NSURLSessionTaskUninitialized<InitializedType = NSURLSessionTask> extends NSObjectUninitialized<NSURLSessionTask> {}
interface NSURLSessionTask extends NSObject, INSCopying, INSProgressReporting {
  cancel(): void;
  suspend(): void;
  resume(): void;

  taskIdentifier(): NSUInteger;
  originalRequest(): NSURLRequest;
  currentRequest(): NSURLRequest;
  response(): NSURLResponse;
  progress(): NSProgress;
  earliestBeginDate(): NSDate;
  setEarliestBeginDate(earliestBeginDate: NSDate): void;
  countOfBytesClientExpectsToSend(): number;
  setCountOfBytesClientExpectsToSend(countOfBytesClientExpectsToSend: number): void;
  countOfBytesClientExpectsToReceive(): number;
  setCountOfBytesClientExpectsToReceive(countOfBytesClientExpectsToReceive: number): void;
  countOfBytesReceived(): number;
  countOfBytesSent(): number;
  countOfBytesExpectedToSend(): number;
  countOfBytesExpectedToReceive(): number;
  taskDescription(): NSString;
  setTaskDescription(taskDescription: NSString | string): void;
  state(): NSURLSessionTaskState;
  error(): NSError;
  priority(): number;
  setPriority(priority: number): void;
}
declare const NSURLSessionTask: {
  alloc(): NSURLSessionTaskUninitialized;
  class(): NSURLSessionTask;
}

