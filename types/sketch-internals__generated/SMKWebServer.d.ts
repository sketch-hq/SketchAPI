interface SMKWebServerUninitialized<InitializedType = SMKWebServer> extends NSObjectUninitialized<SMKWebServer> {}

interface SMKWebServer extends NSObject {
  start(): void;
  stop(): void;
  authorizeAdvertisementID(connectionID: NSUUID): NSString;
  tokenForAdvertisementID(connectionID: NSUUID): NSString;
  deauthorizeAdvertisementID(connectionID: NSUUID): void;
  invalidateArtboardID(artboardID: NSString | string): void;
  invalidateAllArtboards(): void;
  dataForExportRequest(requestURL: NSURL): NSData;

  URL(): NSURL;
  dataSource(): any;
  setDataSource(dataSource: any): void;
  port(): NSUInteger;
}

declare const SMKWebServer: {
  alloc(): SMKWebServerUninitialized;
  class(): SMKWebServer;
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

