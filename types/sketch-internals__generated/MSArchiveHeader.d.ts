interface MSArchiveHeaderUninitialized<InitializedType = MSArchiveHeader> extends NSObjectUninitialized<MSArchiveHeader> {
  initWithUnarchiver(unarchiver: MSBaseUnarchiver): InitializedType;
}

interface MSArchiveHeader extends NSObject, IMSCoding {
  encodeWithArchiver(archiver: MSBaseArchiver): void;

  version(): NSInteger;
  setVersion(version: NSInteger): void;
  compatibilityVersion(): NSInteger;
  setCompatibilityVersion(compatibilityVersion: NSInteger): void;
  metadata(): NSDictionary<any, any>;
  setMetadata(metadata: NSDictionary<any, any> | {[key: string]: any}): void;
  root(): any;
  setRoot(root: any): void;
  archiveReferenceIdentifier_bc(): NSString;
}

declare const MSArchiveHeader: {
  alloc(): MSArchiveHeaderUninitialized;
  class(): MSArchiveHeader;
  metadataForNewHeader(): NSDictionary<any, any>;
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

