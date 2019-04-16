interface NSPortNameServerUninitialized<InitializedType = NSPortNameServer> extends NSObjectUninitialized<NSPortNameServer> {}
interface NSPortNameServer extends NSObject {
  portForName(name: NSString | string): NSPort;
  portForName_host(name: NSString | string, host: NSString | string | null): NSPort;
  registerPort_name(port: NSPort, name: NSString | string): boolean;
  removePortForName(name: NSString | string): boolean;
}
declare const NSPortNameServer: {
  alloc(): NSPortNameServerUninitialized;
  class(): NSPortNameServer;  systemDefaultPortNameServer(): NSPortNameServer;

}

