interface SMKMirrorControllerUninitialized<InitializedType = SMKMirrorController> extends NSObjectUninitialized<SMKMirrorController> {}
interface SMKMirrorController extends NSObject {
  disconnect(): void;
  performArtboardRequest_handler(request: SMKArtboardRequest, handler: Block): void;
  performURLRequest_completionHandler(request: NSURLRequest, completionHandler: Block): void;
  connect(client: SMKMirrorClient): void;
  disconnect(client: SMKMirrorClient): void;
  continueUserActivity(userActivity: NSUserActivity): void;
  whitelistClientAdvertisementID(advertisementID: NSUUID): void;
  isClientWhitelisted(client: SMKMirrorClient): boolean;
  invalidateContent(): void;
  invalidateCurrentArtboard(): void;
  invalidateImageForArtboardIdentifier_inRect(identifier: NSString | string, rect: CGRect): void;

  connectionStatus(): SMKConnectionStatus;
  connectionType(): SMKConnectionType;
  serverName(): NSString;
  canDisconnect(): boolean;
  document(): SCKDocument;
  setDocument(document: SCKDocument): void;
  currentArtboardID(): SCKObjectID;
  setCurrentArtboardID(currentArtboardID: SCKObjectID): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  usbEnabled(): boolean;
  webEnabled(): boolean;
  netserviceEnabled(): boolean;
  clients(): NSArray<any>;
  hasConnectedClients(): boolean;
  webURL(): NSURL;
  dataSource(): any;
  setDataSource(dataSource: any): void;
}
declare const SMKMirrorController: {
  alloc(): SMKMirrorControllerUninitialized;
  class(): SMKMirrorController;
}

