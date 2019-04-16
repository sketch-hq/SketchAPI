interface MSVersionedArchiveUninitialized<InitializedType = MSVersionedArchive> extends NSObjectUninitialized<MSVersionedArchive> {
  initWithURL_version(url: NSURL, version: MSDocumentVersion): InitializedType;
}

interface MSVersionedArchive extends NSObject {
  unarchiveRootObjectVersion_error(version: MSDocumentVersion, error: MOPointer<NSError>): any;
  archiveRootObject_error(rootObject: any, error: MOPointer<NSError>): boolean;
  URLNeedingMigration(): NSURL;
  exists(): boolean;
  cleanupAfterTesting(): void;
}

declare const MSVersionedArchive: {
  alloc(): MSVersionedArchiveUninitialized;
  class(): MSVersionedArchive;
  globalArchiveWithName_extension_version(name: NSString | string, extension: NSString | string, version: MSDocumentVersion): MSVersionedArchive;
  versionedURLWithBase_extension_version(base: NSURL, extension: NSString | string, version: NSUInteger): NSURL;
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

