interface NSURLConnectionUninitialized<InitializedType = NSURLConnection> extends NSObjectUninitialized<NSURLConnection> {
  initWithRequest_delegate_startImmediately(request: NSURLRequest, delegate: any | null, startImmediately: boolean): InitializedType;
  initWithRequest_delegate___WATCHOS_PROHIBITED(request: NSURLRequest, delegate: any | null): InitializedType;
}
interface NSURLConnection extends NSObject {
  start(): void;
  cancel(): void;
  scheduleInRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  unscheduleFromRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  setDelegateQueue(queue: NSOperationQueue | null): void;

  originalRequest(): NSURLRequest;
  currentRequest(): NSURLRequest;
}
declare const NSURLConnection: {
  alloc(): NSURLConnectionUninitialized;
  class(): NSURLConnection;  connectionWithRequest_delegate___WATCHOS_PROHIBITED(request: NSURLRequest, delegate: any | null): NSURLConnection;
  canHandleRequest(request: NSURLRequest): boolean;
  sendSynchronousRequest_returningResponse_error___WATCHOS_PROHIBITED(request: NSURLRequest, response: NSURLResponse, error: NSError): NSData;
  sendAsynchronousRequest_queue_completionHandler___WATCHOS_PROHIBITED(request: NSURLRequest, queue: NSOperationQueue, handler: Block): void;

}

