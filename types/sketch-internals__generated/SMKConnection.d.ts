interface SMKConnectionUninitialized<InitializedType = SMKConnection> extends NSObjectUninitialized<SMKConnection> {}
interface SMKConnection extends NSObject {
  connect(): void;
  close(): void;
  sendData(data: NSData): void;
  didReceiveData(data: NSData): void;

  UUID(): NSUUID;
  error(): NSError;
  queue(): dispatch_queue_t;
  advertisement(): NSDictionary<any, any>;
  status(): NSUInteger;
  setStatus(status: NSUInteger): void;
  connectionInfo(): SMKConnectionInfo;
  connectionType(): NSUInteger;
  resourceHost(): NSString;
}
declare const SMKConnection: {
  alloc(): SMKConnectionUninitialized;
  class(): SMKConnection;
}

