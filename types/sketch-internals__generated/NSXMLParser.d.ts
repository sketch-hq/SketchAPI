interface NSXMLParserUninitialized<InitializedType = NSXMLParser> extends NSObjectUninitialized<NSXMLParser> {
  initWithContentsOfURL(url: NSURL): InitializedType;
  initWithData(data: NSData): InitializedType;
  initWithStream(stream: NSInputStream): InitializedType;
}

interface NSXMLParser extends NSObject {
  parse(): boolean;
  abortParsing(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  shouldProcessNamespaces(): boolean;
  setShouldProcessNamespaces(shouldProcessNamespaces: boolean): void;
  shouldReportNamespacePrefixes(): boolean;
  setShouldReportNamespacePrefixes(shouldReportNamespacePrefixes: boolean): void;
  externalEntityResolvingPolicy(): NSXMLParserExternalEntityResolvingPolicy;
  setExternalEntityResolvingPolicy(externalEntityResolvingPolicy: NSXMLParserExternalEntityResolvingPolicy): void;
  allowedExternalEntityURLs(): NSSet<any>;
  setAllowedExternalEntityURLs(allowedExternalEntityURLs: NSSet<any>): void;
  parserError(): NSError;
  shouldResolveExternalEntities(): boolean;
  setShouldResolveExternalEntities(shouldResolveExternalEntities: boolean): void;
  publicID(): NSString;
  systemID(): NSString;
  lineNumber(): NSInteger;
  columnNumber(): NSInteger;
}

declare const NSXMLParser: {
  alloc(): NSXMLParserUninitialized;
  class(): NSXMLParser;
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

