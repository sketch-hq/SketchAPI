interface SMKConnectionInfoUninitialized<InitializedType = SMKConnectionInfo> extends NSObjectUninitialized<SMKConnectionInfo> {}
interface SMKConnectionInfo extends NSObject, INSSecureCoding {
  compareConnectionInfo(info: SMKConnectionInfo): NSComparisonResult;

  UUID(): NSUUID;
  setUUID(UUID: NSUUID): void;
  status(): SMKConnectionStatus;
  setStatus(status: SMKConnectionStatus): void;
  type(): SMKConnectionType;
  setType(type: SMKConnectionType): void;
  advertisement(): NSDictionary<any, any>;
  setAdvertisement(advertisement: NSDictionary<any, any> | {[key: string]: any}): void;
  hidden(): boolean;
}
declare const SMKConnectionInfo: {
  alloc(): SMKConnectionInfoUninitialized;
  class(): SMKConnectionInfo;
}

