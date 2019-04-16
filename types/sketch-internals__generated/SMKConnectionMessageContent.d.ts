interface SMKConnectionMessageContentUninitialized<InitializedType = SMKConnectionMessageContent> extends NSObjectUninitialized<SMKConnectionMessageContent> {}
interface SMKConnectionMessageContent extends NSObject, ISMKMessageCoding {

  token(): NSString;
  setToken(token: NSString | string): void;
  device(): NSString;
  setDevice(device: NSString | string): void;
  serverPort(): NSUInteger;
  setServerPort(serverPort: NSUInteger): void;
  serverName(): NSString;
  setServerName(serverName: NSString | string): void;
  supportsURLRequests(): boolean;
  setSupportsURLRequests(supportsURLRequests: boolean): void;
}
declare const SMKConnectionMessageContent: {
  alloc(): SMKConnectionMessageContentUninitialized;
  class(): SMKConnectionMessageContent;
}

