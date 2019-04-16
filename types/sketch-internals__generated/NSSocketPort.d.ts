interface NSSocketPortUninitialized<InitializedType = NSSocketPort> extends NSPortUninitialized<NSSocketPort> {
  initWithTCPPort(port: number): InitializedType;
  initWithProtocolFamily_socketType_protocol_address(family: number, type: number, protocol: number, address: NSData): InitializedType;
  initWithProtocolFamily_socketType_protocol_socket(family: number, type: number, protocol: number, sock: NSSocketNativeHandle): InitializedType;
  initRemoteWithTCPPort_host(port: number, hostName: NSString | string | null): InitializedType;
  initRemoteWithProtocolFamily_socketType_protocol_address(family: number, type: number, protocol: number, address: NSData): InitializedType;
}

interface NSSocketPort extends NSPort {

  protocolFamily(): number;
  socketType(): number;
  protocol(): number;
  address(): NSData;
  socket(): NSSocketNativeHandle;
}

declare const NSSocketPort: {
  alloc(): NSSocketPortUninitialized;
  class(): NSSocketPort;
  port(): NSPort;
  accessInstanceVariablesDirectly(): boolean;

}

