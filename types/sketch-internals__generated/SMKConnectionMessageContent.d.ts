interface SMKConnectionMessageContentUninitialized<InitializedType = SMKConnectionMessageContent> extends NSObjectUninitialized<SMKConnectionMessageContent> {
  initWithDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}

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
  dictionaryRepresentation(): NSDictionary<any, any>;
}

declare const SMKConnectionMessageContent: {
  alloc(): SMKConnectionMessageContentUninitialized;
  class(): SMKConnectionMessageContent;
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

