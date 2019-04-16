interface SMKMirrorClientUninitialized<InitializedType = SMKMirrorClient> extends NSObjectUninitialized<SMKMirrorClient> {}
interface SMKMirrorClient extends NSObject {

  connectionID(): NSUUID;
  setConnectionID(connectionID: NSUUID): void;
  advertisement(): SMKAdvertisement;
  setAdvertisement(advertisement: SMKAdvertisement): void;
  status(): SMKConnectionStatus;
  setStatus(status: SMKConnectionStatus): void;
  type(): SMKConnectionType;
  setType(type: SMKConnectionType): void;
}
declare const SMKMirrorClient: {
  alloc(): SMKMirrorClientUninitialized;
  class(): SMKMirrorClient;  clientWithConnectionInfo(connectionInfo: SMKConnectionInfo): SMKMirrorClient;

}

