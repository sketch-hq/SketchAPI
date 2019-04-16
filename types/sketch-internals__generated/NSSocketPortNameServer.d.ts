interface NSSocketPortNameServerUninitialized<InitializedType = NSSocketPortNameServer> extends NSPortNameServerUninitialized<NSSocketPortNameServer> {}

interface NSSocketPortNameServer extends NSPortNameServer {
  portForName(name: NSString | string): NSPort;
  portForName_host(name: NSString | string, host: NSString | string | null): NSPort;
  registerPort_name(port: NSPort, name: NSString | string): boolean;
  removePortForName(name: NSString | string): boolean;
  portForName_host_nameServerPortNumber(name: NSString | string, host: NSString | string | null, portNumber: number): NSPort;
  registerPort_name_nameServerPortNumber(port: NSPort, name: NSString | string, portNumber: number): boolean;

  defaultNameServerPortNumber(): number;
  setDefaultNameServerPortNumber(defaultNameServerPortNumber: number): void;
}

declare const NSSocketPortNameServer: {
  alloc(): NSSocketPortNameServerUninitialized;
  class(): NSSocketPortNameServer;
  sharedInstance(): any;
  systemDefaultPortNameServer(): NSPortNameServer;
  accessInstanceVariablesDirectly(): boolean;

}

