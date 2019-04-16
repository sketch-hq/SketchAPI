interface BCNetworkTimeUninitialized<InitializedType = BCNetworkTime> extends NSObjectUninitialized<BCNetworkTime> {
  init(): InitializedType;
  initWithHost_timeout(host: NSString | string | null, timeout: NSTimeInterval): InitializedType;
}
interface BCNetworkTime extends NSObject {
  startRequest(): void;

  host(): NSString;
  timeout(): NSTimeInterval;
  includesNetworkTime(): boolean;
  currentDate(): NSDate;
}
declare const BCNetworkTime: {
  alloc(): BCNetworkTimeUninitialized;
  class(): BCNetworkTime;  requestTimeFromHost_timeout_completionBlock(host: NSString | string | null, timeout: NSTimeInterval, completion: MSNetworkTimeCompletionBlock): void;

}

