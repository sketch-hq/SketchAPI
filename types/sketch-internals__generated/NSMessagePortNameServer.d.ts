interface NSMessagePortNameServerUninitialized<InitializedType = NSMessagePortNameServer> extends NSPortNameServerUninitialized<NSMessagePortNameServer> {}

interface NSMessagePortNameServer extends NSPortNameServer {
  portForName(name: NSString | string): NSPort;
  portForName_host(name: NSString | string, host: NSString | string | null): NSPort;
}

declare const NSMessagePortNameServer: {
  alloc(): NSMessagePortNameServerUninitialized;
  class(): NSMessagePortNameServer;
  sharedInstance(): any;
  systemDefaultPortNameServer(): NSPortNameServer;
  accessInstanceVariablesDirectly(): boolean;

}

