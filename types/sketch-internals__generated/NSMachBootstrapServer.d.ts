interface NSMachBootstrapServerUninitialized<InitializedType = NSMachBootstrapServer> extends NSPortNameServerUninitialized<NSMachBootstrapServer> {}

interface NSMachBootstrapServer extends NSPortNameServer {
  portForName(name: NSString | string): NSPort;
  portForName_host(name: NSString | string, host: NSString | string | null): NSPort;
  registerPort_name(port: NSPort, name: NSString | string): boolean;
  servicePortWithName(name: NSString | string): NSPort;
}

declare const NSMachBootstrapServer: {
  alloc(): NSMachBootstrapServerUninitialized;
  class(): NSMachBootstrapServer;
  sharedInstance(): any;
  systemDefaultPortNameServer(): NSPortNameServer;
  accessInstanceVariablesDirectly(): boolean;

}

