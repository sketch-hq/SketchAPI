interface NSHostUninitialized<InitializedType = NSHost> extends NSObjectUninitialized<NSHost> {}
interface NSHost extends NSObject {
  isEqualToHost(aHost: NSHost): boolean;

  name(): NSString;
  names(): NSArray<any>;
  address(): NSString;
  addresses(): NSArray<any>;
  localizedName(): NSString;
}
declare const NSHost: {
  alloc(): NSHostUninitialized;
  class(): NSHost;  currentHost(): NSHost;
  hostWithName(name: NSString | string | null): NSHost;
  hostWithAddress(address: NSString | string): NSHost;
  setHostCacheEnabled(flag: boolean): void;
  isHostCacheEnabled(): boolean;
  flushHostCache(): void;

}

