interface ReachabilityUninitialized<InitializedType = Reachability> extends NSObjectUninitialized<Reachability> {}
interface Reachability extends NSObject {
  startNotifier(): boolean;
  stopNotifier(): void;
  currentReachabilityStatus(): NetworkStatus;
  connectionRequired(): boolean;
}
declare const Reachability: {
  alloc(): ReachabilityUninitialized;
  class(): Reachability;  reachabilityWithHostName(hostName: NSString | string): Reachability;
  reachabilityWithAddress(hostAddress: sockaddr_): Reachability;
  reachabilityForInternetConnection(): Reachability;
  reachabilityForLocalWiFi(): Reachability;

}

