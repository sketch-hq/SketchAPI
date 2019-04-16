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
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

