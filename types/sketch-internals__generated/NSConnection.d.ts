interface NSConnectionUninitialized<InitializedType = NSConnection> extends NSObjectUninitialized<NSConnection> {
  initWithReceivePort_sendPort(receivePort: NSPort | null, sendPort: NSPort | null): InitializedType;
}
interface NSConnection extends NSObject {
  invalidate(): void;
  addRequestMode(rmode: NSString | string): void;
  removeRequestMode(rmode: NSString | string): void;
  registerName(name: NSString | string | null): boolean;
  registerName_withNameServer(name: NSString | string | null, server: NSPortNameServer): boolean;
  enableMultipleThreads(): void;
  addRunLoop(runloop: NSRunLoop): void;
  removeRunLoop(runloop: NSRunLoop): void;
  runInNewThread(): void;
  dispatchWithComponents(components: NSArray<any> | any[]): void;

  statistics(): NSDictionary<any, any>;
  requestTimeout(): NSTimeInterval;
  setRequestTimeout(requestTimeout: NSTimeInterval): void;
  replyTimeout(): NSTimeInterval;
  setReplyTimeout(replyTimeout: NSTimeInterval): void;
  rootObject(): any;
  setRootObject(rootObject: any): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  independentConversationQueueing(): boolean;
  setIndependentConversationQueueing(independentConversationQueueing: boolean): void;
  valid(): boolean;
  rootProxy(): NSDistantObject;
  requestModes(): NSArray<any>;
  sendPort(): NSPort;
  receivePort(): NSPort;
  multipleThreadsEnabled(): boolean;
  remoteObjects(): NSArray<any>;
  localObjects(): NSArray<any>;
}
declare const NSConnection: {
  alloc(): NSConnectionUninitialized;
  class(): NSConnection;  allConnections(): NSArray<any>;
  defaultConnection(): NSConnection;
  connectionWithRegisteredName_host(name: NSString | string, hostName: NSString | string | null): NSConnection;
  connectionWithRegisteredName_host_usingNameServer(name: NSString | string, hostName: NSString | string | null, server: NSPortNameServer): NSConnection;
  rootProxyForConnectionWithRegisteredName_host(name: NSString | string, hostName: NSString | string | null): NSDistantObject;
  rootProxyForConnectionWithRegisteredName_host_usingNameServer(name: NSString | string, hostName: NSString | string | null, server: NSPortNameServer): NSDistantObject;
  serviceConnectionWithName_rootObject_usingNameServer(name: NSString | string, root: any, server: NSPortNameServer): NSConnection;
  serviceConnectionWithName_rootObject(name: NSString | string, root: any): NSConnection;
  connectionWithReceivePort_sendPort(receivePort: NSPort | null, sendPort: NSPort | null): NSConnection;
  currentConversation(): any;

}

