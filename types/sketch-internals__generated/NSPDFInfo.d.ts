interface NSPDFInfoUninitialized<InitializedType = NSPDFInfo> extends NSObjectUninitialized<NSPDFInfo> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSPDFInfo extends NSObject, INSCopying, INSCoding {
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  URL(): NSURL;
  setURL(URL: NSURL): void;
  fileExtensionHidden(): boolean;
  setFileExtensionHidden(fileExtensionHidden: boolean): void;
  tagNames(): NSArray<any>;
  setTagNames(tagNames: NSArray<any> | any[]): void;
  orientation(): NSPaperOrientation;
  setOrientation(orientation: NSPaperOrientation): void;
  paperSize(): NSSize;
  setPaperSize(paperSize: NSSize): void;
  attributes(): NSMutableDictionary<any, any>;
}

declare const NSPDFInfo: {
  alloc(): NSPDFInfoUninitialized;
  class(): NSPDFInfo;
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

